import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";

import TabItem from "../common/TabItem";
import font from "../res/font";
import palette from "../res/palette";
import strings from "../res/strings";

const Tab = createMaterialTopTabNavigator();

function TabsHomeScreen(props) {
  const { feedData, myRewardData } = props;
  function FeedTab() {
    return TabItem(feedData.reverse());
  }
  function MyRewardsTab() {
    return TabItem(myRewardData.reverse());
  }
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: palette.selectTabFont,
        tabBarInactiveTintColor: palette.almostBlack,
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          height: "100%",
        },
        tabBarLabelStyle: {
          fontSize: font.size.font15,
          fontWeight: font.weight.semi,

          textTransform: "none",
        },
        tabBarStyle: {
          backgroundColor: palette.grey,
          elevation: 0,
        },
      }}
      style={styles.container}
    >
      <Tab.Screen
        name="Feed"
        component={FeedTab}
        options={{ tabBarLabel: strings.tabs.tabOne }}
      />

      <Tab.Screen
        name="My Rewards"
        component={MyRewardsTab}
        options={{ tabBarLabel: strings.tabs.tabTwo }}
      />
    </Tab.Navigator>
  );
}

export default TabsHomeScreen;

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 14,
    shadowColor: palette.shadowColor1,
  },
});
