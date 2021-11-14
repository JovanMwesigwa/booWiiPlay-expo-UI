/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, ScrollView, ImageBackground, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import globalStyles from '../../../globalStyles'
import {AppText, AppButton} from'../../components/'

import styles from './styles'

const image = require('../../../assets/neon1.jpg')

const SongSummaryScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={22} color="#fff" />
                    </TouchableOpacity>
                    <AppText {...styles.headerText}>Song Summary</AppText>
                    <View />
                </View>

                <ImageBackground blurRadius={20} source={image} style={styles.midContainer}>
                    <Image source={image} blurRadius={1} style={styles.imageStyles} />
                </ImageBackground>
                    <View style={styles.playerContainer}>
                        <View>
                            <AppText {...styles.title}>Swag turn-Up</AppText>
                            <AppText {...styles.caption}>Dancehall, Afro-Beat</AppText>
                        </View>
                        <View>
                            <View style={styles.progressBar} />
                            <View style={styles.captionContainer}>
                                <AppText {...styles.caption}>2:10</AppText>
                                <AppText {...styles.caption}>3:18</AppText>
                            </View>
                            <View style={styles.playBtnContainer}>
                                <View style={styles.prevBtn}>
                                    <AntDesign name="banckward" size={18} color={globalStyles.purpleDark} />
                                </View>
                                <View style={styles.playBtn}>
                                    <AntDesign name="play" size={40} color={globalStyles.textWhite} />
                                </View>
                                <View style={styles.nextBtn}>
                                <View style={styles.prevBtn}>
                                    <AntDesign name="forward" size={18} color={globalStyles.purpleDark} />
                                </View>
                                </View>
                            </View>
                        </View>
                    </View>
                <View style={styles.botContainer}>
                    <AppText {...styles.bottomHeader}>Radio stations</AppText>

                    <View style={styles.radioContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.radioImage} />
                            <AppText {...styles.radioText}>Capital FM</AppText>
                        </View>
                        <AppText {...styles.statusText}>Now playing</AppText>
                    </View>

                    <View style={styles.radioContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.radioImage} />
                            <AppText {...styles.radioText}>Galaxy FM</AppText>
                        </View>
                        <AppText {...styles.statusText}>Now playing</AppText>
                    </View>

                    <View style={styles.radioContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.radioImage} />
                            <AppText {...styles.radioText}>KFM</AppText>
                        </View>
                        <AppText {...styles.statusText}>Now playing</AppText>
                    </View>

                    <AppText {...styles.bottomHeader}>Djs</AppText>

                    <View style={styles.radioContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.radioImage} />
                            <AppText {...styles.radioText}>Hardwell</AppText>
                        </View>
                        <AppText {...styles.statusText}>Now playing</AppText>
                    </View>

                    <View style={styles.radioContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.radioImage} />
                            <AppText {...styles.radioText}>Skrillex</AppText>
                        </View>
                        <AppText {...styles.statusText}>Now playing</AppText>
                    </View>

                    <View style={styles.costsContainer}>
                        <AppText {...styles.costsText}>Costs</AppText>
                        <AppText {...styles.costsText}>UGX 450,000</AppText>
                    </View>

                    <View style={{ marginVertical: 18, alignItems: 'center' }}>
                        <AppButton title="Pay" small onPress={() => navigation.navigate("Song Summary")} />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default SongSummaryScreen

