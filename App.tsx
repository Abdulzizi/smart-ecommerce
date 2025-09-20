import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import AppSafeView from './src/components/views/AppSafeView';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AuthStack from './src/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/navigation/MainAppStack';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontLoaded] = useFonts({
    "Nunito-Bold": require("../smartECommerce/src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("../smartECommerce/src/assets/fonts/Nunito-Medium.ttf")
  })

  if (!fontLoaded) {
    <ActivityIndicator size="large" />
  }
  return (
      <NavigationContainer>
        <MainAppStack />
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});
