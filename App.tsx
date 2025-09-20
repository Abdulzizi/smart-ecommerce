import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/views/AppSafeView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppButton from './src/components/buttons/AppButton';
import AppTextInput from './src/components/inputs/AppTextInput';

export default function App() {
  return (
    <AppSafeView>
      <View style={{ marginHorizontal: 32, marginTop: 32 }}>
        <AppTextInput placeholder='Testing nich' />
      </View>
      <FlashMessage position="top" style={{ marginHorizontal: 32, backgroundColor: '#E67E22', borderRadius: 10, paddingHorizontal: 16, paddingVertical: 8 }} />
      <AppText onPress={() => showMessage({ message: 'Hello Abdul Rahman' })} variant='small'>Open up App.tsx to start working on your app!</AppText>
      <AppButton title='Dipencet Ngab!' onPress={() => showMessage({ message: 'Ehh Kepencet Jiier' })} bgColor='yellow' />
    </AppSafeView>
  );
}

const styles = StyleSheet.create({

});
