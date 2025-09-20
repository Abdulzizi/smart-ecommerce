import { StyleSheet, Text } from 'react-native'
import { s } from 'react-native-size-matters'
import { AppTextProps } from '../../types/type'
import { FC } from 'react'
import { AppColor } from '../../styles/colors'

const AppText: FC<AppTextProps> = ({ children, style, variant = "medium", ...props }) => {
    return (
        <Text style={[styles[variant], style]} {...props}>
            {children}
        </Text>
    )
}

export default AppText

const styles = StyleSheet.create({
    small: {
        fontFamily: 'Poppins_300Light',
        fontSize: s(14),
        color: AppColor.text
    },
    medium: {
        fontFamily: 'Poppins_500Medium',
        fontSize: s(16),
        color: AppColor.text
    },
    bold: {
        fontFamily: 'Poppins_700Bold',
        fontSize: s(18),
        color: AppColor.text
    }
})