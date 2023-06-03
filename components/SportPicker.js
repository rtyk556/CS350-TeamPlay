import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useEffect, useState } from "react";

// TODO: add more sports
export const sportList = [{ label: "SOCCER", value: "soccer" }];

export function SportPicker({ sport, setSport, style }) {
  const [isSportPickerOpen, setSportPickerOpen] = useState(false);
  const [sportItems, setSportItems] = useState(sportList);

  useEffect(() => {
    setSport(sportList[0]);
  });

  // FIXME: value not changing

  return (
    <View style={style}>
      <DropDownPicker
        open={isSportPickerOpen}
        value={sport}
        items={sportItems}
        setOpen={setSportPickerOpen}
        setValue={setSport}
        setItems={setSportItems}
      />
    </View>
  );
}
