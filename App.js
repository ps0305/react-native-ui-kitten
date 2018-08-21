import React from 'react';
import {
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet
} from 'react-native-ui-kitten';


let accent = '#ed1c4d';



export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <RkCard>
  <View rkCardHeader>
    <Text>Header</Text>
  </View>
  <Image rkCardImg source={require('./asset/pic/Unknown.png')}/>
  <View rkCardContent>
    <Text> quick brown fox jumps over the lazy dog</Text>
  </View>
  <View rkCardFooter>
    <Text>Footer</Text>
  </View>
</RkCard>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
