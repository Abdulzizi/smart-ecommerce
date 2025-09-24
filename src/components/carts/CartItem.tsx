import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { s, vs } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../texts/AppText';
import { AppColor } from '../../styles/colors';

import { formatMoney } from '../../helpers/helper';

const CartItem = () => {
    const [quantity, setQuantity] = useState(1);

    const prod = {
        id: 1,
        title: 'iPhone 16 Pro Max',
        price: 1199,
        imageURL:
            'https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg',
        brand: 'Apple',
        discount: 10,
    };

    const subtotal = formatMoney(prod.price * quantity, "USD");

    const handleIncrease = () => setQuantity((q) => q + 1);
    const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
    const handleDelete = () => {
        console.log(`Delete product with id ${prod.id}`);
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: prod.imageURL }} style={styles.image} />

            <View style={styles.info}>
                <AppText style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                    {prod.title}
                </AppText>
                <AppText style={styles.brand}>{prod.brand}</AppText>
                <AppText style={styles.price}>{formatMoney(prod.price, "USD")}</AppText>
                {prod.discount > 0 && (
                    <AppText style={styles.discount}>Save {prod.discount}%</AppText>
                )}

                <View style={styles.bottomRow}>
                    <View style={styles.quantityControls}>
                        <TouchableOpacity onPress={handleDecrease} style={styles.qtyBtn}>
                            <Ionicons name="remove" size={16} color={AppColor.white} />
                        </TouchableOpacity>
                        <AppText style={styles.quantity}>{quantity}</AppText>
                        <TouchableOpacity onPress={handleIncrease} style={styles.qtyBtn}>
                            <Ionicons name="add" size={16} color={AppColor.white} />
                        </TouchableOpacity>
                    </View>

                    <AppText style={styles.subtotal}>{subtotal}</AppText>

                    <TouchableOpacity onPress={handleDelete} style={styles.deleteBtn}>
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
