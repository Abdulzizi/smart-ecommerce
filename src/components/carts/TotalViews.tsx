import { Animated, StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColor } from "../../styles/colors";
import { formatMoney } from "../../helpers/helper";
import { TotalViewsProps } from "../../types/type";
import AppButton from "../buttons/AppButton";

const TotalViews = ({ itemsPrice = 0, tax = 0, shipping = 0, orderTotal = 0, discount = 0, onPress }: TotalViewsProps) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        // Animate bump whenever orderTotal changes
        Animated.sequence([
            Animated.timing(scaleAnim, { toValue: 1.1, duration: 150, useNativeDriver: true }),
            Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }),
        ]).start();
    }, [orderTotal]);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <AppText style={styles.label}>Items Price</AppText>
                <AppText style={styles.value}>{formatMoney(itemsPrice, "USD")}</AppText>
            </View>

            {discount > 0 && (
                <View style={styles.row}>
                    <AppText style={styles.label}>Discount</AppText>
                    <AppText style={[styles.value, { color: "red" }]}>
                        -{formatMoney(discount, "USD")}
                    </AppText>
                </View>
            )}

            <View style={styles.row}>
                <AppText style={styles.label}>Tax</AppText>
                <AppText style={styles.value}>{formatMoney(tax, "USD")}</AppText>
            </View>

            <View style={styles.row}>
                <AppText style={styles.label}>Shipping</AppText>
                <AppText style={styles.value}>{formatMoney(shipping, "USD")}</AppText>
            </View>

            <View style={styles.divider} />

            <View style={styles.row}>
                <AppText style={styles.totalLabel}>Order Total</AppText>
                <View style={styles.totalRow}>
                    {discount > 0 && (
                        <AppText style={styles.oldTotal}>
                            {formatMoney(itemsPrice + tax + shipping, "USD")}
                        </AppText>
                    )}
                    <Animated.Text style={[styles.totalValue, { transform: [{ scale: scaleAnim }] }]}>
                        {formatMoney(orderTotal, "USD")}
                    </Animated.Text>
                </View>
            </View>

            {discount > 0 && (
                <AppText style={styles.savings}>
                    🎉 You saved {formatMoney(discount, "USD")}!
                </AppText>
            )}

            <AppButton title="Continue" onPress={onPress} style={styles.button} />
        </View>
    );
};

export default TotalViews;

const styles = StyleSheet.create({
    container: {
        // paddingVertical: vs(12),
        // paddingHorizontal: s(16),
        // backgroundColor: AppColor.white,
        // borderRadius: s(12),
        // shadowColor: "#000",
        // shadowOpacity: 0.05,
        // shadowRadius: 6,
        // shadowOffset: { width: 0, height: 2 },
        // elevation: 2,
        marginTop: vs(14),
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
    divider: {
        height: 1,
        backgroundColor: AppColor.disabledGray,
        marginVertical: vs(10),
    },
    totalLabel: {
        fontSize: s(16),
        fontWeight: "bold",
        color: AppColor.black,
    },
    totalValue: {
        fontSize: s(16),
        fontWeight: "bold",
        color: AppColor.primary,
    },
    button: {
        backgroundColor: AppColor.primary,
        paddingVertical: s(4),
        borderRadius: s(6),
        marginTop: s(6),
        width: '100%',
    },
    totalRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    oldTotal: {
        fontSize: s(14),
        color: AppColor.disabledGray,
        textDecorationLine: "line-through",
        marginRight: s(8),
    },
    savings: {
        marginTop: vs(2),
        fontSize: s(13),
        fontWeight: "600",
        color: "green",
    }
});
