/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import globalStyles from '../../globalStyles'

import tracks from '../../data/tracks'
import { AppText, SongCard } from '.'

const RelatedTracks = () => {
    return (
        <View style={styles.container}>
            {
                tracks.map(item => (
                <View key={item.id} style={styles.card}>  

                    <View style={styles.songArt}>
                        <Image source={item.artwork} resizeMode="cover" style={styles.imageStyles}  />
                    </View>

                    <View style={styles.mid}>
                        <AppText {...styles.albumTitle}>{item.title}</AppText>
                        <AppText {...styles.artist}>{item.artist}</AppText>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.trackPlayBtn} onPress={() => {}}>
                            <AntDesign name="play" size={18} color={globalStyles.purpleLighter} />
                        </TouchableOpacity>
                    </View>
                    
                </View>
                ))
            }

           <TouchableOpacity style={styles.playBtn} onPress={() => {}}>
            <AppText {...styles.playText}>Play all</AppText>
                <AntDesign name="play" size={18} color={globalStyles.textWhite} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    albumTitle: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "700"
    },
    playBtn: {
        alignItems: 'center',
        position: "absolute",
        justifyContent: 'center',
        right: 9,
        bottom: 12,
        paddingVertical: 8,
        borderRadius: 35/2,
        paddingHorizontal: 12,
        flexDirection: 'row',
        backgroundColor: globalStyles.purpleLight,
    },
    trackPlayBtn: {

    },
    playText: {
        color: "#fff",
        fontSize: 12,
        paddingRight: 5
    },
    artist: {
        fontSize: 14,
        color: "#777",
    },
    mid: {
        flex: 2,
        marginHorizontal: 10
    },
    card: {
        flexDirection: 'row',
        margin: 8
    },
    container: { 
        flex: 1, 
        backgroundColor: globalStyles.purpleDark,
    },
    songArt: {
        height: 65,
        width: 65,
        backgroundColor: globalStyles.textGray,
        borderRadius: 5,
        overflow: "hidden"
    },
    imageStyles: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
})

export default RelatedTracks
