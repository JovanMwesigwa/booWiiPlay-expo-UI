/* eslint-disable prettier/prettier */
import { useDispatch } from 'react-redux';
import { fetchUserToken } from '../../features/users/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchAwsUserTokenSuccess } from '../../features/users/awsUserTokenSlice';


const useGetToken = () => {

    const dispatch = useDispatch();

    const getUserToken = async() => {
        try {
            const _token = await AsyncStorage.getItem('AwsUserToken')
        
            if(_token !== null){
                dispatch(fetchAwsUserTokenSuccess(_token))
            }
        
        } catch (error) {
            console.log(error.message)
        }
    }

    return getUserToken;
    
}

export default useGetToken;