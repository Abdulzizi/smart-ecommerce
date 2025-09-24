import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppSafeView from '../components/views/AppSafeView'
import AppText from '../components/texts/AppText'
import AppButton from '../components/buttons/AppButton'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../styles/colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <AppSafeView style={styles.container}>

      <View style={styles.textContainer}>
        <Ionicons
          name="cart-outline"
          size={s(128)}
          color={AppColor.disabledGray}
          style={styles.icon}
        />

        <AppText style={styles.textHeader}>
          Your Cart Is Empty
        </AppText>
        <AppText style={styles.textContent}>
          Browse our categories and discover our best deals, discounts and promotions!
        </AppText>
      </View>

      <AppButton title='Shop Now' onPress={() => navigation.navigate('Home')} style={styles.button} />
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
  },
  textContainer: {
    marginBottom: vs(16),
    alignItems: 'center',
  },
  textHeader: {
    fontSize: s(32),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textContent: {
    fontSize: s(15),
    textAlign: 'center',
    marginTop: vs(8),
    color: AppColor.disabledGray
  },
  button: {
    borderRadius: s(8),
    paddingVertical: vs(14),
    width: '100%',
  },
  icon: {
    marginBottom: vs(8),
  },
})