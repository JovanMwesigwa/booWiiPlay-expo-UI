/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'
import globalStyles from '../../../globalStyles'

const styles = StyleSheet.create({
    body: {
        flex: 2,
        paddingVertical: 12,
        paddingHorizontal: 5,
    },
    card: {
        width: 120,
        height: "100%",
        marginRight: 15
    },
    imageStyles: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    cardContainer: {
        flexDirection: 'row',
        height: 150,
        width: "100%",
        marginVertical: 15,
        paddingHorizontal: 5
    },
    songArt: {
        flex: 1,
        backgroundColor: '#777',
        borderRadius: 5,
        overflow: "hidden"
    },
    artist: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "700",
        marginTop: 3
    },
    song: {
        color: "#777",
        fontSize: 12,
    },
    container: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: globalStyles.purpleDark,
    },
    infoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: globalStyles.purpleLighter,
        paddingBottom: 15,
        marginVertical: 12,
        paddingHorizontal: 5
    },
    leftText: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "700"
    },
    rightText: {
        color: "#777",
        fontSize: 13,
    },
    headerContainer: {
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 13,
        paddingVertical: 12,
        width: "100%",
    },
    headerText: {
        color: globalStyles.textWhite,
        fontSize: 26,
        fontWeight: '700'
    },
    forYou: {
        color: "#fff",
    },
});

export default styles;
