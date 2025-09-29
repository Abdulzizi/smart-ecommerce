import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { products } from '../../data/products'
import ProductCard from '../cards/ProductCard'
import { AppColor } from '../../styles/colors'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducer/CartSlice'
import { showMessage } from 'react-native-flash-message'
import { s } from 'react-native-size-matters'

const ProductList = () => {
    const navigation = useNavigation<any>();
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductCard
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        brand={item.brand}
                        rating={item.rating}
                        sold={item.sold}
                        location={item.location}
                        discount={item.discount}
                        imageURL={item.imageURL}
                        onPress={() => navigation.navigate('ProductDetail', { product: item })}
                        onPressCart={() => {
                            dispatch(addToCart(item));

                            showMessage({
                                message: `${item.title} added to cart`,
                                type: 'success',
                                icon: 'success',
                                duration: 2000,
                                floating: true,
                                style: { marginTop: s(25) }
                            });

                        }}
                    />
                )}
                numColumns={2}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.noProducts}>No products available</Text>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            // contentContainerStyle={{ paddingBottom: tabBarHeight / 2}}
            />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
    },
    row: {
        justifyContent: 'space-between',
    },
    noProducts: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: AppColor.disabledGray,
    }
})