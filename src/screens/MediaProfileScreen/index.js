/* eslint-disable prettier/prettier */
import React from 'react'
import { ImageBackground, View, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import AppText from '../../components/AppText.js'
import Entypo from 'react-native-vector-icons/Entypo'

import styles from './styles.js'
import globalStyles from '../../../globalStyles/index.js';

const me = require('../../../assets/me.jpg')

import genres from '../../../data/genres'

const MediaProfileScreen = () => {
    return (
        // 
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>

                <ImageBackground source={me} style={styles.imageHeader}>

                    <View style={styles.innerTop} >
                        <AppText {...styles.locationText}>UG</AppText>
                        <View style={styles.btn}>
                            <Entypo name="radio" size={25} color="#fff" />
                        </View>
                    </View>

                    <LinearGradient  colors={['rgba(161, 6, 35, 0)', 'rgba(16, 6, 35, 1)', globalStyles.purpleDark]} style={styles.linearGradient}>
                        <View style={styles.top}>
                            <AppText {...styles.artistName}>Capital 91.3 FM </AppText>
                            <Entypo name="dots-three-vertical" color="#fff" size={18} />
                        </View>
                        <View style={styles.bioContainer}>
                            <AppText {...styles.bioText}>Capital FM is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</AppText>
                        </View>
                    </LinearGradient>

                </ImageBackground>

                <View style={styles.lowerContainer}>
                    <AppText {...styles.headerText}>Top Genres</AppText>
                    
                        {
                            genres.map(item => (

                                <View key={item.id} style={{ flexDirection: 'row', marginVertical: 5 }}>
                                    <View style={{ height: 24, width: 25, backgroundColor: globalStyles.textGray, borderRadius: 5 }} />
                                    <AppText {...styles.nameText}>{item.name}</AppText>
                                </View>

                            ))
                        }

                    <AppText {...styles.headerText}>Top Music Shows</AppText>
                </View>
                </ScrollView>
            </View>
        
    )
}

export default MediaProfileScreen;
