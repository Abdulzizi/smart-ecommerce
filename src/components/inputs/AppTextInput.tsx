import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppTextInputProps } from '../../types/type'

const AppTextInput: FC<AppTextInputProps> = ({ value, onChangeText, placeholder, secureTextEntry, keyboardType, style }) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={[
                styles.input, style
            ]}
        />
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: s(8),              
        paddingVertical: vs(12),          
        paddingHorizontal: s(14),         
        marginVertical: vs(10),           
        fontSize: s(16),                  
        backgroundColor: "#FFFFFF",
        color: "#333333",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: vs(1) },
        shadowRadius: s(2),
        elevation: 1,
    },
});
