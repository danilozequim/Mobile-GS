import {
  StyleSheet,
  View,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.imgBackground}
      />
      <ActivityIndicator size="large" color="#7364FF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E7FF",
    padding: RFValue(40),
  },
  imgBackground: {
    width: RFPercentage(50),
    height: RFPercentage(35),
  },
});
