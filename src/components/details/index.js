import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  requireNativeComponent,
  processColor
} from 'react-native';

// import LinearGradient from '../shared/linearGradient';
let RNLinearGradient = requireNativeComponent('RNLinearGradientSwift', null);

export default class DetailsView extends Component {

  render() {
    const { id } = this.props.navigation.state.params
    return (
        <RNLinearGradient
          style={styles.gradient}
          locations={[0, 1.0]}
          colors={[processColor('#5ED2A0'), processColor('#339CB1')]}>
            <Text style={{backgroundColor:'transparent'}}>{id}</Text>
          </RNLinearGradient>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    gradient: {
    flex: 1,
   }
});
