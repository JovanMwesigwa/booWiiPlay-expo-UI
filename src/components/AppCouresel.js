/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const image =  require('../../assets/neon1.jpg')



const AppCouresel = () => {
    return (
        <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <Image source={image} resizeMode="cover" style={styles.imageStyles} />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        backgroundColor: "#777",
        marginTop: 12,
        borderRadius: 5,
        height: 150,
        width: "95%",
        overflow: "hidden"
    },
    imageStyles: {
        flex: 1,
        width: "100%",
        height: "100%"
    }
})

export default AppCouresel
