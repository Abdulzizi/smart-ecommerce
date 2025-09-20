import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppSafeView from './src/components/views/AppSafeView';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
  return (
      // <SignInScreen />
      <SignUpScreen />
  );
}

const styles = StyleSheet.create({

});
