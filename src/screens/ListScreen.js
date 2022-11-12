import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { useAuth } from "../contexts/Auth";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import OrderComponent from "../components/OrderComponent";
import { useNavigation } from "@react-navigation/native";

export default function ListScreen() {
  const { signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>GetFretes</Text>
      <View style={styles.secondContainer}>
        <Text style={styles.secondTitle}>Meus Pedidos</Text>

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
              marginVertical: RFValue(20)
            }}
          />
        </View>
      </View>
      <Pressable onPress={signOut} style={styles.button}>
        <Text style={styles.buttonText}>Sair</Text>
      </Pressable>
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
  text: {
    color: "#7364FF",
    fontFamily: "Signika_600SemiBold",
    fontSize: RFValue(20),
    marginTop: RFValue(10),
    alignSelf: "flex-start",
  },
  orderContainer: {
    backgroundColor: "#E8E7FF",
    width: "100%",
    borderRadius: 20,
    paddingHorizontal: RFPercentage(5),
  },
  button: {
    width: "80%",
    height: RFPercentage(6),
    marginHorizontal: "auto",
    backgroundColor: "#7364FF",
    borderRadius: RFValue(30),
    justifyContent: "center",
    marginTop: RFValue(10),
    marginBottom: RFValue(20),
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "Signika_600SemiBold",
    fontSize: RFValue(20),
    textAlign: "center",
  },
});
