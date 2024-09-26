import { 
  StyleSheet, 
  Text,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import CustomButton from './components/CustomButton/CustomButton';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
          <CustomButton 
            title='Press me' 
            onPress={() => alert("Pressed!")} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'plum'
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS == 'android' ? 100 : 0
  },
  box: {
    padding: 20
  },
  text: {
    ...Platform.select({
      ios: {
        color: 'purple',
        fontSize: 24,
        fontStyle: 'italic'
      },
      android: {
        color: 'blue',
        fontSize: 38
      }
    }),
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
