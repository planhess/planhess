import { Image, View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const extractNumber = (deal: string): string => {
  if (!deal) throw new Error("deal parameter in extractNumber not found");
  const numberArray: RegExpMatchArray | null = deal.match(/\d./g);
  if (numberArray) return numberArray.join("");
  else return deal;
};

const Deal = ({ item }) => {
  const DealFormat = (): JSX.Element => {
    const array = item.deal.split(" ");
    const indexOfPrice = array.indexOf(extractNumber(item.deal));

    return (
      <Text>
        {array.map((elem: string, i: number) => {
          if (indexOfPrice === i) {
            return <Text style={styles.priceFormat}>{elem} </Text>;
          }
          return <Text>{elem} </Text>;
        })}
      </Text>
    );
  };

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
      <Text>{item.shop}</Text>
      <Text>Adresse: {item.address}</Text>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DealFormat />
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
  priceFormat: {
    color: "red",
  },
});
export default Deal;
