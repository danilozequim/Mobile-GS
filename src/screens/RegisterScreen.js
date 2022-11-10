import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
  Button,
} from "react-native";
import { api } from "../services/api";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { RadioButton } from "react-native-paper";

export default function RegisterScreen() {
  const EnterpriseForm = () => {
    return (
      <>
        <Text style={styles.secondTitle}>ENDEREÇO</Text>

        <TextInput
          value={address}
          onChangeText={(userAddress) => setAddress(userAddress)}
          style={styles.textInput}
          placeholder="Endereço"
          placeholderTextColor="#A39BFF"
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            value={addressNumber}
            onChangeText={(userAddressNumber) =>
              setAddressNumber(userAddressNumber)
            }
            style={[styles.textInput, { width: "45%" }]}
            placeholder="Número"
            placeholderTextColor="#A39BFF"
          />
          <TextInput
            value={complement}
            onChangeText={(userComplement) => setComplement(userComplement)}
            style={[styles.textInput, { width: "53%" }]}
            placeholder="Complemento"
            placeholderTextColor="#A39BFF"
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            value={cep}
            onChangeText={(userCep) => setCep(userCep)}
            style={[styles.textInput, { width: "45%" }]}
            placeholder="CEP"
            placeholderTextColor="#A39BFF"
          />
          <TextInput
            value={state}
            onChangeText={(userState) => setState(userState)}
            style={[styles.textInput, { width: "53%" }]}
            placeholder="Estado"
            placeholderTextColor="#A39BFF"
          />
        </View>
      </>
    );
  };

  const TruckerForm = () => {
    return (
      <>
        <Text style={styles.secondTitle}>INFORMAÇÕES DO VEÍCULO</Text>

        <TextInput
          value={vehicle}
          onChangeText={(userVehicle) => setVehicle(userVehicle)}
          style={styles.textInput}
          placeholder="Tipo de veículo"
          placeholderTextColor="#A39BFF"
        />
        <TextInput
          value={brand}
          onChangeText={(userBrand) => setBrand(userBrand)}
          style={styles.textInput}
          placeholder="Marca"
          placeholderTextColor="#A39BFF"
        />
        <TextInput
          value={model}
          onChangeText={(userModel) => setModel(userModel)}
          style={styles.textInput}
          placeholder="Modelo"
          placeholderTextColor="#A39BFF"
        />
        <TextInput
          value={license}
          onChangeText={(userLicense) => setLicense(userLicense)}
          style={styles.textInput}
          placeholder="Placa"
          placeholderTextColor="#A39BFF"
        />
        <TextInput
          value={capacity}
          onChangeText={(userCapacity) => setCapacity(userCapacity)}
          style={styles.textInput}
          placeholder="Capacidade"
          placeholderTextColor="#A39BFF"
        />
        <TextInput
          value={yearVehicle}
          onChangeText={(userYearVehicle) => setYearVehicle(userYearVehicle)}
          style={styles.textInput}
          placeholder="Ano do veículo"
          placeholderTextColor="#A39BFF"
        />
      </>
    );
  };

  const navigation = useNavigation();

  const [checked, setChecked] = useState("CLIENTE");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [idCard, setIdCard] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [license, setLicense] = useState("");
  const [capacity, setCapacity] = useState("");
  const [yearVehicle, setYearVehicle] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [cep, setCep] = useState("");
  const [state, setState] = useState("");

  function userRegistration() {
    api
      .post("/user", {
        type: checked,
        name: userName,
        email: email,
        password: password,
        bornDate: birth,
        telephone: phone,
        legalDocument: idCard,
      })
      .then(function (response) {
        console.log(response);
        Alert.alert(
          "Usuário criado",
          "Agora você já pode fazer login na plataforma",
          [{ text: "Ok", onPress: () => navigation.navigate("Login") }]
        );
      })
      .catch(function (error) {
        console.error(error.response.data);
      });
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.imgBackground}
      />
      <View style={styles.secondContainer}>
        <Text style={styles.title}>Cadastro</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="PRESTADOR"
              onPress={() => setChecked("PRESTADOR")}
              status={checked === "PRESTADOR" ? "checked" : "unchecked"}
              color="#7364FF"
              uncheckedColor="#FFF"
            />
            <Text style={styles.registerText}>Caminhoneiro</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="CLIENTE"
              onPress={() => setChecked("CLIENTE")}
              status={checked === "CLIENTE" ? "checked" : "unchecked"}
              color="#7364FF"
              uncheckedColor="#FFF"
            />
            <Text style={styles.registerText}>Empresa</Text>
          </View>
        </View>

        <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder="Nome completo"
          style={styles.textInput}
          placeholderTextColor="#A39BFF"
          keyboardType="default"
          autoCapitalize="words"
          autoCorrect={false}
        />

        <TextInput
          value={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholder="E-mail"
          style={styles.textInput}
          placeholderTextColor="#A39BFF"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          value={phone}
          onChangeText={(userPhone) => setPhone(userPhone)}
          style={styles.textInput}
          placeholder="Telefone"
          keyboardType="phone-pad"
          placeholderTextColor="#A39BFF"
        />
        <TextInput
          value={birth}
          onChangeText={(userBirth) => setBirth(userBirth)}
          placeholder="Data de nascimento"
          style={styles.textInput}
          keyboardType="numeric"
          placeholderTextColor="#A39BFF"
        />
        <TextInput
          value={idCard}
          onChangeText={(userIdCard) => setIdCard(userIdCard)}
          style={styles.textInput}
          placeholder="N° Documento"
          placeholderTextColor="#A39BFF"
          keyboardType="numeric"
        />
        <TextInput
          value={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          style={styles.textInput}
          placeholder="Senha"
          placeholderTextColor="#A39BFF"
          secureTextEntry
        />
        <View
          style={{
            borderTopWidth: 1,
            borderColor: "#7364FF",
            width: "100%",
            marginTop: RFValue(20),
            marginBottom: RFValue(10),
          }}
        />
        {checked === "CLIENTE" ? <EnterpriseForm /> : <TruckerForm />}
        <View
          style={{
            borderTopWidth: 1,
            borderColor: "#7364FF",
            width: "100%",
            marginTop: RFValue(20),
            marginBottom: RFValue(10),
          }}
        />

        <Pressable style={styles.button} onPress={userRegistration}>
          <Text style={styles.text}>Cadastrar</Text>
        </Pressable>
        <Text style={styles.loginText}>
          Já tem uma conta?
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}
            Entrar
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E7FF",
  },
  imgBackground: {
    flex: 0.3,
    width: RFPercentage(51),
    height: RFPercentage(30),
  },
  secondContainer: {
    flex: 0.7,
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
  },
  secondTitle: {
    color: "#7364FF",
    fontFamily: "Signika_400Regular",
    fontSize: RFValue(20),
    paddingBottom: RFValue(20),
  },
  text: {
    color: "#FFF",
    fontFamily: "Signika_600SemiBold",
    fontSize: RFValue(20),
    textAlign: "center",
  },
  textInput: {
    width: "100%",
    height: RFValue(40),
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
  },
  loginText: {
    fontFamily: "Signika_600SemiBold",
    color: "#FFF",
    fontSize: RFValue(15),
    textAlign: "center",
    marginStart: RFValue(-30),
    marginTop: RFValue(10),
    marginBottom: RFValue(20),
  },
  registerText: {
    fontFamily: "Signika_600SemiBold",
    color: "#7364FF",
    fontSize: RFValue(15),
  },
});
