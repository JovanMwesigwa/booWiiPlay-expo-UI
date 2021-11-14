/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper';
import { AppText } from '.';
import globalStyles from '../../globalStyles';

const image = require('../../assets/capital.jpg')

const StationCard = () => {
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={styles.cardContainer}>

            <View style={styles.left}>

                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>

                <View>
                    <AppText {...styles.headerText}>Galaxy FM</AppText>
                    <AppText {...styles.subHeaderText}>English, Luganda</AppText>
                    <AppText {...styles.caption}>Mostly, Dancehall and AfroBeat</AppText>
                </View>
                <View>
                    <AppText {...styles.rating}>5-Star</AppText>
                </View>
            
            </View>
            <View style={styles.checkBoxContainer}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    color="#fff"
                    uncheckedColor="#fff"
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
                    <AppText {...styles.subHeaderText}>UG</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        width: "100%",
        flexDirection: "row",
        marginVertical: 14
    },
    caption: {
        fontSize: 13,
        color: "green"
    },
    rating: {
        fontSize: 12,
        color: "gold"
    },  
    checkBoxContainer: {
        alignItems: 'center'
    },
    left: {
        flex: 1,
        flexDirection: "row",
    },
    imageContainer: {
        backgroundColor: "#ddd",
        borderRadius: 65/2,
        width: 65,
        height: 65,
        marginRight: 12,
        overflow: "hidden"
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    headerText: {
        color: globalStyles.textWhite,
        fontSize: 14
    },
    subHeaderText: {
        fontSize: 13,
        color: "#777",
    }
})

export default StationCard
