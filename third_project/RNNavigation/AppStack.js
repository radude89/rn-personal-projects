import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, CreateNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { Pressable } from 'react-native';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{ 
          headerShown: true,
          headerStyle: {
            backgroundColor: '#6a51ae'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          contentStyle: {
            backgroundColor: '#e8e4f3'
          },
          headerRight: () => (
            <Pressable 
              onPress={() => alert('Menu pressed')}
            >
              <Text style={{ color: '#fff', fontSize: 16}}>Menu</Text>
            </Pressable>
          ),
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ 
            title: 'Welcome Home',
          }}
        />
        <Stack.Screen 
          name="About"
          component={AboutScreen} 
          initialParams={{ name: 'Guest' }}
          // options={({ route }) => ({
          //   title: route.params.name,
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}