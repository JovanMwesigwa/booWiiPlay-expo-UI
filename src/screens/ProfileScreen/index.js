/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { ImageBackground, Pressable, ScrollView, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import AppText from '../../components/AppText.js'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import { Auth } from 'aws-amplify';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

import styles from './styles.js'
import globalStyles from '../../../globalStyles/index.js';
import {apiUrl, imageApiUrl} from '../../../config/apiUrl'
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

const me = require('../../../assets/me.jpg')

// import songs from '../../../data/songs'
import SongCard from '../../components/SongCard.js';
import { useSelector, useDispatch } from 'react-redux';
import useRemoveToken from '../../hooks/apiHooks/useRemoveToken.js';
import {Image, ActivityIndicator} from 'react-native';
import { initiateFetchUserProfile, fetchUserProfileSuccess, fetchUserProfileFailed } from '../../features/users/userProfileSlice.js';
import {API, graphqlOperation} from 'aws-amplify';
import * as ImagePicker from 'expo-image-picker';
import { fetchAUserFailed, fetchAUserRequest, fetchAUserSuccess } from '../../features/users/awsUserSlice.js';

import {getUser} from '../../graphql/queries'
import { removeAwsUserToken } from '../../features/users/awsUserTokenSlice.js';
import useClearAwsUserToken from '../../hooks/apiHooks/useClearAwsUserToken.js';

const ProfileScreen = () => {
    
    const navigation = useNavigation()

    const [ profile, setProfile ] = useState({})
    
    
    const loading = useSelector(state => state.awsUser.loading)
    const user = useSelector(state => state.awsUser.user);
    const error = useSelector(state => state.awsUser.error)

    const dispatch = useDispatch();

    const [ userPic, setUserPic ] = useState("")

    const clearAwsUserToken  = useClearAwsUserToken()

    useEffect(() => {
        fetchUserProfile()
        // signOut()
    },[])

    const fetchUserProfile = async() => {
        dispatch(fetchAUserRequest())

        try{
            const res = await Auth.currentUserInfo();

            const filter = {
                username: {
                    eq: res.username
                }
            }

            const userProfile = await API.graphql({ query: queries.listUsers, variables: {filter: filter}, limit: 1});

            // console.log(userProfile)

            dispatch(fetchAUserSuccess(userProfile.data.listUsers.items[0]));
            setProfile(userProfile)
        }catch(err){
            console.log(err.message)
            dispatch(fetchAUserFailed(err.message))
        }
    }

    const signOut = async() => {
        try {
            clearAwsUserToken()
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    

    return (
        // 
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                        {loading ? 
                                <View style={{ marginVertical: 15 }}><ActivityIndicator size={14} color="#fff" /></View> : 
                            <ImageBackground source={{uri: user?.picture}} style={styles.imageHeader}>
                                <View style={styles.innerTop} >
                                            
                                    <Pressable onPress={() => signOut()}>
                                        <Entypo name="dots-three-vertical" color="#fff" size={18} style={styles.changeImageIcon} />
                                    </Pressable>

                                    <Pressable onPress={() => navigation.navigate("EditProfile", {user, fetchUserProfile})}>
                                        <Feather name="edit-2" size={20} color="#fff" style={styles.changeImageIcon} />
                                    </Pressable>

                                </View>
                                    <LinearGradient  colors={['rgba(161, 6, 35, 0)', 'rgba(16, 6, 35, 1)', globalStyles.purpleDark]} style={styles.linearGradient}>
                                        <View style={styles.top}>

                                            {loading ? (<AppText numberOfLines={1} {...styles.bioText}>...</AppText>) : (<AppText numberOfLines={1} {...styles.artistName}>{user?.username} (Me)</AppText>)}
                                                
                                            <Pressable onPress={() => console.log("Navigate to change user name and bio")} style={styles.editImageIcon}>
                                                <Feather name="edit-2" size={18} color="#fff"  />
                                            </Pressable>

                                        </View>
                                        
                                        <View style={styles.bioContainer}>
                                            <AppText numberOfLines={3} {...styles.bioText}>{user?.bio}</AppText>
                                        </View>
                                        
                                    </LinearGradient>
                            </ImageBackground>

                    }
                <View style={styles.lowerContainer}>
                    <AppText {...styles.headerText}>My Songs</AppText>
                    
                        {/* {
                            songs.map(item => (

                                <SongCard item={item} key={item.id} />

                            ))
                        } */}

                </View>

                </ScrollView>
            </View>
        
    )
}

export default ProfileScreen
