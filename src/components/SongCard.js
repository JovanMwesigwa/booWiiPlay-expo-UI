/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Image,  View, TouchableWithoutFeedback } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native'
import { API, Auth, graphqlOperation , Storage } from "aws-amplify";


import { AppText } from '.'
import globalStyles from '../../globalStyles'

const xfmImage = require('../../assets/xfm.jpg')
const capital = require('../../assets/capital.jpg')
const kfm = require('../../assets/kfm.jpg')

const SongCard = ({item}) => {
    const navigation = useNavigation()


    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Player", {song: item})}>
            <View style={styles.songCard}>
                <View style={styles.songArt}>
                    <Image source={{uri: item.image}} resizeMode="cover" style={styles.imageStyles}  />
                </View>
                <View style={styles.midd}>
                    
                    <View>
                        <AppText {...styles.albumTitle} numberOfLines={1}>{item.title}</AppText>
                        <AppText {...styles.artist} numberOfLines={1}>{item.owner}</AppText>
                        {/* <AppText {...styles.artist} numberOfLines={1}>{item.genres[0].name}</AppText> */}
                    </View>


                    <View style={styles.iconsContainer}>
                        <View style={{ flexDirection: 'row',  }}>
                            <Image source={capital} resizeMode="cover" style={{ height: 16, width: 16, borderRadius: 16/2 }}  />
                            <Image source={xfmImage} resizeMode="cover" style={{ height: 16, width: 16, borderRadius: 16/2 }}  />
                            <Image source={kfm} resizeMode="cover" style={{ height: 16, width: 16, borderRadius: 16/2 }}  />
                            <AppText {...styles.moreText}>....</AppText>
                        </View> 
                        <View style={{ flexDirection: 'row-reverse' }}>
                            <AppText {...styles.smallText}>24</AppText>
                            <FontAwesome name="bullhorn" size={15} color="#F98BA5" />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    albumTitle: {
        color: "#fff",
    },
    moreText: {
        color: "#fff",
    },
    artist: {
        color: globalStyles.textGray,
        fontSize: 13,
    },
    songCard: {
        width: "100%",
        height: 80,
        flexDirection: 'row',
        marginVertical: 8,
        backgroundColor: globalStyles.purpleDark
    },
    songArt: {
        flex: 1,
        backgroundColor: globalStyles.textGray,
        borderRadius: 5,
        overflow: "hidden"
    },
    imageStyles: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    smallText: {
        color: "#F98BA5",
        fontSize: 12,
        marginLeft: 5
    },
    midd: {
        flex: 2,
        marginHorizontal: 8,
        justifyContent: 'space-between'
    },
    iconsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})

export default SongCard
