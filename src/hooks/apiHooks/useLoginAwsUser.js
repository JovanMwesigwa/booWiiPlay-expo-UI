/* eslint-disable prettier/prettier */

import React from 'react';
import { Auth } from 'aws-amplify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { fetchAwsUserTokenSuccess, fetchAwsUserTokenFailed } from '../../features/users/awsUserTokenSlice';


export const storeToken = async(userToken) => {
    try{
      await AsyncStorage.setItem('AwsUserToken', userToken)
    }catch(err){
      console.log(err.message)
    }
  }

const useAwsLoginUser = () => {

    const [ loading, setLoading ] = React.useState(false)

    const dispatch = useDispatch();

    const handleLoginAwsUser = async(data) => {
      setLoading(true)
        try{
            let regex = /^\s+|\s+$/g; 
            const username = data.username.replace(regex, "");
            const password = data.password.replace(regex, "");

            const user = await Auth.signIn( username, password);

            const awsUserToken = user.signInUserSession.accessToken.jwtToken
            // Store the user token here
            dispatch(fetchAwsUserTokenSuccess(awsUserToken));
            storeToken(awsUserToken);
            
            setLoading(false);

        }catch(err){
            console.log("Error sign in", err.message)
            dispatch(fetchAwsUserTokenFailed(err.message))
            setLoading(false)
        }
        
        // 
    }

    return {
      loading,
        handleLoginAwsUser
    }

}

export default useAwsLoginUser;