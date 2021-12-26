import { View, Text } from "./Themed";
import { StyleSheet } from "react-native";
const ShopDetails = ({ route }): JSX.Element => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ShopDetails;
