/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    username: '',
    phone: '',
    password: '',
  },
  token: null,
  loading: null,
  error: "",
  firstTime: true,
  userInfo: {

  }
};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserToken: (state, action) => {
          state.token = action.payload;
        },
        initiateRegistration: (state) => {
          state.loading = true;
          state.error = "";
        },
        register: (state, action) => {
            state.user.username = action.payload.username;
            state.user.phone = action.payload.phone;
            state.user.password = action.payload.password
        },
        registerSuccessful: (state, action) => {
          state.loading = false;
          state.token = action.payload;
        },
        registerfailed: (state, action) => {
          state.loading = false;
          state.error = action.payload
        },
        loginUser: (state, action) => {
          state.user.email = action.payload.email;
          state.user.password = action.payload.password;
        },
        logoutUser: (state) => {
          state.token = null;
        },
        fetchUser: (state, action) => {
          state.userInfo = action.payload
        }
    }
})

export const { initiateRegistration, register, registerSuccessful, registerfailed, fetchUserToken, loginUser, logoutUser, fetchUser } = userSlice.actions;

export default userSlice.reducer;