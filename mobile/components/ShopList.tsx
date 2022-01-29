import { GET_ALL_SHOPS } from "../graphql/query";
import { useQuery } from "@apollo/client";
import { Text, View } from "../components/Themed";
import { FlatList, StyleSheet, Dimensions, Image } from "react-native";
import Colors from "../constants/Colors";

const Feed = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_ALL_SHOPS);
  const renderItem = ({ item, index }: { item: Shop; index: number }) => {
    return (
      <>
        <View style={styles.itemContainer}>
          <Image
            style={{ height: 100 }}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            resizeMode="cover"
          />
          <Text
            onPress={() =>
              navigation.navigate("ShopDetails", {
                item,
              })
            }
          >
            <Text style={styles.text}>{item.name}</Text>
            {"\n"}
            <Text style={styles.text}>{item.description}</Text>
          </Text>
        </View>
        {index % 2 === 0 && <View style={styles.separator}></View>}
      </>
    );
  };

  loading && <View>Loading...</View>;
  error && <View>Error: {error}</View>;

  if (data) {
    return (
      <View style={styles.container}>
        <FlatList
          data={data.getAllShops}
          renderItem={renderItem}
          keyExtractor={(item: Shop): string => item.idshop.toString()}
        />
      </View>
    );
  }
  return null;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.dark.background,
  },
  itemContainer: {
    backgroundColor: "#FFFF",
    flex: 1,
    height: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    height: 10,
    backgroundColor: Colors.red.color,
  },
});

export default Feed;
