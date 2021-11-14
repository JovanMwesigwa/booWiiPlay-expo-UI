/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {AppText} from './';

const ErrorComponent = ({error}) => {
    if(!error)
        return null
    return (
        <View style={styles.container}>
            <AppText {...styles.text}>{error}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: 'black',
        borderRadius: 2
    },
    text: {
        color: "gold",
        fontSize: 13,
        textAlign: 'center'
    }
})

export default ErrorComponent
