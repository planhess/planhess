import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Deal from "../components/Deal/Deal";
import Colors from "../constants/Colors";

interface MockDeal {
  idshop: number;
  shop: string;
  shopAddress: string;
  dealDescription: string;
}
//TODO: call api
const goodDeals: Array<MockDeal> = [
  {
    idshop: 1,
    shop: "Shop1",
    shopAddress: "Address1",
    dealDescription: "Poké bowls à 7.50 euros",
  },
  {
    idshop: 2,
    shop: "Shop2",
    shopAddress: "Address2",
    dealDescription: "Poké bowls à 7.50 euros",
  },
  {
    idshop: 3,
    shop: "Shop3",
    shopAddress: "Address3",
    dealDescription: "Poké bowls à 7.50 euros",
  },
];

const keyExtractor = ({ idshop }: MockDeal) => String(idshop);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Les bons {"\n"}plans du jour</Text>
      </View>
      <FlatList
        data={goodDeals}
        renderItem={({ item }) => <Deal item={item} />}
        keyExtractor={(item) => String(item.idshop)}
        horizontal
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
