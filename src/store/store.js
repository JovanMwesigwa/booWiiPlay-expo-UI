/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice'
import settingsReducer from '../features/settings/settingsSlice'
import userProfileReducer from '../features/users/userProfileSlice';
import songsReducer from '../features/users/songsSlice'
import awsUserReducer from '../features/users/awsUserSlice'
import awsUserTokenReducer from '../features/users/awsUserTokenSlice'
import allSongsReducer from '../features/songs/songsSlice';
import allGenresReducer from '../features/songs/songsSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        settings: settingsReducer,
        userProfile: userProfileReducer,
        userSongs: songsReducer,
        awsUser: awsUserReducer,
        awsUserToken: awsUserTokenReducer,
        allSongs: allSongsReducer,
        allGenres: allGenresReducer,
    }
});

