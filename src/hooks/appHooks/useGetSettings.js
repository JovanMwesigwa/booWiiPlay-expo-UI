/* eslint-disable prettier/prettier */
import { useDispatch } from 'react-redux';
import { fetchUserToken, } from '../../features/users/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirstTime } from '../../features/settings/settingsSlice';


const useGetSettings = () => {

    const dispatch = useDispatch();

    const getSettings = async() => {
        try {
            const _isFirstTime = await AsyncStorage.getItem('isFirstTime')
        
            if(_isFirstTime !== null){
                dispatch(getFirstTime(_isFirstTime))
            }
        
        } catch (error) {
            console.log(error.message)
        }
    }

    return getSettings;
    
}

export default useGetSettings;