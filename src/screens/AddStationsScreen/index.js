/* eslint-disable prettier/prettier */
import React from 'react'
import { ScrollView, View } from 'react-native'
import { AppButton, AppText, AppTextInput, InfoComponent, ScreenHeader, StationCard } from '../../components'

import styles from './styles'

const AddStationsScreen = ({navigation}) => {
    

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ScreenHeader title="add stations, Djs" />

                <AppTextInput placeholder="Search for any station or Dj" icon="search" filter />

                <View>
                    <InfoComponent left="Station" />

                    <StationCard />
                    <StationCard />
                    <StationCard />
                    <StationCard />
                    <StationCard />
                    <StationCard />

                </View>

                <View style={styles.costsContainer}>
                    <AppText {...styles.costsText}>Costs</AppText>
                    <AppText {...styles.costsText}>UGX 450,000</AppText>
                </View>

                <View style={{ marginVertical: 18, alignItems: 'center' }}>
                    <AppButton title="Next" small onPress={() => navigation.navigate("Song Summary")} />
                </View>

            </ScrollView>
        </View>
    )
}

export default AddStationsScreen

