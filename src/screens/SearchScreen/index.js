/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import AppText from '../../components/AppText.js'
import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './styles.js'
import globalStyles from '../../../globalStyles/index.js'
import {AppTextInput, MediaCard, AppCouresel, SongCard} from '../../components/'

import songs from '../../../data/songs'

const user = require('../../../assets/user.jpg')
const paris = require('../../../assets/paris.jpg')
const yellow = require('../../../assets/yellow.jpg')



const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.headerContainer}>
                    <AppText {...styles.headerText}>Search</AppText>
                </View>

                <AppTextInput placeholder="Djs, Radios, Artists" icon="search" rounded />

                <View style={styles.infoHeader}>
                    <AppText {...styles.leftText}>Top BooWii</AppText>
                    <AppText {...styles.rightText}>All</AppText>
                </View>

                <View style={styles.cardContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator>
                        <View style={styles.card}>
                            <View style={styles.songArt}>
                                <Image source={user} resizeMode="cover" style={styles.imageStyles} />
                            </View>
                            <AppText {...styles.artist}>Your Love</AppText>
                            <AppText {...styles.song}>Bae Love</AppText>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.songArt}>
                                <Image source={paris} resizeMode="cover" style={styles.imageStyles} />
                            </View>
                            <AppText {...styles.artist}>Your Love</AppText>
                            <AppText {...styles.song}>Bae Love</AppText>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.songArt}>
                                <Image source={yellow} resizeMode="cover" style={styles.imageStyles} />
                            </View>
                            <AppText {...styles.artist}>Your Love</AppText>
                            <AppText {...styles.song}>Bae Love</AppText>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.infoHeader}>
                    <AppText {...styles.leftText}>Top Trends</AppText>
                    <AppText {...styles.rightText}>All</AppText>
                </View>

                <View style={styles.cardContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator>
                        <View style={styles.card}>
                            <View style={styles.songArt}>
                                <Image source={user} resizeMode="cover" style={styles.imageStyles} />
                            </View>
                            <AppText {...styles.artist}>Your Love</AppText>
                            <AppText {...styles.song}>Bae Love</AppText>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.songArt}>
                                <Image source={paris} resizeMode="cover" style={styles.imageStyles} />
                            </View>
                            <AppText {...styles.artist}>Your Love</AppText>
                            <AppText {...styles.song}>Bae Love</AppText>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.songArt}>
                                <Image source={yellow} resizeMode="cover" style={styles.imageStyles} />
                            </View>
                            <AppText {...styles.artist}>Your Love</AppText>
                            <AppText {...styles.song}>Bae Love</AppText>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.infoHeader}>
                    <AppText {...styles.leftText}>Top Covers</AppText>
                    <AppText {...styles.rightText}>All</AppText>
                </View>

                <View style={styles.cardContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator>
                        <View style={styles.card}>
                            <View style={styles.songArt}>
                                <Image source={user} resizeMode="cover" style={styles.imageStyles} />
                            </View>
                            <AppText {...styles.artist}>Your Love</AppText>
                            <AppText {...styles.song}>Bae Love</AppText>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.songArt}>
                                <Image source={paris} resizeMode="cover" style={styles.imageStyles} />
                            </View>
                            <AppText {...styles.artist}>Your Love</AppText>
                            <AppText {...styles.song}>Bae Love</AppText>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.songArt}>
                                <Image source={yellow} resizeMode="cover" style={styles.imageStyles} />
                            </View>
                            <AppText {...styles.artist}>Your Love</AppText>
                            <AppText {...styles.song}>Bae Love</AppText>
                        </View>
                    </ScrollView>
                </View>
                
            </ScrollView>
        </View>
    )
}

export default SearchScreen
