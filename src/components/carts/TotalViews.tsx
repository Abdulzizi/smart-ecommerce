import { StyleSheet, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColor } from "../../styles/colors";
import { formatMoney } from "../../helpers/helper";
import { TotalViewsProps } from "../../types/type";
import AppButton from "../buttons/AppButton";

const TotalViews = ({ itemsPrice = 0, tax = 0, shipping = 0, orderTotal = 0, onPress }: TotalViewsProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <AppText style={styles.label}>Items Price</AppText>
                <AppText style={styles.value}>{formatMoney(itemsPrice, "USD")}</AppText>
            </View>

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
                <AppText style={styles.totalValue}>
                    {formatMoney(orderTotal, "USD")}
                </AppText>

            </View>
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
    }
});
