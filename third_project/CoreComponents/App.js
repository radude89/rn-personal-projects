import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={{ color: 'white' }}>Hello</Text>, Radu!
      </Text>
        <View style={{ width: 100, height: 100, backgroundColor: 'lightblue' }} />
        <Image 
          source={{ uri: 'https://picsum.photos/200' }} 
          style={{ width: 100, height: 100 }} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});