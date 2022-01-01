/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { initiateRegistration, registerfailed, registerSuccessful } from '../../features/users/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CreateFirstTimeUser} from '../../graphql/mutations'
import * as mutations from '../../graphql/mutations';


import {apiUrl} from '../../../config/apiUrl'

const createAUserProfile = async(ID, userName, email) => {
  try{
    const userProfileAttributes = {
      id: ID,
      username: userName,
      email: email,
    }

    const userProfile = await API.graphql(graphqlOperation(mutations.createUser, {input: userProfileAttributes})); // equivalent to above example

  }catch(err){
    console.log(err.message)
  }
}


const getAuthUser = async() => {
  try{
      const res = await Auth.currentUserInfo()
      return res.attributes
  }catch(err) {
      console.log(err)
  }
}

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

            const authUser = getAuthUser();

            if(!authUser.sub){
              createAUserProfile(authUser.sub, data.username, data.email);
            }

        } catch (error) {
            console.log(error.message)
            dispatch(registerfailed(error.message))
        }
    }

    return registerUser;
    
}

export default useRegisterUser;