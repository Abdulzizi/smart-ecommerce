import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppSafeView from '../components/views/AppSafeView'
import { s } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

import CartItemList from '../components/carts/CartItemList'
import TotalViews from '../components/carts/TotalViews'
import EmptyCarts from '../components/carts/EmptyCarts'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQty, increaseQty, removeItemFromCart } from '../store/reducer/CartSlice'
import { showMessage } from 'react-native-flash-message'
import ConfirmModal from '../components/modals/ConfirmModal'

const CartScreen = () => {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [selectedId, setSelectedId] = useState<number | string | null>(null);

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
              setSelectedId(id);
              setConfirmVisible(true);
            }}
          />

            <ConfirmModal
              visible={confirmVisible}
              message="Are you sure you want to remove this item from your cart?"
              onCancel={() => setConfirmVisible(false)}
              onConfirm={() => {
                if (selectedId !== null) {
                  dispatch(removeItemFromCart(selectedId));
                  showMessage({
                    message: "Item removed from cart",
                    type: "danger",
                    duration: 2000,
                    icon: "auto",
                    style: {marginTop: s(25)}
                  });
                }
                setConfirmVisible(false);
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
