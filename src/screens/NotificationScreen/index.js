/* eslint-disable prettier/prettier */
import React from 'react'
import { View, ScrollView } from 'react-native'
import AppText from '../../components/AppText.js'
import Entypo from 'react-native-vector-icons/Entypo'

import styles from './styles.js'
import globalStyles from '../../../globalStyles/index.js'

import { NoticationCard } from '../../components/'

import notificationsData from '../../../data/notificationData'


const NotificationsScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.headerContainer}>
                <AppText {...styles.headerText}>Notifications</AppText>
                <Entypo name="dots-three-vertical" size={18} color={globalStyles.textWhite} />
            </View>

        {
            notificationsData.map(item => (
                <NoticationCard key={item.id} item={item} />
            ))
        }
           </ScrollView>     
        </View>
        
    )
}

export default NotificationsScreen
