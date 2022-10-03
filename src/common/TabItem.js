import { FlatList } from "react-native";
import TabCard from "./TabCard";

function TabItem(prop) {
  const list = prop;

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <TabCard item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export default TabItem;
