import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { s, vs } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../texts/AppText';
import { AppColor } from '../../styles/colors';

import { formatMoney } from '../../helpers/helper';
import { CartItemProps } from '../../types/type';

const CartItem = ({ product, qty, onIncrease, onDecrease, onDelete }: CartItemProps) => {
    const subtotal = formatMoney(product.price * qty, "USD");

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.imageURL }} style={styles.image} />

            <View style={styles.info}>
                <AppText style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                    {product.title}
                </AppText>
                <AppText style={styles.brand}>{product.brand}</AppText>
                <AppText style={styles.price}>{formatMoney(product.price, "USD")}</AppText>
                {product.discount > 0 && (
                    <AppText style={styles.discount}>Save {product.discount}%</AppText>
                )}

                <View style={styles.bottomRow}>
                    <View style={styles.quantityControls}>
                        <TouchableOpacity onPress={onDecrease} style={styles.qtyBtn}>
                            <Ionicons name="remove" size={16} color={AppColor.white} />
                        </TouchableOpacity>
                        <AppText style={styles.quantity}>{qty}</AppText>
                        <TouchableOpacity onPress={onIncrease} style={styles.qtyBtn}>
                            <Ionicons name="add" size={16} color={AppColor.white} />
                        </TouchableOpacity>
                    </View>

                    <AppText style={styles.subtotal}>{subtotal}</AppText>

                    <TouchableOpacity onPress={onDelete} style={styles.deleteBtn}>
                        <Ionicons
                            name="trash-outline"
                            size={20}
                            color={AppColor.red || 'red'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: AppColor.white,
        borderRadius: s(12),
        marginBottom: vs(12),
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    image: {
        width: s(110),
        height: '100%',
    },
    info: {
        flex: 1,
        padding: s(12),
        justifyContent: 'space-between',
    },
    title: {
        fontSize: s(15),
        fontWeight: '600',
    },
    brand: {
        fontSize: s(13),
        color: AppColor.disabledGray,
        marginBottom: vs(4),
    },
    price: {
        fontSize: s(14),
        color: AppColor.primary,
        fontWeight: 'bold',
    },
    discount: {
        backgroundColor: AppColor.red,
        color: AppColor.white,
        fontSize: s(12),
        paddingHorizontal: s(6),
        paddingVertical: vs(2),
        borderRadius: s(6),
        alignSelf: 'flex-start',
        marginTop: vs(4),
    },

    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: vs(10),
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    qtyBtn: {
        backgroundColor: AppColor.primary,
        borderRadius: s(20),
        padding: s(6),
    },
    quantity: {
        fontSize: s(14),
        fontWeight: 'bold',
        marginHorizontal: s(8),
    },
    subtotal: {
        fontSize: s(14),
        fontWeight: '600',
        color: AppColor.black,
    },
    deleteBtn: {
        padding: s(6),
        marginLeft: s(8),
    },
});
