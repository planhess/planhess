import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatList, StyleSheet } from "react-native";
import ShopDetails from "../components/ShopDetails";
import { Text, View } from "../components/Themed";
import { RootStackParamList } from "../types";
import { ilClassico } from "./Map";

const Stack = createNativeStackNavigator();

const keyExtractor = (item) => item.id;

const Feed = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View>
      <Text
        onPress={() =>
          navigation.navigate("ShopDetails", {
            item: item,
          })
        }
      >
        {item.name}
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={[{ ...ilClassico }]}
      />
    </View>
  );
};

export default function TabTwoScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          title: "Liste",
        }}
      />
      <Stack.Screen name="ShopDetails" component={ShopDetails} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
