/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    genres: [],
    error: "",
}

export const songGenresSlice = createSlice({
    name: "songs",
    initialState,
    reducers: {
        fetchGenresRequest: (state) => {
            state.loading = true;
        },
        fetchGenresSuccessful: (state, action) => {
            state.loading = false;
            state.genres = action.payload;
            state.error = ""
        },
        fetchGenresFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const { fetchGenresRequest, fetchGenresSuccessful, fetchGenresFailed } = songGenresSlice.actions

export default songGenresSlice.reducer