/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'
import globalStyles from '../../../globalStyles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: globalStyles.purpleDark
    },
    headerContainer: {
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 13,
        paddingVertical: 12,
        marginBottom: 15,
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
