import { ActivityIndicator, StyleSheet } from 'react-native';
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
