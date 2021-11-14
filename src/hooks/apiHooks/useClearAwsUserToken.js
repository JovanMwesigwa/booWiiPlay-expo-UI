/* eslint-disable prettier/prettier */
import { useDispatch } from 'react-redux';
import { fetchUserToken } from '../../features/users/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  removeAwsUserToken } from '../../features/users/awsUserTokenSlice';


const useClearAwsUserToken = () => {

    const dispatch = useDispatch();

    const clearAwsUserToken = async() => {
        try {
            const _token = await AsyncStorage.removeItem('AwsUserToken')
        
            if(_token !== null){
                dispatch(removeAwsUserToken(_token))
            }
        
        } catch (error) {
            console.log(error.message)
        }
    }

    return clearAwsUserToken;
    
}

export default useClearAwsUserToken;