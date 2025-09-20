import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import AppText from '../texts/AppText'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../../styles/colors'
import { AppButtonProps } from '../../types/type'

const AppButton: FC<AppButtonProps> = ({
    onPress,
    title = 'Press Me',
    bgColor = AppColor.primary,
    textColor = AppColor.white,
    style,
    styleTitle,
    disabled = false,
    variant = 'filled',
}) => {
    const isOutline = variant === 'outline'

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[
                styles.button,
                isOutline
                    ? {
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderColor: bgColor,
                        shadowOpacity: 0,
                        elevation: 0,
                    }
                    : {
                        backgroundColor: disabled ? AppColor.lightGray : bgColor,
                    },
                style,
            ]}
            disabled={disabled}
        >
            <AppText
                variant="bold"
                style={[
                    styles.buttonText,
                    { color: isOutline ? bgColor : textColor },
                    styleTitle,
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
        height: vs(48),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: s(25),
        alignSelf: 'center',
        paddingHorizontal: s(16),

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3.5,

        elevation: 3,
    },
    buttonText: {
        fontSize: s(16),
        textAlign: 'center',
    },
})
