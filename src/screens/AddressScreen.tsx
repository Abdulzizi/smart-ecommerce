import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AppSafeView from '../components/views/AppSafeView'
import AppText from '../components/texts/AppText'
import { useNavigation } from '@react-navigation/native'
import AppButton from '../components/buttons/AppButton'

type Address = {
    id: string
    name: string
    street: string
    city: string
    zip: string
    phone: string
    isDefault?: boolean
}

const dummyAddresses: Address[] = [
    {
        id: '1',
        name: 'John Doe',
        street: 'Jl. Sudirman No. 21',
        city: 'Jakarta',
        zip: '12345',
        phone: '08123456789',
        isDefault: true,
    },
    {
        id: '2',
        name: 'Jane Doe',
        street: 'Jl. Merdeka No. 5',
        city: 'Bandung',
        zip: '40234',
        phone: '08234567890',
    },
]

const AddressScreen = () => {
    const addresses = dummyAddresses // later replace with state or API

    const navigation = useNavigation();

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
                <AppText style={styles.title}>Addresses</AppText>
                <View style={styles.separator} />
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
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>+ Add New Address</Text>
                        </TouchableOpacity>
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
        padding: 16,
        backgroundColor: '#fff',
    },
    list: {
        gap: 12,
    },
    card: {
        backgroundColor: '#f2f2f2',
        padding: 16,
        borderRadius: 8,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    defaultBadge: {
        backgroundColor: '#00b894',
        color: '#fff',
        fontSize: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    detail: {
        fontSize: 14,
        color: '#555',
        marginBottom: 2,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        marginBottom: 12,
        color: '#666',
    },
    addButton: {
        backgroundColor: '#00b894',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        width: '100%',
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginBottom: 16,
    },
})
