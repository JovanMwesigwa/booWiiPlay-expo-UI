/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AppButton, AppText } from '../../components'
import globalStyles from '../../../globalStyles';
import styles from './styles'

const SplashScreen = ({navigation}) => {
    return (
        <LinearGradient colors={['#21133A', '#9A0FBD']} style={styles.linearGradient}>
         <View style={styles.container}>

             <View style={styles.midContainer}>
                <Image source={globalStyles.logo} style={styles.logoStyles} />
                <AppText {...styles.text}>booWii</AppText>
                <AppText {...styles.desc}>Get your music to radio</AppText>
             </View>

             <AppButton title="Get started" onPress={() => navigation.replace("Register")} />
        </View>
        </LinearGradient>
    )
}

export default SplashScreen

