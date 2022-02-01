import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Deal from "../components/Deal";
import Colors from "../constants/Colors";

//TODO: call api
const goodDeals = [
  {
    id: 1,
    shop: "Shop1",
    address: "Address1",
    deal: "Poké bowls à 7.50 euros",
  },
  {
    id: 2,
    shop: "Shop2",
    address: "Address2",
    deal: "Poké bowls à 7.50 euros",
  },
  {
    id: 3,
    shop: "Shop3",
    address: "Address3",
    deal: "Poké bowls à 7.50 euros",
  },
];
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Les bons {"\n"}plans du jour</Text>
      </View>
      <FlatList
        data={goodDeals}
        renderItem={({ item }) => <Deal item={item} />}
        keyExtractor={(item) => String(item.id)}
        horizontal={true}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF",
    flex: 1,
  },
  titleContainer: {
    height: 222,
    backgroundColor: Colors.dark.background,
    borderBottomRightRadius: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFFF",
    fontWeight: "bold",
    fontSize: 45,
  },
});
