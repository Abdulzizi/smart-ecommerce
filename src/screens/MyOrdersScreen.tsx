import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import AppSafeView from "../components/views/AppSafeView";
import AppText from "../components/texts/AppText";
import { s, vs } from "react-native-size-matters";
import { AppColor } from "../styles/colors";
import { Order } from "../types/type";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

const dummyOrders: Order[] = [
    {
        id: "ORD123",
        date: "2025-09-25",
        status: "Delivered",
        total: 235,
        items: [
            { id: "1", name: "Nike Shoes", qty: 1, price: 200 },
            { id: "2", name: "Socks", qty: 2, price: 15 },
        ],
    },
    {
        id: "ORD124",
        date: "2025-09-28",
        status: "Pending",
        total: 99,
        items: [{ id: "3", name: "T-Shirt", qty: 3, price: 33 }],
    },
    {
        id: "ORD125",
        date: "2025-09-29",
        status: "Shipped",
        total: 149,
        items: [
            { id: "4", name: "Backpack", qty: 1, price: 120 },
            { id: "5", name: "Cap", qty: 1, price: 29 },
        ],
    },
];

const MyOrdersScreen = () => {
        const navigation = useNavigation<any>();
    
    const renderOrder = ({ item }: { item: Order }) => (
        <View style={styles.card}>
            <View style={styles.rowBetween}>
                <AppText style={styles.orderId}>Order #{item.id}</AppText>
                <AppText style={[styles.status, styles[`status${item.status}`]]}>
                    {item.status}
                </AppText>
            </View>

            <AppText style={styles.date}>{item.date}</AppText>

            <View style={{ marginTop: vs(10) }}>
                {item.items.map((p) => (
                    <AppText key={p.id} style={styles.item}>
                        • {p.name} x{p.qty} — ${p.price * p.qty}
                    </AppText>
                ))}
            </View>

            <View style={styles.rowBetween}>
                <AppText style={styles.totalLabel}>Total</AppText>
                <AppText style={styles.total}>${item.total}</AppText>
            </View>
        </View>
    );

    return (
        <AppSafeView style={styles.container}>
            {/* <AppText style={styles.title}>My Orders</AppText> */}
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
            <FlatList
                data={dummyOrders}
                keyExtractor={(item) => item.id}
                renderItem={renderOrder}
                contentContainerStyle={{ paddingBottom: vs(20) }}
            />
        </AppSafeView>
    );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: s(20),
        backgroundColor: AppColor.background,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: vs(16),
        color: AppColor.text,
    },
    card: {
        backgroundColor: AppColor.white,
        padding: s(16),
        borderRadius: s(12),
        marginBottom: vs(14),
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    orderId: {
        fontSize: 16,
        fontWeight: "600",
        color: AppColor.text,
    },
    date: {
        fontSize: 14,
        color: "gray",
        marginTop: vs(4),
    },
    item: {
        fontSize: 14,
        color: AppColor.text,
        marginBottom: 2,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: vs(10),
        color: AppColor.text,
    },
    total: {
        fontSize: 16,
        fontWeight: "bold",
        color: AppColor.primary,
        marginTop: vs(10),
    },
    status: {
        fontSize: 14,
        fontWeight: "600",
        paddingHorizontal: s(8),
        paddingVertical: s(4),
        borderRadius: s(8),
        overflow: "hidden",
    },
    statusPending: {
        backgroundColor: "#FFF4E5",
        color: "#E69500",
    },
    statusShipped: {
        backgroundColor: "#E5F3FF",
        color: "#0077CC",
    },
    statusDelivered: {
        backgroundColor: "#E6F9E6",
        color: "#2E7D32",
    },
    statusCancelled: {
        backgroundColor: "#FFE5E5",
        color: "#D32F2F",
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
});
