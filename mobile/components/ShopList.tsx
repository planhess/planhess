import { GET_ALL_SHOPS } from "../graphql/query";
import { useQuery } from "@apollo/client";
import { Text, View } from "../components/Themed";
import { FlatList, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Feed = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_ALL_SHOPS);
  const renderItem = ({ item, index }) => {
    return (
      <>
        <View style={styles.itemContainer}>
          <Text
            onPress={() =>
              navigation.navigate("ShopDetails", {
                item,
              })
            }
          >
            {item.name}
          </Text>
        </View>
        {index % 2 === 0 && <View style={styles.separator}></View>}
      </>
    );
  };

  if (data) {
    return (
      <View style={styles.container}>
        <FlatList
          data={data.getAllShops}
          renderItem={renderItem}
          keyExtractor={(item) => item.idshop}
        />
      </View>
    );
  }
  return null;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
  },
  itemContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: Colors.red.color,
  },
});

export default Feed;
