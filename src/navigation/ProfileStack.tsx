import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import AddressScreen from "../screens/AddressScreen";
import AddressStack from "./AddressStack";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="MyOrdersScreen" component={MyOrdersScreen} />
      <Stack.Screen name="AddressScreen" component={AddressStack} />
      {/* <Stack.Screen
        name="PaymentMethodsScreen"
        component={PaymentMethodsScree}
      /> */}
    </Stack.Navigator>
  );
}
