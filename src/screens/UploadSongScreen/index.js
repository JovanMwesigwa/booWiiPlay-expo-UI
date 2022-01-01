/* eslint-disable prettier/prettier */
import React from 'react'
import { ScrollView, Image, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Formik } from 'formik'
import * as yup from 'yup'
import { API, Auth, graphqlOperation , Storage } from "aws-amplify";
import { S3Image } from 'aws-amplify-react-native';
import { v4 as uuidv4 } from 'uuid';
import * as mutations from '../../graphql/mutations';
import * as ImagePicker from 'expo-image-picker';

import styles from './styles'

import globalStyles from '../../../globalStyles'
import { AppButton, AppLoadingComponent, AppText, AppTextInput, ErrorComponent, GenreModal } from '../../components'
import useFetchAllSongs from '../../hooks/apiHooks/useFetchAllSongs'

const songValidationSchema = yup.object().shape({
    songFile: yup.string().required("Song file is required"),
    title: yup.string().required("Your song must have a name"),
    description: yup.string(),
    genreID: yup.string(),
    art: yup.string(),
});



const UploadSongScreen = ({ navigation }) => {
    const [ userID, setUserID ] = React.useState("")
    const [ loading, setLoading ] = React.useState(false)
    const [ error, setError ] = React.useState("")
    const [ modalOpen, setModalOpen ] = React.useState(false)

    const [selectedGenreID, setSelectedGenreID] = React.useState("");
    const [picture, setPicture] = React.useState("");

    const handleSubmitUpload = async(values) => {
        setLoading(true)

        try{
            const songUploadData = {
                userID: userID, 
                title: values.title, 
                description: values.description, 
                audioUri: values.songFile, 
                genreID: selectedGenreID,
                artUri: picture
            }
            // const upload = await API.graphql({ query: mutations.createSong, variables: {input: songUploadData}});
            // const upload = await API.graphql(graphqlOperation(mutations.createSong, {input: songUploadData}));

            // console.log(upload.data)
            console.log(songUploadData)
            // fetchAllSongs()
            
            navigation.navigate("Add Media")

            setLoading(false)
        }catch(e){
            console.log("Error uploading: ",e.message)
            setError("OOPs!, we could not upload your song.")
            setLoading(false)
        }

    }




    // console.log(picture)


    return (
        <View style={styles.container}>
            <GenreModal modalOpen={modalOpen} setModalOpen={setModalOpen} setSelectedGenreID={setSelectedGenreID} />
            <AppLoadingComponent loading={loading} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerContainer}>
                    <AppText {...styles.headerText}>booWii your song</AppText>
                    <AppText {...styles.subHeader}>Lets promote your talent</AppText>
                </View>

                <Formik
                    validationSchema={songValidationSchema}
                    initialValues={{ songFile: "", title: "", description: "", genreID: "3521cfd9-5ab0-41a2-ac5c-0f5169ad2606", art: "" }}
                    onSubmit={(values) => handleSubmitUpload(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
                    <>
                        <View style={styles.midContainer}>
                            <AppTextInput 
                                name="song title" 
                                value={values.title} 
                                icon="md-disc-sharp" 
                                setUserRegisterInfo={handleChange('title')} 
                                errors={errors.title}
                                onBlur={handleBlur('title')}
                                touched={touched.title}
                            />
                                
                            <AppTextInput 
                                name="description" 
                                value={values.description} 
                                icon="musical-note-sharp" 
                                setUserRegisterInfo={handleChange('description')} 
                                errors={errors.description}
                                noIcon
                                onBlur={handleBlur('description')}
                                touched={touched.description}
                                multiline
                            />
                                
                                <TouchableOpacity style={styles.btn} onPress={() => setModalOpen(true)}>
                                    <Ionicons name="md-caret-down-sharp" style={styles.iconStyles} color={globalStyles.textWhite} size={20} />
                                    <AppText {...styles.caption}>your song genre</AppText>
                                </TouchableOpacity>

                            <View style={styles.pictureContainer}>
                                <View style={styles.imageStyle}>
                                    {/* <S3Image imgKey={picture} style={{ width: "100%", height: "100%", resizeMode: 'cover' }} /> */}
                                </View>
                                <TouchableOpacity style={styles.artContainer} onPress={() => {}}>
                                    <Ionicons name="images" style={styles.iconStyles} color={globalStyles.textWhite} size={20} />
                                </TouchableOpacity>
                            </View>      

                            {/* <View style={styles.songContainer}>
                                <TouchableOpacity style={styles.songUploadContainer} onPress={selectSong}>
                                    <Ionicons name="md-pulse-sharp" style={styles.iconStyles} color={globalStyles.textWhite} size={20} />
                                    <AppText {...styles.caption}>add song</AppText>
                                </TouchableOpacity>
                            </View> */}
                                
                            {/* <AppTextInput 
                                name="song art" 
                                value={values.art} 
                                icon="images" 
                                setUserRegisterInfo={handleChange('art')} 
                                errors={errors.art}
                                onBlur={handleBlur('art')}
                                touched={touched.art}
                            /> */}
                                

                            <AppTextInput 
                                name="audio" 
                                value={values.songFile} 
                                icon="md-pulse-sharp" 
                                setUserRegisterInfo={handleChange('songFile')} 
                                errors={errors.songFile}
                                onBlur={handleBlur('songFile')}
                                touched={touched.songFile}
                            />
                                
                        </View>

                            <View style={{ marginVertical: 18, alignItems: 'center' }}>
                                
                                <AppButton title="Upload" onPress={handleSubmit} />
                            </View>

                        </>
                    )}
                </Formik>
                <ErrorComponent error={error} />
            </ScrollView>
        </View>
    )
}

export default UploadSongScreen

