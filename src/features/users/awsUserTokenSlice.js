/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token: null,
    error: null
}

export const awsUserTokenSlice = createSlice({
    name: "awsUser",
    initialState,
    reducers: {
        fetchAwsUserTokenSuccess: (state, action) => {
            state.token = action.payload;
        },
        fetchAwsUserTokenFailed: (state, action) => {
            state.error = action.payload
        },
        removeAwsUserToken: (state) => {
            state.token = null;
        },
    }
})

export const { fetchAwsUserTokenSuccess, fetchAwsUserTokenFailed, removeAwsUserToken } = awsUserTokenSlice.actions

export default awsUserTokenSlice.reducer