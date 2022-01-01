/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, Image, View, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import globalStyles from '../../globalStyles'
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import AppText from './AppText'

import media from '../../data/media'



const MediaCard = () => {
    const navigation = useNavigation();

    const [ mediaData, setMediaData ] = React.useState(null);
    const [ loading, setLoading ] = React.useState(false);
    const [ error, setErrors ] = React.useState("");

    React.useEffect(() => {
        fetchMedia();
    }, [])

    const fetchMedia = async () => {
        setLoading(true);
        try {
            const allMedia = await API.graphql({ query: queries.listRadios });

            setMediaData(allMedia.data.listRadios.items);
            setLoading(false);

            // console.log("TEST HERE",allMedia);

        }catch(err) {
            console.log(err)
            setErrors(err.message);
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <AppText {...styles.storiesHeader}>Top Media</AppText>
            <View style={styles.storiesContainer}>
                {
                    loading ? null : 
                        <FlatList
                                data={mediaData}
                                renderItem={({ item }) => (
                                    <TouchableWithoutFeedback key={item.id} onPress={() => navigation.navigate("Profile Details")}>
                                            <View  style={styles.avatorContainer}>
                                                <View style={styles.avator}>
                                                    <Image source={{uri: item?.picture}} resizeMode="cover" style={styles.imageStyles} />
                                                </View>
                                                <AppText {...styles.avatorName}>{item.name}</AppText>
                                            </View>
                                        </TouchableWithoutFeedback>
                                )
                                }
                                keyExtractor={item => item.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                        />
                    
                }
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    avator: {
        // backgroundColor: globalStyles.textGray,
        alignItems: 'center',
        justifyContent: 'center',
        height: 65,
        width: 65,
        borderRadius: 65/2,
        overflow: "hidden"
    },
    avatorName: {
        fontSize: 12,
        color: "#fff",
        fontWeight: '700',
        textAlign: 'center',
    },
    imageStyles: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    avatorContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'gold',
        marginHorizontal: 7,
        height: 98,
        width: 80,
    },
    storiesContainer: {
        alignItems: 'center',
        flexDirection: "row",
        flex: 1,
    },
    container: {
        backgroundColor: "#21133A",
        borderRadius: 5,
        marginVertical: 18,
        paddingVertical: 5,
        // opacity: 0.7,
        justifyContent: 'space-between',
        height: 140,
        width: "98%"
    },
    storiesHeader: {
        color: "white",
        marginBottom: 10,
        marginLeft: 12,
    },
})

export default MediaCard
