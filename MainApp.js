import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppScreen } from './src/components';
import MainAppStackNavigator from './src/navigation/MainAppStackNavigator';
import AuthStackNavigator from './src/navigation/AuthNavigation';
import { useSelector } from 'react-redux';
import useGetToken from './src/hooks/apiHooks/useGetToken';
import useGetSettings from './src/hooks/appHooks/useGetSettings';
import { Auth } from 'aws-amplify';

import globalStyles from './globalStyles';


const MainApp = () => {
  const [ awsUserToken, setAwsUserToken ] = React.useState("")

  const token = useSelector(state => state.awsUserToken.token);
  const firstTime = useSelector(state => state.settings.firstTime);

  const getUserToken = useGetToken()
  const getSettings = useGetSettings()

  React.useEffect(() => {
    getUserToken()
    getSettings()

    getLoggedInUser()
  },[token])

  const getLoggedInUser = async() => {
    const res = await Auth.currentUserInfo()
    let { attributes } = await Auth.currentAuthenticatedUser();

    console.log(res.username)
  }


  return (

        <NavigationContainer>
            {!token ? 
            <>
              <AuthStackNavigator /> 
            </>:
              <AppScreen>
                  <MainAppStackNavigator />
              </AppScreen>
            }
        </NavigationContainer>

  );
}

export default  MainApp;