import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPaymentMethod } from "../../store/reducer/paymentMethodSlice";
import { RootState } from "../../store/store";
import { showMessage } from "react-native-flash-message";

export default function PaymentMethodModal({ onClose }: { onClose: () => void }) {
    const dispatch = useDispatch();
    const { availableMethods, selectedMethodId } = useSelector(
        (state: RootState) => state.paymentMethodSlice
    );

    const eWallets = availableMethods.filter((m: any) => m.type === "e-wallet");
    const banks = availableMethods.filter((m: any) => m.type === "bank");

    const handleSelect = (id: string) => {
        dispatch(setSelectedPaymentMethod(id));
        const selected = availableMethods.find((m) => m.id === id);

        showMessage({
            message: "Payment method selected",
            description: `${selected?.name}`,
            type: "success",
            duration: 2500,
            icon: "success",
            style: { marginTop: 25 },
        });

        onClose();
    };

    const renderSection = (title: string, data: typeof availableMethods) => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {data.map((method: any) => (
                <TouchableOpacity
                    key={method.id}
                    onPress={() => handleSelect(method.id)}
                    style={[
                        styles.card,
                        selectedMethodId === method.id && styles.cardSelected,
                    ]}
                >
                    <Image
                        source={{ uri: method.logo }}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.methodName}>{method.name}</Text>
                        <Text style={styles.methodDescription}>{method.description}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderSection("E-Wallet", eWallets)}
                {renderSection("Bank Transfer", banks)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontWeight: "700",
        fontSize: 16,
        marginBottom: 10,
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        backgroundColor: "#F3F4F6",
        borderRadius: 10,
        marginBottom: 8,
    },
    cardSelected: {
        backgroundColor: "#D1FAE5",
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
    },
    methodName: {
        fontWeight: "600",
        fontSize: 15,
    },
    methodDescription: {
        fontSize: 13,
        color: "#6B7280",
    },
});
