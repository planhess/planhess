import { createNativeStackNavigator, NavigationProps } from '@react-navigation/native-stack'
import { FlatList, StyleSheet } from 'react-native'
import ShopDetails from '../components/ShopDetails'
import { Text, View } from '../components/Themed'
import { ilClassico } from './Map'

const Stack = createNativeStackNavigator()

// TODO: use correct type
interface Item {
  id: string
  name: string
}
const keyExtractor = (item: Item): string => item.id

function Feed ({ navigation }: { navigation: NavigationProps }): JSX.Element {
  const renderItem = ({ item }: { item: Item }): JSX.Element => (
    <View>
      <Text
        onPress={() => navigation.navigate('ShopDetails', {
          item
        })}
      >
        {item.name}
      </Text>
    </View>
  )
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={[{ ...ilClassico }]}
      />
    </View>
  )
}

export default function TabTwoScreen (): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Feed'
        component={Feed}
        options={{
          title: 'Liste'
        }}
      />
      <Stack.Screen name='ShopDetails' component={ShopDetails} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
