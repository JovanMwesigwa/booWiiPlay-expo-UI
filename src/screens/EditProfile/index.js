/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View, ScrollView, Dimensions, TextInput } from 'react-native';
import { API } from "aws-amplify";
import * as mutations from '../../graphql/mutations';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Storage } from 'aws-amplify';
import globalStyles from '../../../globalStyles';
import { AppButton, AppLoadingComponent, AppText, AppTextInput } from '../../components';
import * as ImagePicker from 'expo-image-picker';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';

import styles from './styles'

const EditProfile = () => {

    const route = useRoute()
    const navigation = useNavigation()

    const { user, fetchUserProfile } = route.params

    const [ selectedImage, setSelectedImage ] = React.useState(user.picture);
    const [ userBio, setUserBio] = React.useState(user.bio);
    const [ uploadStarted, setUploadStarted] = React.useState(false);
    const [ progressTrack, setProgressTrack] = React.useState(0);
    const [ loading, setLoading ] = React.useState(false);

    // React.useEffect(() => {
    //     getTheImageFromS3()
    // },[])

    const openImageSelector = async() => {
        try {
            // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
        
            // console.log(result);
        
            if (!result.cancelled) {
                setSelectedImage(result.uri);
            }
            
        }catch(err) {
            console.log(err)
        }
    }

    const uploadToS3 = async() => {
        setUploadStarted(true);
        setLoading(true);
        try {
            const imageKey = `profilepic${Date.now()}`;
            const response = await fetch(selectedImage);
            const blob = await response.blob();
            const uploadedPic = await Storage.put(imageKey, blob, {
              contentType: "image/jpeg", // contentType is optional
              progressCallback(progress) {
                console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                setProgressTrack(progress.loaded / progress.total * 0.1);
              },
            });

            if(uploadedPic.key) {
                // Get the pic signed url and save it to the user profile
                const signedURL = await Storage.get(uploadedPic.key);

                const userData = {
                    picture: signedURL,
                    id: user.id,
                    bio: userBio
                }

                await API.graphql({ query: mutations.updateUser, variables: {input: userData}});

                fetchUserProfile();

                setUploadStarted(false);
                navigation.goBack()
                setUploadStarted(false);
                setLoading(false);

                // console.log("updatedUserProfile", updatedUserProfile);
            }

            

          } catch (err) {
            console.log("Error uploading file:", err);
            setUploadStarted(false);
            setLoading(false);
          }

    }

    return (
        <>
        <AppLoadingComponent loading={loading} />
        <ScrollView style={styles.container}>
            
            <View style={styles.main}>
                <View style={styles.top}>
                    {
                        uploadStarted ?
                        <View style={{ marginVertical: 12, width: Dimensions.get("window").width }}>
                            <Progress.Bar 
                                progress={progressTrack} 
                                width={Dimensions.get("window").width } 
                                color={globalStyles.purpleLight}
                            />
                            <AppText {...styles.subText}>uploading...</AppText>
                        </View> :
                        <>
                            <AppText {...styles.header}>complete your profile</AppText>
                            <AppText {...styles.subText}>Get your music to radio</AppText>
                        </>
                    }
                    
                </View>
                <View style={styles.midContainer}>
                    <TouchableOpacity style={styles.picker} onPress={openImageSelector}>
                        {!selectedImage ? 
                            <MaterialIcons name="add-a-photo" style={styles.iconStyles} color={globalStyles.textWhite} size={30} />
                            :
                            <Image source={{ uri: selectedImage }} style={{ width: "100%", height: "100%", resizeMode: 'cover' }} />
                        }
                    </TouchableOpacity>
                    {/* <AppTextInput multiline name="your bio" value={userBio} /> */}
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Your bio" 
                        placeholderTextColor={globalStyles.textWhite}
                        value={userBio} 
                        onChangeText={setUserBio}
                        multiline
                        textAlignVertical={"top"}
                     />
                </View>
                <View style={styles.bottomContainer}>
                    <View style={{ marginVertical: 18, alignItems: 'center' }}>
                        <AppButton title="save" onPress={uploadToS3} />
                    </View>
                </View>
            </View>
            
        </ScrollView>
        </>
    )
}

export default EditProfile
