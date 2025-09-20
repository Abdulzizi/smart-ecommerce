import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import AppText from '../texts/AppText'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../../styles/colors'
import { AppButtonProps } from '../../types/type'

const AppButton: FC<AppButtonProps> = ({ onPress, title = 'Press Me', bgColor = AppColor.background, textColor = AppColor.text, style, styleTitle, disabled = false }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                bgColor ? { backgroundColor: bgColor } : {},
                style
            ]}
            disabled={disabled}
        >
            <AppText
                variant='bold'
                style={[
                    styles.buttonText,
                    textColor ? { color: textColor } : {},
                    styleTitle
                ]}
            >
                {title}
            </AppText>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: vs(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: s(25),
        alignSelf: 'center',
    },
    buttonText: {
        color: AppColor.text,
        fontSize: s(16),
    }
})