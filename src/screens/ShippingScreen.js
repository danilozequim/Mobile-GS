import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { useAuth } from "../contexts/Auth";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import OrderComponent from "../components/OrderComponent";
import { useNavigation } from "@react-navigation/native";

export default function ShippingScreen() {
  const { signOut } = useAuth();
  const navigation = useNavigation();

  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [cep, setCep] = useState("");
  const [state, setState] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>GetFretes</Text>
      <View style={styles.secondContainer}>
        <Text style={styles.secondTitle}>Pedido de Transporte</Text>

        <View
          style={{
            borderTopWidth: 1,
            borderColor: "#7364FF",
            width: "100%",
            marginTop: RFValue(5),
          }}
        />

        <Text style={styles.secondTitle}>Endereços</Text>
        <Text style={styles.text}>ORIGEM</Text>

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
            style={[styles.textInput, { width: "48%" }]}
            placeholder="Número"
            placeholderTextColor="#A39BFF"
          />
          <TextInput
            value={complement}
            onChangeText={(userComplement) => setComplement(userComplement)}
            style={[styles.textInput, { width: "48%" }]}
            placeholder="Complemento"
            placeholderTextColor="#A39BFF"
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            value={cep}
            onChangeText={(userCep) => setCep(userCep)}
            style={[styles.textInput, { width: "48%" }]}
            placeholder="CEP"
            placeholderTextColor="#A39BFF"
          />
          <TextInput
            value={state}
            onChangeText={(userState) => setState(userState)}
            style={[styles.textInput, { width: "48%" }]}
            placeholder="Estado"
            placeholderTextColor="#A39BFF"
          />
        </View>

        <Text style={styles.text}>DESTINO</Text>

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
            style={[styles.textInput, { width: "48%" }]}
            placeholder="Número"
            placeholderTextColor="#A39BFF"
          />
          <TextInput
            value={complement}
            onChangeText={(userComplement) => setComplement(userComplement)}
            style={[styles.textInput, { width: "48%" }]}
            placeholder="Complemento"
            placeholderTextColor="#A39BFF"
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            value={cep}
            onChangeText={(userCep) => setCep(userCep)}
            style={[styles.textInput, { width: "48%" }]}
            placeholder="CEP"
            placeholderTextColor="#A39BFF"
          />
          <TextInput
            value={state}
            onChangeText={(userState) => setState(userState)}
            style={[styles.textInput, { width: "48%" }]}
            placeholder="Estado"
            placeholderTextColor="#A39BFF"
          />
        </View>

        <View
          style={{
            borderTopWidth: 1,
            borderColor: "#7364FF",
            width: "100%",
            marginTop: RFValue(20),
          }}
        />

        <Text style={[styles.secondTitle, { marginBottom: RFValue(10) }]}>
          Resumo do Pedido
        </Text>

        <View style={styles.orderContainer}>
          <OrderComponent
            category={"Móveis"}
            subcategory={"Cadeiras"}
            quantity={"10"}
          />
          <View
            style={{
              borderTopWidth: 1,
              borderColor: "#7364FF",
              width: "100%",
            }}
          />
          <Text
            style={[
              styles.text,
              { alignSelf: "flex-end", paddingRight: RFValue(15) },
            ]}
          >
            Valor
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: RFValue(15),
            }}
          >
            <Text style={styles.text}>Frete:</Text>
            <Text style={styles.text}>10%</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: RFValue(15),
              marginBottom: RFValue(20),
            }}
          >
            <Text style={styles.text}>Total a pagar:</Text>
            <Text style={styles.text}>R$ 10,00</Text>
          </View>
        </View>

        <Pressable style={styles.button} onPress={""}>
          <Text style={styles.buttonText}>ACEITAR TRANSPORTE</Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            { backgroundColor: "#FFF", borderColor: "#7364FF", borderWidth: 1 },
          ]}
          onPress={""}
        >
          <Text style={[styles.buttonText, { color: "#7364FF" }]}>
            RECUSAR TRANSPORTE
          </Text>
        </Pressable>

        <View
          style={{
            borderTopWidth: 1,
            borderColor: "#7364FF",
            width: "100%",
            marginTop: RFValue(20),
          }}
        />

        <Pressable
          style={[styles.button, { marginBottom: RFValue(20) }]}
          onPress={() => navigation.navigate("List")}
        >
          <Text style={styles.buttonText}>Listar Pedidos</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E7FF",
  },
  title: {
    fontFamily: "Caveat_700Bold",
    color: "#FFC30D",
    fontSize: RFValue(52),
    textAlign: "center",
    paddingTop: RFPercentage(4),
    paddingBottom: RFPercentage(2),
  },
  secondContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: RFPercentage(5),
    backgroundColor: "#CECCFF",
    borderTopRightRadius: RFValue(20),
    borderTopLeftRadius: RFValue(20),
  },
  secondTitle: {
    color: "#7364FF",
    fontFamily: "Signika_600SemiBold",
    fontSize: RFValue(26),
    marginTop: RFValue(10),
    alignSelf: "center",
  },
  textInput: {
    width: "100%",
    height: RFValue(36),
    textAlign: "left",
    paddingLeft: RFValue(20),
    borderRadius: RFValue(20),
    marginTop: RFValue(10),
    fontSize: RFValue(16),
    backgroundColor: "#E8E7FF",
    fontFamily: "Signika_600SemiBold",
  },
  text: {
    color: "#7364FF",
    fontFamily: "Signika_600SemiBold",
    fontSize: RFValue(20),
    marginTop: RFValue(10),
    alignSelf: "flex-start",
  },
  button: {
    width: "100%",
    height: RFPercentage(6),
    marginHorizontal: "auto",
    backgroundColor: "#7364FF",
    borderRadius: RFValue(30),
    justifyContent: "center",
    marginTop: RFValue(10),
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "Signika_600SemiBold",
    fontSize: RFValue(20),
    textAlign: "center",
  },
  orderContainer: {
    backgroundColor: "#E8E7FF",
    width: "100%",
    borderRadius: 20,
  },
});
