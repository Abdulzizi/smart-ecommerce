import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppSafeView from './src/components/views/AppSafeView';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AuthStack from './src/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/navigation/MainAppStack';

export default function App() {
  return (
      <NavigationContainer>
        <MainAppStack />
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});
