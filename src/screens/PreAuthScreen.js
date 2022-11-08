import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.imgBackground}
      >
        <Text style={styles.title}>GetFretes</Text>
      </ImageBackground>

      <View style={styles.secondContainer}>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={styles.button}
        >
          <Text style={styles.text}>Cadastro</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CECCFF",
  },
  imgBackground: {
    flex: 0.5,
    width: RFPercentage(110),
    height: RFPercentage(60),
    alignSelf: "center",
    marginBottom: RFPercentage(10),
  },
  secondContainer: {
    flex: 0.5,
    alignItems: "center",
    paddingTop: RFPercentage(15),
  },
  title: {
    fontFamily: "Caveat_700Bold",
    color: "#FFC30D",
    fontSize: RFValue(72),
    textAlign: "center",
    paddingTop: RFPercentage(20),
  },
  button: {
    width: RFPercentage(40),
    height: RFPercentage(8),
    marginHorizontal: "auto",
    backgroundColor: "#7364FF",
    borderRadius: RFValue(30),
    justifyContent: "center",
    marginTop: RFPercentage(3),
  },
  text: {
    color: "#FFF",
    fontFamily: "Signika_600SemiBold",
    fontSize: RFValue(20),
    textAlign: "center",
  },
});
