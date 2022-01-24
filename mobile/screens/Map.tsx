import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { View } from "../components/Themed";
import { gql, useQuery } from "@apollo/client";

// bxl
const initialRegion = {
  latitude: 50.85034,
  longitude: 4.35171,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const GET_ALL_SHOPS = gql`
  query GetAllShops {
    getAllShops {
      idshop
      name
      description
      location
      idcategory
      coordinates
    }
  }
`;

export const ilClassico = {
  id: 1,
  coordinates: {
    latitude: 50.82306517540965,
    longitude: 4.380942028807865,
  },
  name: "My Tannour",
  description: "Une pizza achetee, une offerte!",
};

export default function Map(): JSX.Element {
  const { loading, error, data } = useQuery(GET_ALL_SHOPS);
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
