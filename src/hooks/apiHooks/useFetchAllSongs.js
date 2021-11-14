/* eslint-disable prettier/prettier */
import React from 'react';
import {  useDispatch } from 'react-redux'
import { listSongs } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { fetchSongsFailed, fetchSongsRequest, fetchSongsSuccessful } from '../../features/songs/songsSlice';


const useFetchAllSongs = () => {
    const dispatch = useDispatch()

    const fetchAllSongs = async() => {
        dispatch(fetchSongsRequest())
        try{
            const allSongs = await API.graphql(graphqlOperation(listSongs));
           
            dispatch(fetchSongsSuccessful(allSongs.data.listSongs.items))
        }catch(err) {
            console.log("Error song fetch: ", err.message)
            dispatch(fetchSongsFailed(err.message))
        }
    }

    return fetchAllSongs;
}

export default useFetchAllSongs