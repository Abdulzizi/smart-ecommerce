import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AppSafeView from "../components/views/AppSafeView";
import AppText from "../components/texts/AppText";
import { RouteProp, useNavigation } from "@react-navigation/native";
import AppButton from "../components/buttons/AppButton";
import { PaymentMethod, RootStackParamList } from "../types/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { s, vs } from "react-native-size-matters";
import { AppColor } from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type NavigationProp = NativeStackNavigationProp<
    RootStackParamList
    // "PaymentMethodFormScreen"
>;

const PaymentMethodsScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const paymentMethods = useSelector(
        (state: RootState) => state.paymentMethodSlice.methods
    );

    console.log("Payment Methods from state:", paymentMethods);

    const renderPaymentMethod = ({ item }: { item: PaymentMethod }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() =>
            {}
            }
        >
            <View style={styles.cardHeader}>
                <Text style={styles.name}>{item.name}</Text>
                {item.isDefault && <Text style={styles.defaultBadge}>Default</Text>}
            </View>
            <Text style={styles.detail}>👤 {item.ownerName}</Text>
            <Text style={styles.detail}>💳 {item.accountNumber}</Text>
            <Text style={styles.detail}>🏦 {item.type}</Text>
        </TouchableOpacity>
    );

    return (
        <AppSafeView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backBtn}
                    >
                        <Ionicons name="arrow-back" size={24} color={AppColor.text} />
                    </TouchableOpacity>
                    <AppText style={styles.title}>Payment Methods</AppText>
                    <View style={{ width: 24 }} />
                </View>

                {/* List */}
                {paymentMethods.length > 0 ? (
                    <FlatList
                        data={paymentMethods}
                        keyExtractor={(item) => item.id}
                        renderItem={renderPaymentMethod}
                        contentContainerStyle={styles.list}
                    />
                ) : (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No payment methods added yet</Text>
                    </View>
                )}

                <AppButton
                    style={styles.addButton}
                    title="Add New Payment Method"
                    onPress={() => {}}
                />
            </View>
        </AppSafeView>
    );
};

export default PaymentMethodsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: s(16),
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        gap: s(8),
        marginBottom: vs(20),
    },
    backBtn: {
        padding: s(4),
    },
    title: {
        fontSize: s(22),
        fontWeight: "bold",
        textAlign: "center",
        color: AppColor.text,
    },
    list: {
        gap: s(12),
    },
    card: {
        backgroundColor: "#f2f2f2",
        padding: s(16),
        borderRadius: s(8),
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: vs(8),
    },
    name: {
        fontWeight: "bold",
        fontSize: s(16),
    },
    defaultBadge: {
        backgroundColor: "#00b894",
        color: "#fff",
        fontSize: s(12),
        paddingHorizontal: s(8),
        paddingVertical: vs(4),
        borderRadius: s(6),
    },
    detail: {
        fontSize: s(14),
        color: "#555",
        marginBottom: vs(2),
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyText: {
        fontSize: s(16),
        marginBottom: vs(12),
        color: AppColor.disabledGray,
    },
    addButton: {
        backgroundColor: "#00b894",
        paddingHorizontal: s(20),
        paddingVertical: vs(12),
        borderRadius: s(8),
        width: "100%",
    },
});
