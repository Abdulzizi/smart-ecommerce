import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import AppSafeView from "../components/views/AppSafeView";
import AppButton from "../components/buttons/AppButton";
import { s, vs } from "react-native-size-matters";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { AppColor } from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../components/texts/AppText";
import { useSelector, useDispatch } from "react-redux";
import { calculateOrderSummary, formatMoney } from "../helpers/helper";
import { emptyCart } from "../store/reducer/CartSlice";
import AppModal from "../components/modals/AppModal";
import { RootState } from "../store/store";
import { setSelectedPaymentMethod } from "../store/reducer/paymentMethodSlice";
import { setDefaultAddress } from "../store/reducer/addressSlice";
import { showMessage } from "react-native-flash-message";
import PaymentMethodModal from "../components/modals/PaymentMethodModal";

const CheckoutScreen = () => {
    const [addressModalVisible, setAddressModalVisible] = useState(false);
    const [paymentModalVisible, setPaymentModalVisible] = useState(false);

    const navigation = useNavigation<any>();
    const dispatch = useDispatch();

    // --- ADDRESS ---
    const addresses = useSelector((state: RootState) => state.addressSlice.addresses);
    const defaultAddress = addresses.find((a) => a.isDefault);

    // --- CART ---
    const cartItems = useSelector((state: RootState) => state.cartSlice.items);
    const { itemsPrice, discount, tax, shipping, orderTotal } =
        calculateOrderSummary(cartItems);

    // --- PAYMENT METHODS ---
    const paymentMethods = useSelector(
        (state: RootState) => state.paymentMethodSlice.availableMethods
    );
    const selectedPaymentId = useSelector(
        (state: RootState) => state.paymentMethodSlice.selectedMethodId
    );
    const selectedPayment = paymentMethods.find((m) => m.id === selectedPaymentId);

    const handleSelectPayment = (id: string) => {
        dispatch(setSelectedPaymentMethod(id));
        setPaymentModalVisible(false);
    };

    return (
        <AppSafeView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Ionicons name="arrow-back" size={24} color={AppColor.text} />
                </TouchableOpacity>
                <AppText style={styles.title}>Checkout</AppText>
                <View style={{ width: 24 }} />
            </View>

            {/* Address Card */}
            <View style={styles.card}>
                <View style={styles.rowBetween}>
                    <AppText style={styles.sectionTitle}>Shipping Address</AppText>
                    <TouchableOpacity onPress={() => setAddressModalVisible(true)}>
                        <AppText style={styles.link}>Change</AppText>
                    </TouchableOpacity>
                </View>
                <AppText style={styles.text}>
                    {defaultAddress
                        ? `${defaultAddress.street}, ${defaultAddress.city}`
                        : "No Address Set"}
                </AppText>
            </View>

            <AppModal
                visible={addressModalVisible}
                onClose={() => setAddressModalVisible(false)}
                title="Select Shipping Address"
            >
                <View style={{ gap: 12 }}>
                    {addresses.map((addr) => {
                        const isSelected = addr.isDefault;

                        return (
                            <TouchableOpacity
                                key={addr.id}
                                onPress={() => {
                                    dispatch(setDefaultAddress(addr.id));
                                    setAddressModalVisible(false);

                                    showMessage({
                                        message: `New shipping address selected`,
                                        description: `${addr.street}, ${addr.city}`,
                                        type: "success",
                                        duration: 2500,
                                        icon: "success",
                                        style: { marginTop: s(25) }
                                    });
                                }}
                                activeOpacity={0.8}
                                style={[
                                    styles.addressCard,
                                    isSelected && styles.addressCardSelected,
                                ]}
                            >
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.addressName}>{addr.name}</Text>
                                    <Text style={styles.addressDetail}>
                                        {addr.street}, {addr.city}
                                    </Text>
                                </View>

                                {isSelected && (
                                    <Ionicons
                                        name="checkmark-circle"
                                        size={22}
                                        color={AppColor.primary}
                                    />
                                )}
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </AppModal>

            {/* Payment Method Card */}
            <View style={styles.card}>
                <View style={styles.rowBetween}>
                    <AppText style={styles.sectionTitle}>Payment Method</AppText>
                    <TouchableOpacity onPress={() => setPaymentModalVisible(true)}>
                        <AppText style={styles.link}>Change</AppText>
                    </TouchableOpacity>
                </View>
                <AppText style={styles.text}>
                    {selectedPayment
                        ? `${selectedPayment.name}`
                        : "No Payment Method Selected"}
                </AppText>
            </View>

            {/* Payment Modal */}
            {/* <AppModal
                visible={paymentModalVisible}
                onClose={() => setPaymentModalVisible(false)}
                title="Select Payment Method"
            >
                <View style={{ gap: 12 }}>
                    {paymentMethods.map((method) => {
                        const isSelected = selectedPaymentId === method.id;

                        return (
                            <TouchableOpacity
                                key={method.id}
                                onPress={() => handleSelectPayment(method.id)}
                                activeOpacity={0.8}
                                style={[
                                    styles.paymentCard,
                                    isSelected && styles.paymentCardSelected,
                                ]}
                            >
                                <View style={styles.paymentInfo}>
                                    <View style={styles.logoWrapper}>
                                        <Image
                                            source={{ uri: method.logo }}
                                            style={styles.paymentLogo}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.paymentName}>{method.name}</Text>
                                        <Text style={styles.paymentType}>
                                            {method.description}
                                        </Text>
                                    </View>
                                </View>

                                {isSelected && (
                                    <Ionicons
                                        name="checkmark-circle"
                                        size={22}
                                        color={AppColor.primary}
                                    />
                                )}
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </AppModal> */}

            <AppModal
                visible={paymentModalVisible}
                onClose={() => setPaymentModalVisible(false)}
                title="Select Payment Method"
            >
                <PaymentMethodModal
                    onClose={() => setPaymentModalVisible(false)}
                />
            </AppModal>

            {/* Order Summary */}
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

            {/* Place Order Button */}
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
    );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: s(20),
        backgroundColor: AppColor.background,
    },
    header: {
        flexDirection: "row",
        gap: s(8),
        marginBottom: vs(20),
    },
    backBtn: { padding: s(4) },
    title: {
        fontSize: 22,
        fontWeight: "bold",
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
        fontWeight: "600",
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
        fontWeight: "500",
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
    addressCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: AppColor.white,
        borderRadius: s(10),
        paddingVertical: s(12),
        paddingHorizontal: s(16),
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
    },
    addressCardSelected: {
        borderWidth: 1.5,
        borderColor: AppColor.primary,
        backgroundColor: "#f9fffb",
    },
    addressName: {
        fontSize: 16,
        fontWeight: "600",
        color: AppColor.text,
        marginBottom: 2,
    },
    addressDetail: {
        fontSize: 14,
        color: AppColor.disabledGray,
    },
    paymentCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: AppColor.white,
        borderRadius: s(10),
        paddingVertical: s(12),
        paddingHorizontal: s(16),
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
    },
    paymentCardSelected: {
        borderWidth: 1.5,
        borderColor: AppColor.primary,
        backgroundColor: "#f9fffb",
    },
    paymentInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: s(12),
        flex: 1,
    },
    logoWrapper: {
        width: s(36),
        height: s(36),
        borderRadius: s(8),
        overflow: "hidden",
        backgroundColor: "#f2f2f2",
        justifyContent: "center",
        alignItems: "center",
    },
    paymentLogo: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    paymentName: {
        fontSize: 16,
        fontWeight: "600",
        color: AppColor.text,
    },
    paymentType: {
        fontSize: 13,
        color: AppColor.disabledGray,
    },
});
