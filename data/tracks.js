/* eslint-disable prettier/prettier */
const paris = require('../assets/paris.jpg')
const cry = require('../assets/cry.jpg')
const yellow = require('../assets/yellow.jpg')
const neon = require('../assets/neon1.jpg')
const me = require('../assets/me.jpg')
const user = require('../assets/user.jpg')



const tracks = [
    {
        id: 1,
        url: require('../assets/songs/Dillon_Francis_-_Say_Less_feat._G-Eazy_(Eptic_Remix)(128kbps).mp3'),
        title: 'Say Less Remix',
        artist: 'Eptic',
        artwork: user
    },
    {
        id: 2,
        url: require('../assets/songs/Jonas_Blue_-_What_I_Like_About_You_ft._Theresa_Rex(256k).mp3'),
        title: 'What I Like About You',
        artist: 'Jonas Blue X Theresa Rex',
        artwork: cry
    },
    {
        id: 3,
        url: require("../assets/songs/Sigala_-_Sweet_Lovin'_ft._Bryn_Christopher_(Official_Video)(256k).mp3"),
        title: 'Sweet Lovin',
        artist: 'Sigala',
        artwork: yellow
    },
    {
        id: 4,
        url: require('../assets/songs/gryffin_illenium_feel_good_ft._daya_lyrics_aac_53899.m4a'),
        title: 'Feel Good',
        artist: 'Gryffin X Illenium ft Daya',
        artwork: paris
    },
    {
        id: 5,
        url: require('../assets/songs/pegboard_nerds_nightmre_superstar_feat._krewella_aac_31960.m4a'),
        title: 'Superstar',
        artist: 'PegboardNerds X Nghtmre ft Krewella',
        artwork: me
    },
    {
        id: 6,
        url: require('../assets/songs/Sigala,_Ella_Eyre_-_Came_Here_for_Love_(Official_Music_Video)(256k).mp3'),
        title: 'Came Here for Love',
        artist: 'Sigala X Ella Eyre',
        artwork: user
    },
    {
        id: 7,
        url: require('../assets/songs/The_Chainsmokers_-_Who_Do_You_Love_ft._5_Seconds_of_Summer_(Official_Lyric_Video)(256k).mp3'),
        title: 'Who Do You Love',
        artist: 'The Chainsmokers X 5 Seconds of Summer',
        artwork: neon
    },
    {
        id: 8,
        url: require('../assets/songs/DJ_Snake_x_Eptic_-_SouthSide(256k).mp3'),
        title: 'SouthSide',
        artist: 'DJ Snake X Eptic',
        artwork: cry
    },
]

export default tracks;