import { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image, 
  ScrollView, 
  Button, 
  Pressable, 
  Modal,
  ActivityIndicator,
  Alert
} from 'react-native'
import Greet from './components/Greet';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Greet name='Radu' />
      <ScrollView>
        <ActivityIndicator 
          size='large'
          color='pink'
        />
        <Button 
          title='Tap Me' 
          onPress={ () => setIsModalVisible(true) }
          color="midnightblue"
        />
        <Modal 
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          animationType='slide'
          presentationStyle='pageSheet'
        >
          <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
            <Text>Modal content</Text>
            <Button
              title='Close'
              color='black' 
              onPress={() => setIsModalVisible(false) }
            />
            <Button 
              title='Show Alert' 
              onPress={
                () => Alert.alert(
                  'Title', 
                  'Message',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel pressed')
                    },
                    {
                      text: 'OK',
                      onPress: () => console.log('OK pressed')
                    }
                  ]
                )
              } 
            />
          </View>
        </Modal>
        
        <Pressable onPress={() => console.log("Text pressed")}>
          <Text>
            <Text style={{ color: 'white' }}>Hello</Text>, Radu!
          </Text>
        </Pressable>
        
        <Image 
          source={{ uri: 'https://picsum.photos/200' }} 
          style={{ width: 100, height: 100 }} 
        />
        
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum tortor, mollis eget elit vel, pulvinar malesuada mi. Curabitur pretium elit non dui pulvinar pellentesque ultrices nec justo. Proin ante metus, auctor sed vestibulum sed, aliquam ac eros. Nullam vehicula urna vitae sem efficitur, in elementum diam blandit. Morbi ut auctor lorem. Nulla tristique, tortor consectetur efficitur faucibus, justo odio maximus dui, in placerat mauris elit id nisi. Aenean et nisi massa. Nullam a aliquet massa, suscipit porta ligula. Donec a semper sapien. Aliquam id quam sed tellus dignissim finibus. In hac habitasse platea dictumst.
Ut lacus nulla, laoreet sed aliquam eu, volutpat ut magna. Fusce vitae metus semper, molestie justo quis, mattis dui. Nulla eu tempus turpis. Aliquam erat volutpat. Cras euismod efficitur lacus lobortis eleifend. Fusce luctus euismod efficitur. Nulla facilisi.

Donec nec ligula vitae enim facilisis iaculis et sit amet ligula. Proin semper risus in odio rhoncus ornare. Mauris ac arcu justo. Ut tristique eros sapien, et condimentum nulla sagittis non. Mauris pretium, quam eu tristique molestie, magna mauris tincidunt dolor, vitae placerat lectus mauris quis tellus. Phasellus aliquam elit arcu, a varius enim pellentesque eget. Vivamus ut tortor vulputate, commodo justo a, pulvinar leo.

Praesent mollis justo eu arcu fermentum dignissim. Phasellus ac eros at nibh consequat molestie. Nullam hendrerit maximus scelerisque. Aliquam accumsan erat leo, non tristique massa laoreet eget. In at lectus vestibulum, eleifend urna ut, cursus mauris. Mauris eleifend et sapien dignissim feugiat. Proin id tellus eu arcu pellentesque rutrum a in nunc.

In eget luctus purus. Suspendisse eleifend, metus id efficitur cursus, purus nisi pretium diam, non hendrerit sapien metus vel ipsum. Sed vitae accumsan justo, sit amet tincidunt risus. Nulla felis libero, tempor sed ultrices ac, hendrerit et dui. Quisque ligula ante, egestas vitae auctor euismod, aliquam quis turpis. In neque felis, tristique dignissim ullamcorper et, rhoncus et sem. Proin nunc metus, feugiat a ultricies nec, sodales at lacus. Praesent finibus felis quis rhoncus vulputate. Donec libero purus, sagittis id tellus nec, varius placerat lorem. Fusce finibus viverra nisl id vestibulum. Vivamus ut semper purus, vel pellentesque sem. Fusce laoreet, nisl eu fringilla mattis, lorem eros tincidunt enim, sit amet elementum sapien diam sed tellus.
        </Text>
      </ScrollView>
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