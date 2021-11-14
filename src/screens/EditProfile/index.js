/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import globalStyles from '../../../globalStyles';
import { AppButton, AppText, AppTextInput } from '../../components';

import styles from './styles'

const EditProfile = () => {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.main}>
                <View style={styles.top}>
                    <AppText {...styles.header}>complete your profile</AppText>
                    <AppText {...styles.subText}>Get your music to radio</AppText>
                </View>
                <View style={styles.midContainer}>
                    <TouchableOpacity style={styles.picker}>
                        <MaterialIcons name="add-a-photo" style={styles.iconStyles} color={globalStyles.textWhite} size={30} />
                    </TouchableOpacity>
                    <AppTextInput multiline name="your bio" />
                </View>
                <View style={styles.bottomContainer}>
                    <View style={{ marginVertical: 18, alignItems: 'center' }}>
                        <AppButton title="Go" onPress={() => console.log("Get it started")} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default EditProfile
