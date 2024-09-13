import { StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 340,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red'
  },
});
