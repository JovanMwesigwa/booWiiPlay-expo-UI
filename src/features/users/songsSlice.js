/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    songs: [],
    error: ""
};

export const songsSlice = createSlice({
    name: "songs",
    initialState,
    reducers: {
        fetchSongsRequest: (state, action) => {
            state.loading = true;
        },
        fetchSongsSuccess: (state, action) => {
            state.loading = false;
            state.songs = action.payload;
            state.error = ""
        },
        fetchSongsFailed: (state, action) => {
            state.loading = false;
            state.songs = [];
            state.error = action.payload
        }
    }
});

export const { fetchSongsRequest, fetchSongsSuccess, fetchSongsFailed } = songsSlice.actions;

export default songsSlice.reducer