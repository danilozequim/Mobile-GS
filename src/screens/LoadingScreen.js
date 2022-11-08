import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.container}></View>
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#45B6FE" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7364FF"
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  loading: {
    flex: 1,
    alignItems: "center",
  },
});
