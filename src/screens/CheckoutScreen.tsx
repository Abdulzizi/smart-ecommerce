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
import { useDispatch } from "react-redux";
import { emptyCart } from '../store/reducer/CartSlice'

const CheckoutScreen = () => {
    const navigation = useNavigation<any>();

    const cartItems = useSelector((state: any) => state.cartSlice.items);

    const { itemsPrice, discount, tax, shipping, orderTotal } = calculateOrderSummary(cartItems);

    const dispatch = useDispatch();

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
                    <AppText style={styles.text}>{formatMoney(itemsPrice, "USD")}</AppText>
                </View>

                {discount > 0 && (
                    <View style={styles.row}>
                        <AppText style={styles.label}>Discount</AppText>
                        <AppText style={[styles.value, { color: "red" }]}>
                            -{formatMoney(discount, "USD")}
                        </AppText>
                    </View>
                )}

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
                    dispatch(emptyCart());

                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: "CartScreen" }],
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
        marginTop: vs(15),
        width: "100%",
        padding: s(16),
        borderRadius: s(8),
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: vs(8),
    },
    label: {
        fontSize: s(14),
        color: AppColor.black,
    },
    value: {
        fontSize: s(14),
        fontWeight: "600",
        color: AppColor.black,
    },
})
