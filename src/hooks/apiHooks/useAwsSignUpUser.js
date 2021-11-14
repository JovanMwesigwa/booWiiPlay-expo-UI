/* eslint-disable prettier/prettier */

import React from 'react';
import { Auth } from 'aws-amplify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import {  fetchAwsUserTokenFailed } from '../../features/users/awsUserTokenSlice';


export const storeToken = async(userToken) => {
    try{
      await AsyncStorage.setItem('AwsUserToken', userToken)
    }catch(err){
      console.log(err.message)
    }
  }

const useAwsSignUpUser = () => {

    const [ loading, setLoading ] = React.useState(false)

    const dispatch = useDispatch();

    const navigation = useNavigation()

    const handleSignUpAwsUser = async(data) => {
        setLoading(true)
        try{
            let regex = /^\s+|\s+$/g; 
            const username = data.username.replace(regex, "");
            const password = data.password.replace(regex, "");
            const email = data.email.replace(regex, "");

            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email
                }
            })
            console.log(user)
            // Store the user token here bro
            // Store the user token here
            // dispatch(fetchAwsUserTokenSuccess(awsUserToken));
            // storeToken(awsUserToken);
            setLoading(false)
            // Navigate to the otp screen....
            navigation.navigate("OTP Screen", {username: data.username })

        }catch(err){
            console.log("Error sign in", err.message)
            dispatch(fetchAwsUserTokenFailed(err.message))
            setLoading(false)
        }
        
        // 
    }

    return {
        loading,
        handleSignUpAwsUser,
    }

}

export default useAwsSignUpUser;