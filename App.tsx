import { ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/navigation/MainAppStack';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  const [fontLoaded] = useFonts({
    "Nunito-Bold": require("../smartECommerce/src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("../smartECommerce/src/assets/fonts/Nunito-Medium.ttf")
  })

  if (!fontLoaded) {
    <ActivityIndicator size="large" />
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <FlashMessage position="top" />
        <MainAppStack />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
