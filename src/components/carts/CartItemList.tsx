import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CartItemListProps } from '../../types/type'
import CartItem from './CartItem'
import { useDispatch } from 'react-redux'

const CartItemList = ({ items, onIncrease, onDecrease, onDelete }: CartItemListProps) => {
    // console.log(items);
    return (
        <FlatList
            data={items}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
                <CartItem
                    product={item.product}
                    qty={item.qty}
                    onIncrease={() => onIncrease(item.product.id)}
                    onDecrease={() => onDecrease(item.product.id)}
                    onDelete={() => onDelete(item.product.id)}
                />
            )}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default CartItemList

const styles = StyleSheet.create({
    list: {
        paddingVertical: 12,
    },
})