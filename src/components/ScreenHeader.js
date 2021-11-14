/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppText } from '.'
import globalStyles from '../../globalStyles'

const ScreenHeader = ({title, sub="Lets promote your talent"}) => {
    return (
        <View style={styles.headerContainer}>
            <AppText {...styles.headerText}>{title}</AppText>
            <AppText {...styles.subHeader}>{sub}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 10,
        marginTop: 13,
        paddingVertical: 12,
        width: "100%",
    },
    headerText: {
        color: globalStyles.textWhite,
        fontSize: 26,
        fontWeight: '700'
    },
    subHeader: {
        color: globalStyles.textWhite,
        fontSize: 13
    },
})

export default ScreenHeader
