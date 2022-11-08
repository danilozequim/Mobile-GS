import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { useAuth } from "../contexts/Auth";
import { api } from "../services/api";
import { RFValue } from "react-native-responsive-fontsize";

export default function HomeScreen() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={signOut}>
        <Text style={styles.textButton}>Sair</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7364FF",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(32),
    borderRadius: 10,
    backgroundColor: "#3792CB",
    marginTop: RFValue(20),
    width: "80%",
  },
  textButton: {
    fontFamily: "Caveat_700Bold",
    color: "#FFFF00",
    fontSize: RFValue(10),
    marginTop: RFValue(5),
    alignItems: "center",
  },
});
