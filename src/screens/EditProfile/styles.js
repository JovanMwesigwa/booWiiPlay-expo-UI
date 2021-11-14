/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import globalStyles from '../../../globalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.purpleDark,
    paddingHorizontal: 15,
  },
  main: {
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 30,
    color: globalStyles.textWhite,
    fontWeight: 'bold',
},
bottomContainer: {

},
picker: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: globalStyles.purpleLighter,
    marginBottom: 15
},
top: {
  paddingVertical: 12,      
},
midContainer: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 8,
},
subText: {
    fontSize: 14,
    color: globalStyles.textWhite,
    fontWeight: '600',
}
});

export default styles;
