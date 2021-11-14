/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import globalStyles from '../../../globalStyles';


const OnBoardingScreens = ({navigation}) => {
    return (
        <Onboarding
            onSkip={() => navigation.replace("Welcome")}
            onDone={() => navigation.replace("Welcome")}
            pages={[
                {
                    backgroundColor: globalStyles.purpleDark,
                    image: <Image source={require('../../../assets/on.png')} style={{ width: 200, height: 200, borderRadius: 200/2, resizeMode: 'contain' }} />,
                    title: 'Welcome to every artists best friend',
                    subtitle: `BooWii Play promotes your music on radio, so you focus on making music.`,
                },
                {
                    backgroundColor: globalStyles.purpleLighter,
                    image: <Image source={require('../../../assets/on3.png')} style={{ width: 200, height: 200, borderRadius: 200/2, resizeMode: 'contain' }} />,
                    title: 'Choose what radio you want your music to play',
                    subtitle: 'BooWii Play lets you choose the radio stations where you want your music be played.',
                },
                {
                    backgroundColor: globalStyles.purpleLight,
                    image: <Image source={require('../../../assets/on2.png')} style={{ width: 200, height: 200, borderRadius: 200/2, resizeMode: 'contain' }} />,
                    title: 'Explore the Music Player & exciting features',
                    subtitle: 'Let your fans enjoy your music on BooWii Play with our sleek audio player.',
                },
            ]}
            />
    )
}

export default OnBoardingScreens

const styles = StyleSheet.create({})
