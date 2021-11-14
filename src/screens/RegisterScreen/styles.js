/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../../../globalStyles';

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        elevation: 5,
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 5,
        borderColor: globalStyles.purpleLight,
        backgroundColor: globalStyles.purpleDark,
        padding: 10,
        width: "60%",
    },
    pressedBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        padding: 10,
        backgroundColor: globalStyles.purpleLighter,
        color: globalStyles.textWhite,
        width: "100%",
        marginVertical: 15,
    },
    container: {
        flex: 1,
        backgroundColor: globalStyles.purpleDark,
        padding: 12,
    },
    top: {
        
    },
    header: {
        fontSize: 30,
        color: globalStyles.textWhite,
        fontWeight: 'bold',
    },
    midContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        paddingHorizontal: 8,
    },
    subText: {
        fontSize: 14,
        color: globalStyles.textWhite,
        fontWeight: '600',
    },
    joinContainer: {
        paddingVertical: 8,
        alignSelf: "flex-end",
        marginVertical: 10
    },
    joinText: {
        fontSize: 12,
        color: globalStyles.textWhite,
    }
})

export default styles;