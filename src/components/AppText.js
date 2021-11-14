/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

const AppText = ({ children, numberOfLines, ...otherProps }) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={numberOfLines} style={[styles.text, {...otherProps}]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    text: {
        fontSize: 15,
        color: 'black',
    }
})

export default AppText
