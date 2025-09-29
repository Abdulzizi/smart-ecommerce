import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AppColor } from "../styles/colors";
import { vs } from "react-native-size-matters";
import HomeStack from "./HomeStack";
import CheckoutStack from "./CheckoutStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

export default function MainAppBottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: AppColor.white,
                    borderTopColor: AppColor.borderColor,
                    borderTopWidth: 1,
                    // height: vs(85),
                    paddingBottom: vs(6),
                    paddingTop: vs(6),
                },
                tabBarActiveTintColor: AppColor.primary,
                tabBarInactiveTintColor: AppColor.disabledGray,
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName: keyof typeof Ionicons.glyphMap;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Cart") {
                        iconName = focused ? "cart" : "cart-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person" : "person-outline";
                    } else {
                        iconName = "ellipse";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Cart" component={CheckoutStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
    );
}
