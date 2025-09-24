import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types/type'
import AppText from '../components/texts/AppText'
import AppButton from '../components/buttons/AppButton'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../styles/colors'
import { Ionicons } from '@expo/vector-icons'
import ImageViewing from "react-native-image-viewing";
import { calculateDiscountedPrice, formatMoney, pluralize } from '../helpers/helper'

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>

const ProductDetailScreen = () => {
  const [visible, setVisible] = useState(false);

  const route = useRoute<ProductDetailRouteProp>()
  const navigation = useNavigation()
  const { product }: any = route.params

  const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
  const finalPrice = formatMoney(discountedPrice, "USD");
  const oldPrice = formatMoney(product.price, "USD");

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={AppColor.text} />
      </TouchableOpacity>

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: vs(100) }}
      >
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Image source={{ uri: product.imageURL }} style={styles.image} resizeMode="cover" />
        </TouchableOpacity>

        <ImageViewing
          images={[{ uri: product.imageURL }]}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setVisible(false)}
          animationType='slide'
/>

        <AppText variant="bold" style={styles.title}>{product.title}</AppText>
        <AppText style={styles.brand}>{product.brand}</AppText>

        <View style={styles.priceRow}>
          <AppText style={styles.price}>{finalPrice}</AppText>
          {product.discount > 0 && (
            <AppText style={styles.oldPrice}>{oldPrice}</AppText>
          )}
        </View>
        {product.discount > 0 && (
          <AppText style={styles.discount}>{product.discount}% OFF</AppText>
        )}

        <View style={styles.infoCard}>
          <View style={styles.row}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <AppText style={styles.rating}>{product.rating}</AppText>
            <AppText style={styles.sold}>
              | {product.sold} {pluralize(product.sold, "sold", "sold")}
            </AppText>
          </View>

          <View style={styles.row}>
            <Ionicons name="location-outline" size={16} color={AppColor.disabledGray} />
            <AppText style={styles.location}>{product.location}</AppText>
          </View>
        </View>

        <AppText style={styles.sectionTitle}>Description</AppText>
        <AppText style={styles.description}>{product.description}</AppText>
      </ScrollView>

      <View style={styles.footer}>
        <AppButton
          title="Add to Cart"
          onPress={() => console.log('Added to cart')}
          style={styles.button}
          styleTitle={styles.buttonTitle}
        />
      </View>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  scroll: {
    padding: s(12),
  },
  image: {
    width: '100%',
    height: vs(250),
    borderRadius: s(8),
    marginBottom: s(12),
    backgroundColor: AppColor.lightGray,
  },
  backButton: {
    position: 'absolute',
    top: vs(40),
    left: s(12),
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: s(8),
    borderRadius: 50,
  },
  title: {
    fontSize: s(18),
    marginBottom: s(4),
    color: AppColor.text,
  },
  brand: {
    fontSize: s(14),
    color: AppColor.disabledGray,
    marginBottom: s(12),
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: s(20),
    fontWeight: '700',
    color: AppColor.primary,
    marginRight: s(8),
  },
  oldPrice: {
    fontSize: s(14),
    color: AppColor.disabledGray,
    textDecorationLine: 'line-through',
  },
  discount: {
    fontSize: s(14),
    color: 'red',
    marginTop: s(2),
    marginBottom: s(12),
  },
  infoCard: {
    backgroundColor: AppColor.lightGray,
    borderRadius: s(8),
    padding: s(10),
    marginVertical: s(12),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: s(4),
  },
  rating: {
    fontSize: s(14),
    marginLeft: s(4),
    color: AppColor.text,
  },
  sold: {
    fontSize: s(14),
    marginLeft: s(4),
    color: AppColor.disabledGray,
  },
  location: {
    fontSize: s(14),
    marginLeft: s(4),
    color: AppColor.disabledGray,
  },
  sectionTitle: {
    fontSize: s(16),
    fontWeight: '600',
    marginTop: s(12),
    marginBottom: s(6),
    color: AppColor.text,
  },
  description: {
    fontSize: s(14),
    lineHeight: 22,
    color: AppColor.text,
    marginBottom: s(20),
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: s(12),
    backgroundColor: AppColor.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: AppColor.lightGray,
  },
  button: {
    width: '100%',
    borderRadius: s(8),
    paddingVertical: s(14),
    backgroundColor: AppColor.primary,
  },
  buttonTitle: {
    fontSize: s(15),
    fontWeight: '600',
    color: AppColor.white,
  },
})
