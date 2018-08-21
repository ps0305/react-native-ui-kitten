import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RkComponent,Image,RkText} from 'react-native-ui-kitten';


export default class Avatar extends RkComponent {
  componentName = 'Avatar';

    constructor(props) {
      super(props);
    }
  
   render() {
  
      let description = this.props.description ? 
        (<RkText>{this.props.description}</RkText>) : 
        (<View/>);
  
      return (
        <View>
          <Image source={this.props.source}/>
          <View>
            <RkText>{this.props.name}</RkText>
            {description}
          </View>
        </View>
      )
    }
  }