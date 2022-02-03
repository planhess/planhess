import { Image, View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const extractNumber = (deal: string): string => {
  const numberArray: RegExpMatchArray | null = deal.match(/\d./g);
  return numberArray && numberArray.length ? numberArray.join("") : deal;
};

const DealFormat = ({ deal }: { deal: string }): JSX.Element => {
  const dealDescriptionToArray = deal.split(" ");
  const indexOfPrice = dealDescriptionToArray.indexOf(extractNumber(deal));
  //TODO: Modify the key
  return (
    <Text>
      {dealDescriptionToArray.map((elem: string, i: number) => {
        if (indexOfPrice === i) {
          return (
            <Text key={i} style={styles.priceFormat}>
              {elem}{" "}
            </Text>
          );
        }
        return <Text key={i}>{elem} </Text>;
      })}
    </Text>
  );
};

// Type
const Deal = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://snm-nl-contentmedia.s3-eu-west-1.amazonaws.com/cookloveshare-wordpress/app/uploads/2018/01/10171030/quelles-sont-les-5-choses-les-plus-sales-dans-un-restaurant.jpg",
        }}
        resizeMode="cover"
        onLoad={() => {}} //TODO: Implement a loader
      />
      <Text>{item.idshop}</Text>
      <Text>Adresse: {item.shopAddress}</Text>
      <View>
        <DealFormat deal={item.dealDescription} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.dark.background,
    borderWidth: 1,
    height: 350,
    width: 250,
    margin: 50,
    marginRight: 0,
  },
  image: {
    height: 120,
  },
  dealContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  priceFormat: {
    color: "red",
  },
});
export default Deal;
