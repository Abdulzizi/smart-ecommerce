import { StyleSheet, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import AppButton from '../buttons/AppButton'
import AppText from '../texts/AppText'
import { AppColor } from '../../styles/colors'

const EmptyCarts = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Ionicons
                    name="cart-outline"
                    size={s(128)}
                    color={AppColor.disabledGray}
                    style={styles.icon}
                />

                <AppText style={styles.textHeader}>
                    Your Cart Is Empty
                </AppText>
                <AppText style={styles.textContent}>
                    Browse our categories and discover our best deals, discounts and promotions!
                </AppText>
            </View>

            <AppButton
                title="Shop Now"
                onPress={() => navigation.navigate('Home')}
                style={styles.button}
            />
        </View>
    );
};

export default EmptyCarts;

const styles = StyleSheet.create({
    container: {
        flex: 1, // 👈 fill the screen
        justifyContent: 'center', // 👈 center vertically
        alignItems: 'center', // 👈 center horizontally
        paddingHorizontal: s(20),
    },
    textContainer: {
        marginBottom: vs(16),
        alignItems: 'center',
    },
    textHeader: {
        fontSize: s(32),
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textContent: {
        fontSize: s(15),
        textAlign: 'center',
        marginTop: vs(8),
        color: AppColor.disabledGray,
    },
    button: {
        borderRadius: s(8),
        paddingVertical: vs(14),
        width: '100%',
    },
    icon: {
        marginBottom: vs(8),
    },
});