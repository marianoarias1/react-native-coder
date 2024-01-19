import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {Main} from "./src/components/Main.jsx"

export default function App() {
  return (
    <View style={styles.container}>
      <Main name={'Porsche 911 992 GT3'} url={"https://upload.wikimedia.org/wikipedia/commons/c/c1/Porsche_992_GT3_1X7A0323.jpg"} />
      <Main name={'Lamborghini Huracán STO'} url={"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sto/2023/10_18_refresh/gallery/hura_sto_03.jpg"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:30,
  },
});
