/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native'
import globalStyles from '../../../globalStyles'


const styles = StyleSheet.create({
    btn: {
        backgroundColor: globalStyles.purpleLighter,
        color: globalStyles.textWhite,
        flexDirection: 'row',
        padding: 12,
        borderRadius: 4,
        marginVertical: 10
    },
    artContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 65,
        height: 65,
        backgroundColor: globalStyles.purpleLighter,
        borderRadius: 4,
        margin: 8
    },
    songUploadContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        width: Dimensions.get("window").width / 2,
        height: 45,
        backgroundColor: globalStyles.purpleLighter,
        borderRadius: 4,
        paddingHorizontal: 20,
        margin: 8
    },
    pictureContainer: {
        flexDirection: "row",
    },
    songContainer: {
        alignItems: 'center',
        flexDirection: "row",
    },
    caption: {
        color: globalStyles.textWhite,
        fontSize: 13,
        marginLeft: 12
    },
    container: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: globalStyles.purpleDark,
    },
    imageStyle: {
        width: 65,
        height: 65,
        backgroundColor: globalStyles.textGray,
        borderRadius: 4,
        overflow: "hidden",
        margin: 8
    },
    headerContainer: {
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
    subHeader: {
        color: globalStyles.textWhite,
        fontSize: 13
    },
    inputStyles: {
        backgroundColor: globalStyles.purpleLighter,
        color: globalStyles.textWhite,
        borderRadius: 4,

    }
})

export default styles;
