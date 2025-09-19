import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/views/AppSafeView';

export default function App() {
  return (
    <AppSafeView>
      <AppText variant='small'>Open up App.tsx to start working on your app!</AppText>
      <StatusBar style="auto" />
    </AppSafeView>
  );
}

const styles = StyleSheet.create({

});
