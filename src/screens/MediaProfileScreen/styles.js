/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native'
import globalStyles from '../../../globalStyles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.purpleDark,
    },
    artistName: {
        fontSize: 32,
        color: "#fff",
        fontWeight: "700"
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 55,
        height: 55,
    },
    innerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 3,
    },
    bioContainer: {
        
    },
    locationText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "600",
        margin: 12
    },
    linearGradient: {
        flex: 2,
        padding: 12,
        alignSelf: 'baseline'
    },
    bioText: {
        color: "#fff"
    },
    imageHeader: {
        justifyContent: 'space-between',
        height: Dimensions.get("window").height /2,
        width: Dimensions.get("window").width,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    top: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
    },
    lowerContainer: {
        flex: 1, 
        paddingHorizontal: 12,
        marginVertical:12
    },
    headerText: {
        color: globalStyles.textWhite,
        fontSize: 15,
        marginVertical: 15
    },
    nameText: {
        color: "#fff",
        fontSize: 15,
        marginLeft: 8
    }
});

export default styles;
