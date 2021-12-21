import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { ilClassico } from './Map';

const renderItem = ({ item }) => (
  <View>
    <Text>{item.name}</Text>
  </View>
)

const keyExtractor = item => item.name

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={[{...ilClassico}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
