import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
} from "react-native";
import { useAuth } from "../contexts/Auth";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.imgBackground}
      />
      <View style={styles.secondContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          value={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholder="Email"
          style={styles.textInput}
          placeholderTextColor="#A39BFF"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          value={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          style={styles.textInput}
          placeholder="Senha"
          placeholderTextColor="#A39BFF"
          secureTextEntry
        />
        <Pressable
          onPress={() => signIn(email, password)}
          style={styles.button}
        >
          <Text style={styles.text}>Entrar</Text>
        </Pressable>
        <View>
          <Text style={styles.secondText}>Esqueci a senha</Text>
          <Text style={styles.registerText}>
            Ainda não tem conta?
            <Text
              onPress={() => navigation.navigate("Register")}
              style={{ color: "#7364FF" }}
            >
              {" "}
              Cadastre-se
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E7FF",
  },
  imgBackground: {
    flex: 0.3,
    width: RFPercentage(72),
    height: RFPercentage(35),
    alignSelf: "flex-end",
  },
  secondContainer: {
    flex: 0.7,
    alignItems: "center",
    marginTop: RFValue(80),
    paddingHorizontal: RFPercentage(5),
    backgroundColor: "#CECCFF",
    borderTopRightRadius: RFValue(20),
    borderTopLeftRadius: RFValue(20),
  },
  title: {
    color: "#7364FF",
    fontFamily: "Signika_600SemiBold",
    fontSize: RFValue(36),
    paddingBottom: RFValue(20),
    paddingTop: RFValue(30),
    alignSelf: "flex-start"
  },
  text: {
    color: "#FFF",
    fontFamily: "Signika_600SemiBold",
    fontSize: RFValue(20),
    textAlign: "center",
  },
  textInput: {
    height: RFValue(40),
    width: "100%",
    textAlign: "left",
    paddingLeft: RFValue(20),
    borderRadius: RFValue(20),
    marginTop: RFValue(10),
    fontSize: RFValue(20),
    backgroundColor: "#FFF",
    fontFamily: "Signika_600SemiBold",
  },
  button: {
    width: "100%",
    height: RFPercentage(6),
    marginHorizontal: "auto",
    backgroundColor: "#7364FF",
    borderRadius: RFValue(30),
    justifyContent: "center",
    marginTop: RFPercentage(3),
  },
  secondText: {
    fontFamily: "Signika_600SemiBold",
    color: "#7364FF",
    fontSize: RFValue(15),
    textAlign: "center",
    marginStart: RFValue(-30),
    marginTop: RFValue(10),
  },
  registerText: {
    fontFamily: "Signika_600SemiBold",
    color: "#FFF",
    fontSize: RFValue(15),
    textAlign: "center",
    marginStart: RFValue(-30),
    marginTop: RFValue(90),
  },
});
