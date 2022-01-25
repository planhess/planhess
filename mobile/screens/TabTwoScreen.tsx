import { useQuery } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ShopDetails from "../components/ShopDetails";
import { Text, View } from "../components/Themed";
import { GET_ALL_SHOPS } from "../graphql/query";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator();

// TODO: use correct type
interface Item {
  id: string;
  name: string;
}
const keyExtractor = (item: Item): string => item.id;

function Feed({ navigation }: { navigation: NavigationProps }): JSX.Element {
  const { loading, error, data } = useQuery(GET_ALL_SHOPS);
  const renderItem = ({ item }: { item: Item }) => (
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
  );
  if (data) {
    return (
      <View style={styles.container}>
        <FlatList
          data={data.getAllShops}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    );
  }
  return null;
}

export default function TabTwoScreen(): JSX.Element {
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
  itemContainer: {
    padding: 20,
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
