/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper';
import { AppText } from '.';
import globalStyles from '../../globalStyles';

const image = require('../../assets/capital.jpg')

const GenrePickerCard = ({item, setSelectedGenreID}) => {
    const [checked, setChecked] = React.useState(false);
    

    return (
        <View style={styles.cardContainer}>

            <View style={styles.left}>

                <View>
                    <AppText {...styles.headerText}>{item.name}</AppText>
                    <AppText {...styles.subHeaderText}>Over - 50 songs</AppText>
                    <AppText {...styles.caption}>Over 100 Radios playing....</AppText>
                </View>
               
            </View>
            <View style={styles.checkBoxContainer}>
                <AppText {...styles.topText}>Top</AppText>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    color="#fff"
                    uncheckedColor="#fff"
                    onPress={() => {
                        setChecked(!checked);
                        setSelectedGenreID(item.id);
                    }}
                />
                    
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
        fontSize: 12,
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
        fontSize: 14,
        fontWeight: "700"
    },
    subHeaderText: {
        fontSize: 12,
        color: "#777",
    },
    topText: {
        fontSize: 13,
        color: "gold",
    }
})

export default GenrePickerCard
