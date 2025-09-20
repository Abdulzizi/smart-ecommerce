import { Image, StyleSheet, View } from 'react-native'
import AppSafeView from '../components/views/AppSafeView'
import { sharedPaddingHorizontal } from '../styles/sharedStyles'
import { IMAGE_PATH } from '../constants/imag-path'
import { s } from 'react-native-size-matters'
import { useState } from 'react'
import AppTextInput from '../components/inputs/AppTextInput'
import AppText from '../components/texts/AppText'
import AppButton from '../components/buttons/AppButton'
import { AppColor } from '../styles/colors'

const SignUpScreen = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <AppSafeView style={styles.container}>
            <Image
                source={IMAGE_PATH.appLogo}
                style={styles.logo}
            />

            <AppText variant="bold" style={styles.title}>
                Create Account ✨
            </AppText>
            <AppText variant="small" style={styles.subtitle}>
                Sign up to start your shopping journey
            </AppText>

            <View style={{ width: '100%' }}>
                <AppTextInput 
                    placeholder='Enter Your User Name' 
                    value={fullName} 
                    onChangeText={setFullName} 
                    style={styles.input} 
                />
                <AppTextInput 
                    placeholder='Enter Your Email' 
                    value={email} 
                    onChangeText={setEmail} 
                    keyboardType='email-address' 
                    style={styles.input} 
                />
                <AppTextInput 
                    placeholder='Enter Your Password' 
                    value={password} 
                    onChangeText={setPassword} 
                    secureTextEntry 
                    style={styles.input} 
                />
                <AppTextInput 
                    placeholder='Confirm Your Password' 
                    value={confirmPassword} 
                    onChangeText={setConfirmPassword} 
                    secureTextEntry 
                    style={styles.input} 
                />
            </View>

            <View style={styles.buttonContainer}>
                <AppButton 
                    bgColor={AppColor.black} 
                    textColor={AppColor.white} 
                    style={styles.buttonSignUp} 
                    title='Sign Up' 
                    onPress={() => { }} 
                />
            </View>

            <AppText variant='small' style={styles.loginRedirect}>
                Already have an account?{' '}
                <AppText variant='small' style={{ color: AppColor.primary }}>
                    Login
                </AppText>
            </AppText>

            <AppText variant="small" style={styles.footer}>
                By signing up you agree to our Terms & Privacy Policy
            </AppText>
        </AppSafeView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: sharedPaddingHorizontal,
    },
    logo: {
        width: s(180),
        height: s(180),
        marginBottom: s(10),
    },
    title: {
        marginTop: s(8),
        fontSize: s(20),
        textAlign: "center",
    },
    subtitle: {
        color: AppColor.disabledGray,
        textAlign: "center",
        marginBottom: s(20),
    },
    input: {
        height: s(42),
        fontSize: s(13),
        paddingHorizontal: s(12),
        marginBottom: s(12),
        borderRadius: s(8),
    },
    buttonSignUp: {
        borderRadius: s(10),
        height: s(42),
    },
    buttonContainer: {
        width: '100%',
        marginTop: s(20),
    },
    loginRedirect: {
        marginTop: s(15),
        textAlign: "center",
    },
    footer: {
        marginTop: s(25),
        color: AppColor.disabledGray,
        textAlign: "center",
        fontSize: s(11),
    }
})
