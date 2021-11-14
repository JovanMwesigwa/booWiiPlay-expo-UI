/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/users/userSlice';


const useRemoveToken = () => {

    const dispatch = useDispatch()

    const removeUserToken = async() => {
        try {
            await AsyncStorage.removeItem('token')
            dispatch(logoutUser())
        } catch (error) {
            console.log(error.message)
        }
    }

    return removeUserToken;
    
}

export default useRemoveToken;