/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'
import globalStyles from '../../../globalStyles/'

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: globalStyles.purpleDark,
    },
    headerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        paddingVertical: 10,
        marginBottom:15
    },
    headerText: {
        color: globalStyles.textWhite,
        fontSize: 16
    },
    title: {
        fontSize: 23,
        color: globalStyles.textWhite,
        fontWeight: "500"
    },
    caption: {
        color: "#777",
        fontSize: 14
    },
    captionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    midContainer: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 8,
        overflow: "hidden"
    },
    imageContainer: {
        flex: 1,
    },
    playBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        borderRadius:45/2,
        height: 45,
        backgroundColor: globalStyles.purpleLight,
        marginHorizontal: 25,
        elevation: 5
    },
    bottomHeader: {
        fontSize: 14,
        color: "#fff",
        fontWeight: '700',
        marginTop: 12
    },
    prevBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        width: 35,
        borderRadius:35/2,
        height: 35,
        backgroundColor: globalStyles.purpleLighter,
        elevation: 5
    },
    nextBtn: {
        width: 35,
        borderRadius:35/2,
        height: 35,
        backgroundColor: globalStyles.purpleLighter,
        elevation: 5
    },
    playBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyles: {
        width: "60%",
        height: 200,
        borderRadius: 8,
        resizeMode: 'contain'
    },
    playerContainer: {
        flex: 1,
        padding: 12,
    },
    progressBar: {
        width: "100%",
        height: 5,
        borderRadius: 5,
        backgroundColor: "#9A0FBD",
        marginTop: 24,
    },
    radioContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    statusText: {
        color: "green",
        fontSize: 12
    },
    radioImage: {
        height: 20,
        width: 20,
        borderRadius: 20/2,
        backgroundColor: "#fff"
    },
    costsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: globalStyles.purpleLighter,
        borderBottomColor: globalStyles.purpleLighter,
        marginVertical: 12
    },
    costsText: {
        color: globalStyles.textWhite
    },
    radioText: {
        color: "#fff",
        fontSize: 13,
        marginLeft: 8
    },
    botContainer: {
        flex: 1,
        padding: 12
    }
})

export default styles
