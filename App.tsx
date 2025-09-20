import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/views/AppSafeView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppButton from './src/components/buttons/AppButton';

export default function App() {
  return (
    <AppSafeView>
      <FlashMessage position="top" style={{ marginHorizontal: 32, backgroundColor: '#E67E22', borderRadius: 10, paddingHorizontal: 16, paddingVertical: 8 }} />
      <AppText onPress={() => showMessage({ message: 'Hello Abdul Rahman' })} variant='small'>Open up App.tsx to start working on your app!</AppText>
      <AppButton title='Dipencet Ngab!' onPress={() => showMessage({ message: 'Ehh Kepencet Jiier' })} bgColor='yellow' />
    </AppSafeView>
  );
}

const styles = StyleSheet.create({

});
