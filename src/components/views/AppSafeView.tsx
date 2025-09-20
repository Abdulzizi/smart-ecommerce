import { StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { FC } from 'react'

import { AppColor } from '../../styles/colors'
import { SafeViewProps } from '../../types/type'

const AppSafeView: FC<SafeViewProps> = ({ children, style }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.container, style]}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default AppSafeView

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: AppColor.background,
        // paddingTop: IS_ANDROID ? StatusBar.currentHeight : 0,
    },
    container: {
        flex: 1,
    }
})