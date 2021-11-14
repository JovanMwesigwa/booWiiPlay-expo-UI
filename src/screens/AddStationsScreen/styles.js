/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'
import globalStyles from '../../../globalStyles'


const styles = StyleSheet.create({

    container : {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: globalStyles.purpleDark,
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
    }

});

export default styles
