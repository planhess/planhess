import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopDetails from "../components/ShopDetails";
import Feed from "../components/ShopList";

const Stack = createNativeStackNavigator();
const options = {
  headerStyle: {
    backgroundColor: "#FFF",
  },
  title: "",
  headerShown: false,
};
export default function ShopsListScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} options={options} />
      <Stack.Screen name="ShopDetails" component={ShopDetails} />
    </Stack.Navigator>
  );
}
