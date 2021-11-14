/* eslint-disable prettier/prettier */
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import globalStyles from '../../globalStyles'
import AppText from './AppText'

const AppButton = ({title, onPress, small}) => {
    return (
        <Pressable style={[styles.btn, { padding: small ? 5 : 10}]} onPress={onPress}>
            <AppText color="#fff" fontSize={18}>{title}</AppText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        elevation: 5,
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 5,
        borderColor: globalStyles.purpleLight,
        backgroundColor: globalStyles.purpleDark,
        width: "60%",
    },
})

export default AppButton
