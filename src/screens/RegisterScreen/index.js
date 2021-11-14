/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Auth } from 'aws-amplify';


import useRegisterUser from '../../hooks/apiHooks/useRegisterUser'
import globalStyles from '../../../globalStyles'
import { AppButton, AppText, AppTextInput, ErrorComponent, AppLoadingComponent } from '../../components'
import styles from './styles'
import useChangeSettings from '../../hooks/appHooks/useChangeSettings'
import useAwsSignUpUser from '../../hooks/apiHooks/useAwsSignUpUser'


const registerValidationSchema = yup.object().shape({
    username: yup.string().required("You need to enter a username."),
    email: yup.string().email('Please a valid email address').required('Email is required'),
    password: yup.string().min(4, ({min}) => `Password must be atleat ${min} characters`).required('Password is required')
})



const RegisterScreen = ({navigation}) => {

    const error = useSelector(state => state.awsUserToken.error)

    const { loading, handleSignUpAwsUser } = useAwsSignUpUser()

    const handleRegistration = async(values) => {
        const data = {
            "username": values.username,
            "email": values.email,
            "password": values.password
        }

        handleSignUpAwsUser(data)

    }

    return (
        <>
        <AppLoadingComponent loading={loading} />
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <AppText {...styles.header}>create your account</AppText>
                <AppText {...styles.subText}>Get your music to radio</AppText>
            </View>
            <Formik
                validationSchema={registerValidationSchema}
                initialValues={{ username: "", email: "", password: "" }}
                onSubmit={(values) => handleRegistration(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
              <>
                <View style={styles.midContainer}>
                    <AppTextInput 
                        name="username" 
                        value={values.username} 
                        icon="person" 
                        setUserRegisterInfo={handleChange('username')} 
                        errors={errors.username}
                        onBlur={handleBlur('username')}
                        touched={touched.username}
                    />
                    <AppTextInput 
                        name="email" 
                        value={values.email} 
                        icon="ios-call-outline" 
                        setUserRegisterInfo={handleChange('email')} 
                        errors={errors.email}
                        onBlur={handleBlur('email')}
                        touched={touched.email}
                    />
                    {/* <AppTextInput name="phone" icon="ios-call-outline" /> */}
                    {/* <TouchableOpacity style={styles.pressedBtn} onPress={() => console.log("tret")}>
                        <FontAwesome name="caret-down" style={styles.iconStyles} color={globalStyles.textWhite} size={28} />
                        <AppText fontSize={14} color={globalStyles.textWhite} marginLeft={15}>pick your style/genre</AppText>
                    </TouchableOpacity> */}
                    <AppTextInput 
                        name="password" 
                        // secureTextEntry 
                        value={values.password} 
                        icon="shield-sharp" 
                        setUserRegisterInfo={handleChange('password')} 
                        onBlur={handleBlur('password')}
                        errors={errors.password}
                        touched={touched.password}
                    />
                    {/* <AppTextInput name="confirm password" icon="shield-sharp" /> */}

                    <TouchableOpacity style={styles.joinContainer} onPress={() => navigation.navigate("Login")}>
                        <AppText {...styles.joinText}>Want to login your account?</AppText>
                    </TouchableOpacity>

                </View>
                <View style={{ marginVertical: 18, alignItems: 'center' }}>
                    <AppButton title="Go" onPress={handleSubmit} />
                </View>
            </>
            )}
          </Formik>
            <ErrorComponent error={error} />
        </ScrollView>
        </>
    )
}

export default RegisterScreen
