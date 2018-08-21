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
  RkTheme,
  RkText,
  RkStyleSheet,
  RkChoice
} from 'react-native-ui-kitten';

RkTheme.setType('RkChoice', 'redCheckMarkSelected', {
  backgroundColor: 'transparent',
  inner: {
    tintColor: 'red',
  }
});

RkTheme.setType('RkChoice', 'magentaCyan', {
  inner: {
    tintColor: 'magenta',
  }
});

RkTheme.setType('RkChoice', 'magentaCyanSelected', {
  inner: {
    tintColor: 'cyan',
  }
});

RkTheme.setType('RkChoice', 'starSelected', {
  backgroundColor: 'transparent',
  inner: {
    imageSource: () => require('./asset/pic/Unknown.png'),
    tintColor: 'green'
  }
});


export default class App extends React.Component {
  render() {
    return (
      <View>
        <RkChoice rkType='redCheckMark'/>
<RkChoice selected rkType='posNeg magentaCyan'/>
<RkChoice disabled rkType='star'/>
<RkChoice disabled selected rkType='radio star'/>
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
