import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import Data from "../res/dataFile";
import palette from "../res/palette";
import font from "../res/font";

const profileContainerHeight = Dimensions.get("screen").height / 7;
function ProfileContainer(prop) {
  const { newRewardAmount } = prop;
  const { imageUrl, fullName, rewardsReceived } = Data.userData;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text>
          Given <Text style={styles.amount}>${newRewardAmount}</Text> / Received{" "}
          <Text style={styles.amount}>${rewardsReceived}</Text>
        </Text>
      </View>
    </View>
  );
}

export default ProfileContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: palette.primaryBackground,
    height: profileContainerHeight,
  },
  fullName: {
    color: palette.almostBlack,
    fontSize: font.size.font16,
    fontWeight: font.weight.bold,
  },
  amount: {
    color: palette.almostBlack,
    fontSize: font.size.font13,
    fontWeight: font.weight.bold,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 20,
  },
});
