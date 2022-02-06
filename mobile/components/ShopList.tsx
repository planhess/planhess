import { GET_ALL_SHOPS } from "../graphql/query";
import { useQuery } from "@apollo/client";
import { Text, View } from "../components/Themed";
import Rating from "./Rating";
import {
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import { useState } from "react";
import client from "../graphql/config";
import { SafeAreaView } from "react-native-safe-area-context";

const renderItem = ({ item }: { item: Shop }, navigation: any): JSX.Element => {
  return (
    <>
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ShopDetails", {
              item,
            })
          }
        >
          <Image
            style={styles.image}
            source={{
              uri: "https://snm-nl-contentmedia.s3-eu-west-1.amazonaws.com/cookloveshare-wordpress/app/uploads/2018/01/10171030/quelles-sont-les-5-choses-les-plus-sales-dans-un-restaurant.jpg",
            }}
            resizeMode="cover"
            onLoad={() => {}} //TODO: Implement a loader
          />
          {/* <Text
          > */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Rating rating={3} size={19} color={Colors.red.color} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.separator}></View>
    </>
  );
};

const keyExtractor = (item: Shop): string => String(item.idshop);

const Feed = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_ALL_SHOPS);
  const [isRefreshing, setIsRefresh] = useState<boolean>(false);

  const onRefresh = async () => {
    setIsRefresh(true);
    await client.refetchQueries({ include: [GET_ALL_SHOPS] });
    setIsRefresh(false);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (data) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data.getAllShops}
          renderItem={(item) => renderItem(item, navigation)}
          keyExtractor={keyExtractor}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
        />
      </SafeAreaView>
    );
  }
  return null;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    height: 300,
    overflow: "hidden",
  },
  descriptionContainer: {
    padding: 15,
    backgroundColor: "#FFFF",
  },
  description: {
    color: Colors.dark.background,
  },
  titleContainer: {
    backgroundColor: "#FFFF",
    width: Dimensions.get("window").width,
    display: "flex",
    flexDirection: "row",
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    flexBasis: "50%",
    color: Colors.dark.background,
    fontFamily: "prompt-extraBold",
  },
  separator: {
    height: 10,
    backgroundColor: Colors.red.color,
  },
  image: {
    height: 120,
  },
});

export default Feed;
