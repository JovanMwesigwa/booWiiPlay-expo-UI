/* eslint-disable prettier/prettier */
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, } from 'react-native'
import globalStyles from '../../globalStyles'

const AppScreen = ({children}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={globalStyles.purpleDark}/>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AppScreen
