import { FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Main } from './src/components/Main/Main.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
      <StatusBar style='auto' />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
