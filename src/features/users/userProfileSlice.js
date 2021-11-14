/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userProfile: null,
    loading: null,
    error: "",
}

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        initiateFetchUserProfile: (state) => {
            state.loading = true;
        },
        fetchUserProfileSuccess: (state, action) => {
            console.log("FROM REDUCER ===",action.payload)
            state.loading = false;
            state.userProfile = action.payload;
            state.error = ""
        },
        fetchUserProfileFailed: (state, action) => {
            state.loading = false;
            // state.userProfile = [];
            state.error = action.payload;
        },
    }
})


export const { initiateFetchUserProfile, fetchUserProfileSuccess, fetchUserProfileFailed } = userProfileSlice.actions;

export default userProfileSlice.reducer;