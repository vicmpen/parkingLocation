import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ParkingLocationCell(props) {
  const {
    onPressCB,
    location: {
      index,
      item,
      item: { lat, lang }
    }
  } = props;
  return (
    <TouchableOpacity style={styles.cell} onPress={() => onPressCB(item)}>
      <Text style={{ fontSize: 24 }}>
        {lat} / {lang}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    alignItems: "center"
  }
});
