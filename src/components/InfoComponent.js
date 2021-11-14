/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppText } from '.'
import globalStyles from '../../globalStyles'

const InfoComponent = ({left, right="All"}) => {
    return (
        <View style={styles.infoHeader}>
            <AppText {...styles.leftText}>{left}</AppText>
            <AppText {...styles.rightText}>{right}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    infoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: globalStyles.purpleLighter,
        paddingBottom: 15,
        marginVertical: 12,
        paddingHorizontal: 5
    },
    leftText: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "700"
    },
    rightText: {
        color: "#777",
        fontSize: 13,
    },
})

export default InfoComponent
