/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native'
import globalStyles from '../../../globalStyles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.purpleDark
    },
    artistName: {
        fontSize: 32,
        color: "#fff",
        fontWeight: "700"
    },
    innerTop: {
        flex: 3,
        // alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    changeImageIcon: {
        margin: 20
    },
    editImageIcon: {
        
    },
    bioContainer: {
        
    },
    linearGradient: {
        flex: 2,
        padding: 12,
        alignSelf: 'baseline',
        width: Dimensions.get("screen").width
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
        paddingHorizontal: 12
    },
    headerText: {
        color: globalStyles.textWhite,
        fontSize: 18
    }
});

export default styles;
