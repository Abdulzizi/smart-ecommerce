import { createStackNavigator } from "@react-navigation/stack";
import AddressScreen from "../screens/AddressScreen";
import AddressFormScreen from "../screens/AddressFormScreen";

const Stack = createStackNavigator();

export default function AddressStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddressScreen" component={AddressScreen} />
      <Stack.Screen name="AddressFormScreen" component={AddressFormScreen} />
    </Stack.Navigator>
  );
}
