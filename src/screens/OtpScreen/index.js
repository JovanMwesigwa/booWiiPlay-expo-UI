/* eslint-disable prettier/prettier */
import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup'
import { useRoute, useNavigation } from '@react-navigation/native'

import useLoginUser from '../../hooks/apiHooks/useLoginUser'
import { AppButton, AppText, AppTextInput, ErrorComponent, AppLoadingComponent } from '../../components';
import styles  from './styles';
import { Auth } from 'aws-amplify';
import useAwsLoginUser from '../../hooks/apiHooks/useLoginAwsUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchAwsUserTokenSuccess } from '../../features/users/awsUserTokenSlice';
import { useDispatch } from 'react-redux';

const otpValidationSchema = yup.object().shape({
    otp: yup.string().required("You need to enter the otp code sent to your email."),
})


export const storeToken = async(userToken) => {
    try{
      await AsyncStorage.setItem('AwsUserToken', userToken)
    }catch(err){
      console.log(err.message)
    }
  }


const OtpScreen = () => {
    const [ loading, setLoading ] = React.useState(false)
    const [ error, setError ] = React.useState("");

    const route = useRoute()
    const navigation = useNavigation();

    const { username } = route.params;

    const handleSubmitOtp = async(values) => {
        setLoading(true)

        const data = {
            "otpCode": values.otp,
        }

        try {
            const res = await Auth.confirmSignUp(username, values.otp);
            
            console.log("OTP return", res)

            // Take them to the login screen to login again
            navigation.navigate("Login")

            setLoading(false)

            
          } catch (error) {
              console.log('error confirming sign up', error);
              setError(error.message)
          }

    }


    return (
        <>
        <AppLoadingComponent loading={loading} />
        <View style={styles.container}>
            
            <View style={styles.main}>
                <View style={styles.top}>
                    <AppText {...styles.header}>Code confirmation</AppText>
                    <AppText {...styles.subText}>Enter the code sent to your email.</AppText>
                </View>

                <Formik
                    validationSchema={otpValidationSchema}
                    initialValues={{ otp: "" }}
                    onSubmit={(values) => handleSubmitOtp(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
                    <>
                        <View style={styles.midContainer}>
                            <AppTextInput 
                                name="otp" 
                                value={values.otp} 
                                icon="ios-call-outline" 
                                setUserRegisterInfo={handleChange('otp')} 
                                errors={errors.otp}
                                onBlur={handleBlur('otp')}
                                touched={touched.otp}
                            />
                        </View>

                        <TouchableOpacity style={styles.joinContainer} onPress={() => navigation.navigate("Register")}>
                            <AppText {...styles.joinText}>Send another code?</AppText>
                        </TouchableOpacity>

                        <View style={{ marginVertical: 18, alignItems: 'center' }}>
                            
                            <AppButton title="Go" onPress={handleSubmit} />
                        </View>
                    </>
                    )}
                </Formik>
                        <ErrorComponent error={error} />
            </View>
        </View>
        </>
    )
}

export default OtpScreen

