/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, ActivityIndicator, View } from 'react-native'
import { AppTextInput } from '.'

const AppLoadingComponent = ({loading}) => {
    if(!loading)
        return null
    return (
        <View style={styles.container}>
            <ActivityIndicator size={16} color="#fff" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: "#fff",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999999,
        opacity: 0.3
    }
})

export default AppLoadingComponent
