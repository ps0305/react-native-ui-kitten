import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RkButton,RkTheme} from 'react-native-ui-kitten';

let accent = '#ed1c4d';

RkTheme.setType('RkButton', 'accent', {
  container: {
    backgroundColor: accent
  },
  content: {
    color: 'white'
  },
  
});

let Values = {
  fontSize: 15
};
RkTheme.setTheme({
  fonts: {
    sizes: {
      base: Values.fontSize, 
      small: Values.fontSize * 0.8,
      medium: Values.fontSize,
      large: Values.fontSize * 1.2,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: RkTheme.current.colors.success}}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <RkButton rkType='outline small'>
        Say Hello</RkButton>
        <RkButton rkType='accent'>
        Say Hello</RkButton>
       

      </View>
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
