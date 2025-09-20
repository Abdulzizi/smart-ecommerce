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
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    return (
        <AppSafeView style={styles.container}>
            <Image
                source={IMAGE_PATH.appLogo}
                style={styles.logo}
            />

            <AppText variant="bold" style={styles.title}>
                Welcome Back 👋
            </AppText>
            <AppText variant="small" style={styles.subtitle}>
                Sign in to continue your shopping journey
            </AppText>

            <View style={{ width: '100%' }}>
                <AppTextInput 
                    placeholder='Enter Your Email' 
                    keyboardType='email-address' 
                    style={styles.input}
                />
                <AppTextInput 
                    placeholder='Enter Your Password' 
                    secureTextEntry 
                    style={styles.input}
                />
            </View>

            <AppText variant='medium' style={styles.tagline}>
                Smart E-Commerce
            </AppText>

            <View style={styles.buttonContainer}>
                <AppButton 
                    bgColor={AppColor.black} 
                    textColor={AppColor.white} 
                    style={styles.buttonLogin} 
                    title='Login' 
                    onPress={() => { navigation.navigate('MainAppBottomTabs' as never) }} 
                />
                <AppButton 
                    variant='outline' 
                    bgColor={AppColor.black} 
                    textColor={AppColor.white} 
                    style={styles.buttonRegister} 
                    title='Sign Up' 
                    onPress={() => { navigation.navigate('SignUpScreen' as never) }} 
                />
            </View>

            <AppText variant="small" style={styles.footer}>
                By logging in you agree to our Terms & Privacy Policy
            </AppText>
        </AppSafeView>
    )
}

export default SignInScreen

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
    tagline: {
        marginTop: s(12),
        textAlign: 'center',
        width: '100%',
    },
    buttonRegister: {
        borderRadius: s(10),
        height: s(42),
    },
    buttonLogin: {
        borderRadius: s(10),
        height: s(42),
    },
    buttonContainer: {
        width: '100%',
        marginTop: s(20),
        gap: s(12),
    },
    footer: {
        marginTop: s(30),
        color: AppColor.disabledGray,
        textAlign: "center",
        fontSize: s(11),
    }
})
