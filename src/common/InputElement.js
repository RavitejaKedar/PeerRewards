import { Text, View } from "react-native";
import { StyleSheet, TextInput } from "react-native";

import font from "../res/font";
import palette from "../res/palette";

const InputElement = (prop) => {
  const {
    value,
    returnValue,
    inputHeight,
    type,
    label,
    numberOfLines,
    isMultiline,
    isValid,
  } = prop.props;
  const onChange = (evnt) => {
    returnValue(evnt);
  };

  const statusColor = isValid ? palette.gold : palette.red;

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: statusColor }]}>{label}</Text>
      <TextInput
        multiline={isMultiline}
        editable
        numberOfLines={numberOfLines}
        style={[
          styles.input,
          { height: inputHeight, borderColor: statusColor },
        ]}
        onChangeText={onChange}
        value={value}
        keyboardType={type}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    color: palette.white,
    padding: 5,
    marginTop: 5,
  },
  label: {
    fontSize: font.size.font14,
  },
});

export default InputElement;
