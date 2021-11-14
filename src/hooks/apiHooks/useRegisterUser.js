/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { initiateRegistration, registerfailed, registerSuccessful } from '../../features/users/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {apiUrl} from '../../../config/apiUrl'

export const storeToken = async(userToken) => {
    try{
      await AsyncStorage.setItem('token', userToken)
    }catch(err){
      console.log(err.message)
    }
  }

const useRegisterUser = () => {
    const dispatch = useDispatch();

    const registerUser = async(data) => {

        dispatch(initiateRegistration());

        try {
            const res = await axios.post(apiUrl+'auth/register', data);

            // const token = res.data.token;

            storeToken(res.data.token)

            dispatch(registerSuccessful(res.data.token))

        } catch (error) {
            console.log(error.message)
            dispatch(registerfailed(error.message))
        }
    }

    return registerUser;
    
}

export default useRegisterUser;