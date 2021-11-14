/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, ScrollView, ImageBackground, TouchableOpacity, View, Dimensions  } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import TrackPlayer, { State , useProgress, Capability, Event, useTrackPlayerEvents, RepeatMode } from 'react-native-track-player';
// import globalStyles from '../../../globalStyles'
import {AppText, AppButton} from'../../components/'
// import { useRoute } from '@react-navigation/core'
// import Slider from '@react-native-community/slider';

// import PlayerTabs from '../../navigation/PlayerTabs'

// import styles from './styles'

// import tracks from '../../../data/tracks';


// const setupPlayer = async() => await TrackPlayer.setupPlayer();

// const updatePlayer = async() => TrackPlayer.updateOptions({
//     // Media controls capabilities
//     capabilities: [
//         Capability.Play,
//         Capability.Pause,
//         Capability.SkipToNext,
//         Capability.SkipToPrevious,
//         Capability.Stop,
//     ],

//     // Capabilities that will show up when the notification is in the compact form on Android
//     compactCapabilities: [Capability.Play, Capability.Pause],
// });




const SongPlayerScreen = ({navigation}) => {

    // const [ isPlaying, setIsPlaying] = React.useState(false);
    // const [trackTitle, setTrackTitle] = React.useState(""); 
    // const [trackArtist, setTrackArtist] = React.useState(""); 
    // const [trackArt, setTrackArt] = React.useState(""); 
    // const [ repeatTracks, setRepeatTracks ] = React.useState(false);
    // const [ repeatPlayingTrack, setPlayingRepeatTrack ] = React.useState(false);

    // React.useEffect(() => {
    //     setupPlayer()
    //     updatePlayer()
    //     addMusic()
    //     // updatePlayer()
    // },[]);

    // const route = useRoute();

    // const progress = useProgress();

    // const { song } = route.params;

    // const addMusic = async() => await TrackPlayer.add(tracks);
    
    // const togglePlayer = async() => {

    //     const playerState = await TrackPlayer.getState();

    //     if(playerState === State.Playing){
    //         setIsPlaying(false)
    //         await TrackPlayer.pause()
    //     }else {
    //         setIsPlaying(true)
    //         await TrackPlayer.play()
    //     }
    // }

    // useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    //     if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
    //         const track = await TrackPlayer.getTrack(event.nextTrack);
    //         const {title, artist, artwork} = track || {};
    //         setTrackTitle(title);
    //         setTrackArtist(artist);
    //         setTrackArt(artwork);
    //     }
    // });

    // const skipToNext = async() => await TrackPlayer.skipToNext();

    // const skipToPrev = async() => await TrackPlayer.skipToPrevious();

    // const repeatCurrentTrack = () => {
    //     RepeatMode.Track
    //     setPlayingRepeatTrack(true);
        
    // }

    // const repeatAllTracks = () => {
    //     RepeatMode.Queue
    //     setRepeatTracks(true)
    // }

    // const removeRepeatMode = async() => {
    //     setPlayingRepeatTrack(false)
    //     setRepeatTracks(false)

    //     await RepeatMode.Off
    // }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={22} color="#fff" />
                    </TouchableOpacity>
                    <AppText {...styles.headerText}>BooWiiPlay</AppText>
                    <View />
                </View>

                {/* <ImageBackground blurRadius={20} source={trackArt} style={styles.midContainer}>
                    <Image source={trackArt} style={styles.imageStyles} />
                </ImageBackground>
                
                    <View style={styles.playerContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <AppText {...styles.title}>{trackTitle}</AppText>
                                <AppText {...styles.caption}>{trackArtist}</AppText>
                            </View>
                            <AppText {...styles.caption}>Info</AppText>
                        </View>
                        <View>
                            <Slider
                                style={{width: "100%", height: 55, paddingVertical: 8}}
                                minimumValue={0}
                                maximumValue={progress.duration}
                                thumbTintColor="#9A0FBD"
                                value={progress.position}
                                minimumTrackTintColor="#9A0FBD"
                                maximumTrackTintColor="#fff"
                                onSlidingComplete={async(value) => {
                                    await TrackPlayer.seekTo(value)
                                }}
                            />
                            <View style={styles.captionContainer}>
                                <AppText {...styles.caption}>{new Date(progress.position * 1000).toISOString().substr(14, 5)}</AppText>
                                <AppText {...styles.caption}>{new Date((progress.duration - progress.position) * 1000).toISOString().substr(14, 5)}</AppText>
                            </View>
                            <View style={styles.playBtnContainer}>
                                <TouchableOpacity style={styles.repeat} onPress={repeatCurrentTrack}>
                                    <MaterialCommunityIcons name="repeat-once" size={20} color={repeatPlayingTrack ? "#CC6E02" : globalStyles.purpleLighter} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.prevBtn} onPress={skipToPrev}>
                                    <AntDesign name="banckward" size={18} color={globalStyles.purpleDark} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.playBtn} onPress={togglePlayer}>
                                    <AntDesign name={!isPlaying ? "play" : "pause"} size={!isPlaying ? 45 : 30} color={globalStyles.textWhite} />
                                </TouchableOpacity>
                                <View style={styles.nextBtn}>
                                <TouchableOpacity style={styles.prevBtn} onPress={skipToNext}>
                                    <AntDesign name="forward" size={18} color={globalStyles.purpleDark} />
                                </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.repeat} onPress={repeatAllTracks}>
                                    <MaterialCommunityIcons name="repeat" size={20} color={repeatTracks ? "#CC6E02" : globalStyles.purpleLighter} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: Dimensions.get("window").height/2 }}>
                        <PlayerTabs />
                    </View> */}
            </ScrollView>
        </View>
    )
}

export default SongPlayerScreen

