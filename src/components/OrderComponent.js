import * as React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";

const OrderComponent = ({ category, subcategory, quantity }) => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title textStyle={styles.title}>Categoria</DataTable.Title>
        <DataTable.Title textStyle={styles.title}>Subcategoria</DataTable.Title>
        <DataTable.Title textStyle={styles.title}>Peso</DataTable.Title>
        <DataTable.Title textStyle={styles.title}>Quantidade</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell textStyle={styles.text}>{category}</DataTable.Cell>
        <DataTable.Cell textStyle={styles.text}>{subcategory}</DataTable.Cell>
        <DataTable.Cell textStyle={styles.text}>{subcategory}</DataTable.Cell>
        <DataTable.Cell textStyle={styles.text}>{quantity}</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#7364FF",
    fontFamily: "Signika_600SemiBold",
    fontSize: RFValue(14),
  },
  text: {
    color: "#A39BFF",
    fontFamily: "Signika_400Regular",
    fontSize: RFValue(14),
  },
});

export default OrderComponent;