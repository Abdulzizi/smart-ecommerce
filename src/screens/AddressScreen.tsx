import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AppSafeView from '../components/views/AppSafeView'
import AppText from '../components/texts/AppText'
import { RouteProp, useNavigation } from '@react-navigation/native'
import AppButton from '../components/buttons/AppButton'
import { Address, RootStackParamList } from '../types/type'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../styles/colors'
import { Ionicons } from '@expo/vector-icons'
import {  useSelector } from 'react-redux'
import { RootState } from '../store/store'

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AddressFormScreen">;

const AddressScreen = () => {
    const navigation = useNavigation<NavigationProp>();

    const addresses = useSelector((state: RootState) => state.addressSlice.addresses);

    console.log("Addresses from state : ", addresses);

    const renderAddress = ({ item }: { item: Address }) => (
        <TouchableOpacity style={styles.card} onPress={() => { navigation.navigate('AddressFormScreen', { address: item }) }}>
            <View style={styles.cardHeader}>
                <Text style={styles.name}>{item.name}</Text>
                {item.isDefault && <Text style={styles.defaultBadge}>Default</Text>}
            </View>
            <Text style={styles.detail}>{item.street}</Text>
            <Text style={styles.detail}>
                {item.city}, {item.zip}
            </Text>
            <Text style={styles.detail}>📞 {item.phone}</Text>
        </TouchableOpacity>
    )

    return (
        <AppSafeView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backBtn}
                    >
                        <Ionicons name="arrow-back" size={24} color={AppColor.text} />
                    </TouchableOpacity>
                    <AppText style={styles.title}>Addresses</AppText>
                    <View style={{ width: 24 }} />
                </View>
                {/* <View style={styles.separator} /> */}
                {addresses.length > 0 ? (
                    <FlatList
                        data={addresses}
                        keyExtractor={(item) => item.id}
                        renderItem={renderAddress}
                        contentContainerStyle={styles.list}
                    />
                ) : (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No addresses added yet</Text>
                        {/* <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>+ Add New Address</Text>
                        </TouchableOpacity> */}
                    </View>
                )}

                <AppButton
                    style={styles.addButton}
                    title="Add New Address"
                    onPress={() => navigation.navigate('AddressFormScreen')}
                />
            </View>
        </AppSafeView>
    )
}

export default AddressScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: s(16),
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: "row",
        // alignItems: "flex-start",
        gap: s(8),
        // justifyContent: "space-between",
        marginBottom: vs(20),
    },
    backBtn: {
        padding: s(4),
    },
    title: {
        fontSize: s(22),
        fontWeight: 'bold',
        textAlign: "center",
        color: AppColor.text,
    },
    list: {
        gap: s(12),
    },
    card: {
        backgroundColor: '#f2f2f2',
        padding: s(16),
        borderRadius: s(8),
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vs(8),
    },
    name: {
        fontWeight: 'bold',
        fontSize: s(16),
    },
    defaultBadge: {
        backgroundColor: '#00b894',
        color: '#fff',
        fontSize: s(12),
        paddingHorizontal: s(8),
        paddingVertical: vs(4),
        borderRadius: s(6),
    },
    detail: {
        fontSize: s(14),
        color: '#555',
        marginBottom: vs(2),
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: s(16),
        marginBottom: vs(12),
        color: AppColor.disabledGray,
    },
    addButton: {
        backgroundColor: '#00b894',
        paddingHorizontal: s(20),
        paddingVertical: vs(12),
        borderRadius: s(8),
        width: '100%',
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    separator: {
        height: vs(1),
        backgroundColor: '#ccc',
        marginBottom: vs(16),
    },
})
