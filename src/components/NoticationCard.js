/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AppText } from '.'
import globalStyles from '../../globalStyles'

const image = require('../../assets/capital.jpg')

const NoticationCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={item.image} resizeMode="cover" style={styles.imageStyles} />
            </View>
            <View style={styles.middContainer}>
                <AppText {...styles.userText}>{item.title}</AppText>
                <AppText {...styles.main}>
                    {item.content}
                </AppText>
                <AppText {...styles.timeStyles}>{item.timeStamp}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 85,
        width: "100%",
        marginVertical: 12
    },
    timeStyles: {
        color: "#777",
        fontSize: 12,
        marginHorizontal: 12
    },
    imageStyles: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    main: {
        color: "#fff",
        marginHorizontal: 12,
        fontSize: 12
    },
    userText: {
        color: "#fff",
        fontWeight: "700",
        marginHorizontal: 12,
        fontSize: 12
    },
    imageContainer: {
        backgroundColor: "#777",
        borderRadius: 60/2,
        width: 60,
        height: 60,
        overflow: "hidden"
    },
    middContainer: {
        flex: 2,
        borderBottomWidth: 0.4,
        borderBottomColor: globalStyles.purpleLighter
    },
    lastContainer: {
        flex: 1,
    }
})

export default NoticationCard
