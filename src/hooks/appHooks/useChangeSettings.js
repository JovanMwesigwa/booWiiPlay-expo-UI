/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { initiateRegistration, registerfailed, registerSuccessful } from '../../features/users/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onFirstRun } from '../../features/settings/settingsSlice';


export const storeAppState = async() => {
    try{

      await AsyncStorage.setItem('isFirstTime', 'true')
    }catch(err){
      console.log(err.message)
    }
  }

export const changeAppState = async() => {
    try{

      await AsyncStorage.setItem('isFirstTime', 'false')
    }catch(err){
      console.log(err.message)
    }
  }


const useChangeSettings = () => {
    const dispatch = useDispatch();

    const firstTime = useSelector(state => state.settings.firstTime)

    const setAppSettings = async() => {

        try {

            storeAppState()

            dispatch(onFirstRun())

            changeAppState()

        } catch (error) {
            console.log(error.message)
        }
    }

    return setAppSettings;
    
}

export default useChangeSettings;