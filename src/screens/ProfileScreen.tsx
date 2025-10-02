import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../styles/colors'
import AppSafeView from '../components/views/AppSafeView'
import AppText from '../components/texts/AppText'

const ProfileScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <AppSafeView style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          source={{ uri: `https://i.pravatar.cc/150?u=${Math.random()}` }} style={styles.avatar}
        />
        <AppText style={styles.name}>John Doe</AppText>
        <AppText style={styles.email}>johndoe@gmail.com</AppText>
      </View>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("MyOrdersScreen")}
      >
        <Ionicons name="cart-outline" size={22} color={AppColor.text} />
        <AppText style={styles.menuText}>My Orders</AppText>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={styles.menuItem}
        onPress={() => console.log("Navigate to Settings")}
      >
        <Ionicons name="settings-outline" size={22} color={AppColor.text} />
        <AppText style={styles.menuText}>Settings</AppText>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("AddressStack")}
      >
        <Ionicons name="location-outline" size={22} color={AppColor.text} />
        <AppText style={styles.menuText}>My Addresses</AppText>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("PaymentScreen")}
      >
        <Ionicons name="card-outline" size={22} color={AppColor.text} />
        <AppText style={styles.menuText}>My Payment Methods</AppText>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => console.log("Navigate to Help")}
      >
        <Ionicons name="help-circle-outline" size={22} color={AppColor.text} />
        <AppText style={styles.menuText}>Help & Support</AppText>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuItem, { borderTopWidth: 1, borderTopColor: "#eee" }]}
        onPress={() => {
          console.log("Logout pressed");
          navigation.reset({
            index: 0,
            routes: [{ name: "AuthStack" }],
          });
        }}
      >
        <Ionicons name="log-out-outline" size={22} color="red" />
        <AppText style={[styles.menuText, { color: "red" }]}>Logout</AppText>
      </TouchableOpacity>
    </AppSafeView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: s(20),
    backgroundColor: AppColor.background,
  },
  profileCard: {
    alignItems: "center",
    marginBottom: vs(20),
  },
  avatar: {
    width: s(80),
    height: s(80),
    borderRadius: s(40),
    marginBottom: s(10),
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: AppColor.text,
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: vs(14),
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuText: {
    fontSize: 16,
    marginLeft: s(12),
    color: AppColor.text,
  },
})
