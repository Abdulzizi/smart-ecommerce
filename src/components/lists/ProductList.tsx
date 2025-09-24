import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { products } from '../../data/products'
import ProductCard from '../cards/ProductCard'
import { AppColor } from '../../styles/colors'
import { useNavigation } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const ProductList = () => {
    const navigation = useNavigation<any>();
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductCard
                        title={item.title}
                        price={item.price}
                        brand={item.brand}
                        rating={item.rating}
                        sold={item.sold}
                        location={item.location}
                        discount={item.discount}
                        imageURL={item.imageURL}
                        onPress={() => navigation.navigate('ProductDetail', { product: item })}
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