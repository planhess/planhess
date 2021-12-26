import { Image, StyleSheet, Dimensions } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

// bxl
const initialRegion = {
  latitude: 50.85034,
  longitude: 4.35171,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export const ilClassico = {
  id: 1,
  coordinates: {
    latitude: 50.82306517540965,
    longitude: 4.380942028807865,
  },
  name: "My Tannour",
  description: "Une pizza achetee, une offerte!",
};

export default function Map({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <MapView initialRegion={initialRegion} style={styles.map}>
        <Marker
          coordinate={ilClassico.coordinates}
          title={ilClassico.name}
          description={ilClassico.description}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 32,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
