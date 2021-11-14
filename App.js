import React from 'react';
import 'react-native-gesture-handler';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import { Provider } from 'react-redux';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';

import globalStyles from './globalStyles';
import MainApp from './MainApp';
import { store } from './src/store/store'

Amplify.configure(awsconfig);


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: globalStyles.purpleDark,
    accent: globalStyles.purpleLight,
  },
};



const App = () => {

  return (

    <PaperProvider theme={theme}>
      <Provider store={store}>
        <MainApp />
      </Provider>
    </PaperProvider>

  );
}

export default App;