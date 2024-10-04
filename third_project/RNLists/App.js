import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={
            <View style={{ height: 32 }} />
          }
          ListEmptyComponent={
            <View style={styles.listEmptyContainer}>
              <Text style={styles.listEmpty}>No items found</Text>
            </View>
          }
          ListHeaderComponent={
            <Text style={styles.headerList}>Pokemons</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of list</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
    flex: 1
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  },
  listEmptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmpty: {
    fontSize: 40,
    textAlign: 'center',
  },
  headerList: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12
  }
});
