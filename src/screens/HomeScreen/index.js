/* eslint-disable prettier/prettier */
import React from 'react'
import { ScrollView,  View, ActivityIndicator } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useSelector, useDispatch } from 'react-redux'
import { listSongs } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

import AppText from '../../components/AppText.js'
import styles from './styles.js'
import globalStyles from '../../../globalStyles/index.js'
import {MediaCard, AppCouresel, SongCard} from '../../components/'


import songs1 from '../../../data/songs'
import { fetchSongsFailed, fetchSongsSuccessful, fetchSongsRequest } from '../../features/songs/songsSlice.js'


const Home = ({navigation}) => {
    const { loading, songs, error} = useSelector(state => state.allSongs)

    const dispatch = useDispatch()

    React.useEffect(() => {
        fetchAllSongs()
    },[]);

    const fetchAllSongs = async() => {
        dispatch(fetchSongsRequest())
        try{
            const allSongs = await API.graphql(graphqlOperation(listSongs));
           
            dispatch(fetchSongsSuccessful(allSongs.data.listSongs.items))
            // console.log("Test ====",allSongs.data)
        }catch(err) {
            console.log("Error song fetch: ", err)
            dispatch(fetchSongsFailed(err.message))
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <AppText {...styles.headerText}>Home</AppText>
                <AntDesign name="search1" size={18} color={globalStyles.textWhite} />
            </View>

                <AppCouresel />

                <MediaCard />

            <View style={styles.body}>
                <AppText {...styles.forYou}>For You</AppText>
                <View style={styles.songContainer}>
                    {/* {
                        !error && (
                            loading ? <ActivityIndicator size={14} color="#fff" /> : (
                                
                                    songs.map(item => (
                                        <SongCard key={item.id} item={item}   />
                                    ))
                                
                            )
                        )
                    } */}
                    <SongCard  item={songs1}   />
                    <SongCard  item={songs1}   />
                    <SongCard  item={songs1}   />
                    <SongCard  item={songs1}   />
                    <SongCard  item={songs1}   />
                    <SongCard  item={songs1}   />
                    <SongCard  item={songs1}   />
                    <SongCard  item={songs1}   />
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default Home
