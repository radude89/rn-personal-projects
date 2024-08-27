import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet API</Text>
      <View 
        style={[
          styles.box,
          styles.lightBlueBox
        ]}
      >
        <Text>Light-blue box</Text>
      </View>
      
      <View 
        style={[
          styles.box,
          styles.lightGreenBox
        ]}
      >
        <Text>Light-green box</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'plum', padding: 60
  },
  box: {
    width: 100,
    height: 100,
    padding: 10
  },
  lightBlueBox: {
    backgroundColor: 'lightblue'
  },
  lightGreenBox: {
    backgroundColor: 'lightgreen'
  }
});