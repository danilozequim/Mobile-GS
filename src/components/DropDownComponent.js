import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export default function DropDownComponent({ itemsN }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={itemsN ? itemsN : items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      autoScroll={true}
      disableBorderRadius={true}
      style={{
        backgroundColor: "#E8E7FF",
        borderRadius: 30,
        borderWidth: 0,
        paddingLeft: 20,
      }}
      labelStyle={{
        fontFamily: "Signika_600SemiBold",
        color: "#A39BFF",
        fontSize: RFValue(16),
      }}
      textStyle={{
        fontSize: RFValue(16),
        color: "#A39BFF",
        fontFamily: "Signika_600SemiBold",
      }}
      placeholder="Escolha um item"
      arrowIconStyle={{
        marginRight: RFValue(10),
        color: "red",
      }}
      dropDownContainerStyle={{
        backgroundColor: "#E8E7FF",
        borderColor: "#7364FF",
        borderRadius: 30,
        height: RFValue(36)
      }}
    />
  );
}
