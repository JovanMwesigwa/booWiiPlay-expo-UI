/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    user: {},
    error: "",
}

export const awsUserSlice = createSlice({
    name: "awsUser",
    initialState,
    reducers: {
        fetchAUserRequest: (state) => {
            state.loading = true;
        },
        fetchAUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = ""
        },
        fetchAUserFailed: (state, action) => {
            state.loading = false;
            state.user = {};
            state.error = action.payload
        }
    }
})

export const { fetchAUserRequest, fetchAUserSuccess, fetchAUserFailed } = awsUserSlice.actions

export default awsUserSlice.reducer