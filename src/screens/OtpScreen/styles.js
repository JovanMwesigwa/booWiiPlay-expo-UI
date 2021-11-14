/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'
import globalStyles from '../../../globalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.purpleDark,
        paddingHorizontal: 15,
      },
    main: {
        flex: 1,
    },
    header: {
        fontSize: 30,
        color: globalStyles.textWhite,
        fontWeight: 'bold',
    },
    top: {
        paddingVertical: 12,      
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