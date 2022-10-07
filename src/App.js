import { View, Image, StyleSheet } from "react-native";
import Header from "./Components/Header";
import codingAnt from "./img/codingMe.jpeg";

function App() {
  return (
    <View>
      <Header />
      <Image source={codingAnt} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 220,
    width: 220,
    resizeMode: "cover",
  },
});

export default App;
