import { StyleSheet, Text, View } from "react-native";
import font from "../src/res/font";
import palette from "../src/res/palette";

export const CloseIcon = () => {
  return (
    <View style={{ transform: [{ rotate: "45deg" }] }}>
      <Text style={Styles.icon}>+</Text>
    </View>
  );
};

export const PlusIcon = () => {
  return (
    <View>
      <Text style={Styles.icon}>+</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  icon: {
    fontSize: font.size.font34,
    color: palette.white,
    alignItems: "center",
    alignSelf: "center",
    fontWeight: font.weight.low,
  },
});
