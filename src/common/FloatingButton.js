import { Animated, StyleSheet, TouchableOpacity } from "react-native";

import palette from "../res/palette";

function FloatingButton(props) {
  const { onButtonPress, icon } = props;

  const buttonPressed = () => {
    onButtonPress();
  };

  return (
    <TouchableOpacity onPress={buttonPressed}>
      <Animated.View style={styles.button}>{icon}</Animated.View>
    </TouchableOpacity>
  );
}

export default FloatingButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: 60,
    height: 50,
    bottom: 20,
    right: 20,
    borderRadius: 28,
    alignItems: "center",
    backgroundColor: palette.black,
    elevation: 5,
    shadowColor: palette.black,
  },
});
