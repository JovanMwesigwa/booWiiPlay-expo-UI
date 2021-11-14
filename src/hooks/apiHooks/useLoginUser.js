/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { fetchUser, initiateRegistration, registerfailed, registerSuccessful } from '../../features/users/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth } from 'aws-amplify'


import {apiUrl} from '../../../config/apiUrl'

export const storeToken = async(userToken) => {
    try{
      await AsyncStorage.setItem('token', userToken)
    }catch(err){
      console.log(err.message)
    }
  }

const useLoginUser = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user.userInfo )

    const fetchUserInfo = async(userToken) => {
      try{
        const res = await axios.get(apiUrl+'users/', {
          headers: {
            'Authorization':  "Bearer "+userToken
          }
        })
        // console.log(res.data)
        dispatch(fetchUser(res.data.response))
      }catch(err){
        console.log(err.message)
      }
    }

    const loginUser = async(data) => {

        dispatch(initiateRegistration());
        console.log(data)
        try {
            const res = await axios.post(apiUrl+'auth/login', data);

            const userLoggedIn = await Auth.currentAuthenticatedUser();
            // const token = res.data.token;
            if(!userLoggedIn) {
              storeToken("userIsLoggedIn")

            }else{
              storeToken(null)
            }

            // storeToken(res.data.token)
            // storeToken(res.data.token)

            dispatch(registerSuccessful(res.data.token))

            fetchUserInfo(res.data.token)
            // 

        } catch (error) {
          // console.log(error.status);
          console.log(error.message);
          if(error.message){
            dispatch(registerfailed(error.message))
          }else {
            dispatch(registerfailed(error.response.data.error))
          }
        }
    }

    return loginUser;
    
}

export default useLoginUser;