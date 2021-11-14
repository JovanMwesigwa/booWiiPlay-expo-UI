/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 45,
    },
    midContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    desc: {
        color: globalStyles.textWhite,
        fontWeight: 'bold',
        fontSize: 13,
    },
    linearGradient: {
        flex: 1,
    },
    text: {
        fontSize: 43,
        color: globalStyles.textWhite,
        fontWeight: 'bold',
    },
    logoStyles: {
        width: 200,
        height: 200,
    }
})

export default styles;