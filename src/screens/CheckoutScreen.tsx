import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AppSafeView from '../components/views/AppSafeView'
import AppButton from '../components/buttons/AppButton'
import { s, vs } from 'react-native-size-matters'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { AppColor } from '../styles/colors'
import { Ionicons } from '@expo/vector-icons'
import AppText from '../components/texts/AppText'
import { useSelector } from 'react-redux'
import { calculateOrderSummary, formatMoney } from '../helpers/helper'

const CheckoutScreen = () => {
    const navigation = useNavigation<any>();

    const cartItems = useSelector((state: any) => state.cartSlice.items);

    const { subtotal, tax, shipping, orderTotal } = calculateOrderSummary(cartItems);

    // const subtotal = cartItems.reduce(
    //   (sum: number, item: any) => sum + item.product.price * item.qty,
    //   0
    // );


    // const tax = subtotal * 0.1;
    // const shipping = cartItems.length > 0 ? 15 : 0;
    // const orderTotal = subtotal + tax + shipping;

    return (
        <AppSafeView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backBtn}
                >
                    <Ionicons name="arrow-back" size={24} color={AppColor.text} />
                </TouchableOpacity>
                <AppText style={styles.title}>Checkout</AppText>
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.card}>
                <View style={styles.rowBetween}>
                    <AppText style={styles.sectionTitle}>Shipping Address</AppText>
                    <TouchableOpacity onPress={() => console.log("Change address")}>
                        <AppText style={styles.link}>Change</AppText>
                    </TouchableOpacity>
                </View>
                <AppText style={styles.text}>123 Main Street</AppText>
                <AppText style={styles.text}>Jakarta, Indonesia</AppText>
            </View>

            <View style={styles.card}>
                <View style={styles.rowBetween}>
                    <AppText style={styles.sectionTitle}>Payment Method</AppText>
                    <TouchableOpacity onPress={() => console.log("Change payment")}>
                        <AppText style={styles.link}>Change</AppText>
                    </TouchableOpacity>
                </View>
                <AppText style={styles.text}>Visa **** 4242</AppText>
            </View>

            <View style={styles.card}>
                <AppText style={styles.sectionTitle}>Order Summary</AppText>
                <View style={styles.rowBetween}>
                    <AppText style={styles.text}>Items</AppText>
                    <AppText style={styles.text}>{formatMoney(subtotal, "USD")}</AppText>
                </View>
                <View style={styles.rowBetween}>
                    <AppText style={styles.text}>Tax</AppText>
                    <AppText style={styles.text}>{formatMoney(tax, "USD")}</AppText>
                </View>
                <View style={styles.rowBetween}>
                    <AppText style={styles.text}>Shipping</AppText>
                    <AppText style={styles.text}>{formatMoney(shipping, "USD")}</AppText>
                </View>
                <View style={styles.rowBetween}>
                    <AppText style={styles.totalLabel}>Total</AppText>
                    <AppText style={styles.total}>{formatMoney(orderTotal, "USD")}</AppText>
                </View>
            </View>

            <AppButton
                title="Place Order"
                onPress={() => {
                    console.log("Order placed!");
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: "CartScreen" }], // reset to CartScreen
                        })
                    );
                }}
                style={styles.placeOrderBtn}
            />
        </AppSafeView>
    )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: s(20),
        backgroundColor: AppColor.background,
    },
    header: {
        flexDirection: "row",
        // alignItems: "flex-start",
        gap: s(8),
        // justifyContent: "space-between",
        marginBottom: vs(20),
    },
    backBtn: {
        padding: s(4),
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: "center",
        color: AppColor.text,
    },
    card: {
        backgroundColor: AppColor.white,
        padding: s(16),
        borderRadius: s(12),
        marginBottom: vs(16),
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: s(8),
        color: AppColor.text,
    },
    text: {
        fontSize: 16,
        color: AppColor.text,
        marginBottom: 4,
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: s(8),
    },
    link: {
        fontSize: 14,
        color: AppColor.primary,
        fontWeight: '500',
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: "600",
        color: AppColor.black,
    },
    total: {
        fontSize: 20,
        fontWeight: "bold",
        color: AppColor.primary,
    },
    placeOrderBtn: {
        marginTop: vs(20),
        width: "100%",
        borderRadius: s(8),
    },
})
