import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopDetails from "../components/ShopDetails";
import Feed from "../components/ShopList";

const Stack = createNativeStackNavigator();

export default function ShopsListScreen() {
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
