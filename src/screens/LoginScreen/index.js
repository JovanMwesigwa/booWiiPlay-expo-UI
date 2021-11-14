/* eslint-disable prettier/prettier */
import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup'
import { useSelector } from 'react-redux'

import { AppButton, AppText, AppTextInput, ErrorComponent, AppLoadingComponent } from '../../components';
import styles  from './styles';
import useAwsLoginUser from '../../hooks/apiHooks/useLoginAwsUser';

const loginValidationSchema = yup.object().shape({
    username: yup.string().required("You need to enter your username."),
    // email: yup.string().email('Please a valid email address').required('Email is required'),
    password: yup.string().min(4, ({min}) => `Password must be atleat ${min} characters`).required('Password is required')
})



const LoginScreen = ({navigation}) => {
    const error = useSelector(state => state.user.error)
    const token = useSelector(state => state.user.token)

    const { handleLoginAwsUser, loading } = useAwsLoginUser()

    const handleLogin = async(values) => {

        const data = {
            "username": values.username,
            "password": values.password
        }

        handleLoginAwsUser(data)
 
    }

    return (
        <>
        <AppLoadingComponent loading={loading} />
        <View style={styles.container}>
            
            <View style={styles.main}>
                <View style={styles.top}>
                    <AppText {...styles.header}>login your account</AppText>
                    <AppText {...styles.subText}>Get your music to radio</AppText>
                </View>

                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{ username: "", password: "" }}
                    onSubmit={(values) => handleLogin(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
                    <>
                        <View style={styles.midContainer}>
                            <AppTextInput 
                                name="username" 
                                value={values.username} 
                                icon="ios-call-outline" 
                                setUserRegisterInfo={handleChange('username')} 
                                errors={errors.username}
                                onBlur={handleBlur('username')}
                                touched={touched.username}
                            />
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
                        </View>
                        <TouchableOpacity style={styles.joinContainer} onPress={() => navigation.navigate("Register")}>
                            <AppText {...styles.joinText}>Want to join booWii Play?</AppText>
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

export default LoginScreen

