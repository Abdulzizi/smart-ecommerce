import { StyleSheet } from 'react-native'
import React from 'react'
import AppSafeView from '../components/views/AppSafeView'
import { s } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import EmptyCart from '../components/carts/emptyCart'
import CartItem from '../components/carts/CartItem'
import CartItemList from '../components/carts/CartItemList'

import {products} from '../data/products'

const CartScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <AppSafeView style={styles.container}>
      {/* <EmptyCart /> */}

      <CartItemList items={products.map((product) => ({ product, qty: 1 }))} />
    </AppSafeView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    padding: s(20),
    flex: 1,
  }
})