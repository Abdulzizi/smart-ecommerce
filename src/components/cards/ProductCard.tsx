import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { FC } from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../../styles/colors'
import { Ionicons } from '@expo/vector-icons'
import AppText from '../texts/AppText'
import AppButton from '../buttons/AppButton'
import { ProductCardProps } from '../../types/type'
import { calculateDiscountedPrice, formatMoney, pluralize } from '../../helpers/helper'

const ProductCard: FC<ProductCardProps> = ({
    title,
    price,
    brand,
    rating,
    sold,
    location,
    discount,
    imageURL,
    onPress
}) => {
    const discountedPrice = calculateDiscountedPrice(price, discount);
    const finalPrice = formatMoney(discountedPrice, "USD");
    const oldPrice = formatMoney(price, "USD");

    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
            <Image source={{ uri: imageURL }} style={styles.image} resizeMode="cover" />

            <AppText style={styles.brand}>{brand}</AppText>
            <AppText style={styles.title} numberOfLines={2}>
                {title}
            </AppText>

            <View style={styles.priceRow}>
                <AppText style={styles.price}>{finalPrice}</AppText>
                {discount > 0 && <AppText style={styles.oldPrice}>{oldPrice}</AppText>}
            </View>

            {discount > 0 && (
                <AppText style={styles.discount}>{discount}% OFF</AppText>
            )}

            <View style={styles.row}>
                <Ionicons name="star" size={12} color="#FFD700" />
                <AppText style={styles.rating}>{rating}</AppText>
                <AppText style={styles.sold}>
                    | {sold} {pluralize(sold, "sold", "sold")}
                </AppText>
            </View>

            <View style={styles.row}>
                <Ionicons name="location-outline" size={12} color={AppColor.disabledGray} />
                <AppText style={styles.location}>{location}</AppText>
            </View>

            <AppButton
                styleTitle={styles.buttonTitle}
                style={styles.button}
                title="Add to cart"
                onPress={() => console.log('Added to cart')}
            />
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: AppColor.white,
        borderRadius: s(8),
        padding: s(8),
        margin: s(6),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: vs(120),
        borderRadius: s(6),
        backgroundColor: AppColor.lightGray,
        marginBottom: s(6),
    },
    title: {
        fontSize: s(12),
        fontWeight: '500',
        color: AppColor.text,
        marginBottom: s(4),
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: s(13),
        fontWeight: '700',
        color: AppColor.primary,
        marginRight: s(6),
    },
    oldPrice: {
        fontSize: s(11),
        color: AppColor.disabledGray,
        textDecorationLine: 'line-through',
    },
    discount: {
        fontSize: s(11),
        color: 'red',
        marginTop: s(2),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: s(2),
    },
    rating: {
        fontSize: s(11),
        color: AppColor.text,
        marginLeft: s(2),
    },
    sold: {
        fontSize: s(11),
        color: AppColor.disabledGray,
        marginLeft: s(2),
    },
    location: {
        fontSize: s(11),
        color: AppColor.disabledGray,
        marginLeft: s(2),
    },
    button: {
        backgroundColor: AppColor.primary,
        paddingVertical: s(4),
        borderRadius: s(6),
        marginTop: s(6),
        width: '100%',
    },
    buttonText: {
        color: AppColor.white,
        fontSize: s(12),
        fontWeight: '600',
    },
    brand: {
        fontSize: s(11),
        color: AppColor.disabledGray,
        marginBottom: s(2),
    },
    buttonTitle: {
        fontSize: s(12),
        fontWeight: '600',
        color: AppColor.white,
    }
})
