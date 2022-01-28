import { StyleSheet } from "react-native";
import { View, Text } from "./Themed";

type ShopDetailsProps = {
  route: {
    params: {
      item: Shop;
    };
  };
};

function ShopDetails({ route }: ShopDetailsProps): JSX.Element {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ShopDetails;
