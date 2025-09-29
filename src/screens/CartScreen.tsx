import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import AppSafeView from '../components/views/AppSafeView'
import { s } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import AppButton from '../components/buttons/AppButton'

import { products } from '../data/products'
import CartItemList from '../components/carts/CartItemList'
import TotalViews from '../components/carts/TotalViews'
import EmptyCarts from '../components/carts/EmptyCarts'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQty, increaseQty, removeItemFromCart } from '../store/reducer/CartSlice'

const CartScreen = () => {
  const navigation = useNavigation<any>();

  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cartSlice.items);

  // console.log("cartItems", cartItems);

  const itemsPrice = cartItems.reduce(
    (sum: number, item: any) => sum + item.product.price * item.qty,
    0
  );

  // cartItems.map((item: any) => console.log(item.qty))

  const tax = 20;
  const shipping = 15;
  const orderTotal = itemsPrice + tax + shipping;

  return (
    <AppSafeView style={styles.container}>
      {cartItems.length === 0 ? (
        <EmptyCarts />
      ) : (
        <>
          <CartItemList
            items={cartItems}
            onIncrease={(id) => {
              dispatch(increaseQty(id));
            }}
            onDecrease={(id) => {
              dispatch(decreaseQty(id));
            }}
            onDelete={(id) => {
              dispatch(removeItemFromCart(id));
            }}
          />

          <TotalViews
            onPress={() => navigation.navigate("CheckoutScreen")}
            itemsPrice={itemsPrice}
            tax={tax}
            shipping={shipping}
            orderTotal={orderTotal}
          />
        </>
      )}
    </AppSafeView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: -50,
    padding: s(20),
    backgroundColor: '#f8f8f8',
  },
  checkoutBtn: {
    marginTop: s(16),
  }
})
