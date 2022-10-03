import { Image, StyleSheet, Text, View } from "react-native";

import font from "../res/font";
import palette from "../res/palette";
import dateFormatHelper from "../utils/dateFormatHelper";

function TabCard({ item }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.message}>{item.message}</Text>
        <Text
          style={styles.primary}
        >{`${item.recipient} rewarded by ${item.sender}`}</Text>
        <Text style={styles.secondary}>{dateFormatHelper(item.timeStamp)}</Text>
      </View>
    </View>
  );
}

export default TabCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 20,
    backgroundColor: palette.white,
    elevation: 4,
  },
  textContainer: {
    flex: 1,
    alignContent: "center",
    marginLeft: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  message: {
    color: palette.almostBlack,
  },
  primary: {
    marginTop: 5,
    fontSize: font.size.font13,
    color: palette.secondaryText,
  },
  secondary: {
    fontSize: font.size.font13,
    color: palette.secondaryText,
  },
});
