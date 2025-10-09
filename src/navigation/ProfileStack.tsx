import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import AddressStack from "./AddressStack";
import PaymentMethodsScreen from "../screens/PaymentMethodScreen";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="MyOrdersScreen" component={MyOrdersScreen} />
      <Stack.Screen name="AddressStack" component={AddressStack} />
      {/* <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodsScreen} /> */}
    </Stack.Navigator>
  );
}
