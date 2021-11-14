/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
// import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import globalStyles from '../../globalStyles';
import AppText from './AppText';

const AppTextInput = ({name, icon, multiline, placeholder, errors, secureTextEntry, touched, rounded, filter, value, setUserRegisterInfo }) => {
  const [text, setText] = React.useState('');

//   console.log(name, text);
  

  return (
      <View style={styles.input}>
          <View style={styles.topTextContainer}>
            { !placeholder && <AppText color={globalStyles.textWhite} fontSize={13} marginBottom={5}>{name}</AppText>}
            { errors && touched && <AppText color="red" fontSize={12} >{errors}</AppText>}
          </View>
          <TextInput
            placeholder={placeholder && placeholder}
            placeholderTextColor={placeholder && "#ddd"}
            multiline={multiline ? true : false}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={setUserRegisterInfo}
            style={[styles.textInput, { borderWidth: 1, borderColor: errors && touched && "red", height: multiline ? 100 : 50, borderRadius: rounded ? 45 : 4, }]}
          />
          <Ionicons name={icon} style={styles.iconStyles} color={globalStyles.textWhite} size={20} />
         {filter && <Octicons name="settings" style={styles.filterStyles} color={globalStyles.textWhite} size={20} />}
      </View>
  );
};

const styles = StyleSheet.create({
    iconStyles: {
        position: 'absolute',
        bottom: 12,
        left: 8,
    },
    topTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    filterStyles: {
        position: 'absolute',
        bottom: 12,
        right: 8,
    },
    input: {
        width: "100%",
        marginVertical: 13,
    },
    textInput: {
        alignItems: 'center',
        // padding: 10,
        paddingLeft: 35,
        backgroundColor: globalStyles.purpleLighter,
        color: globalStyles.textWhite,
    }
})

export default AppTextInput;
