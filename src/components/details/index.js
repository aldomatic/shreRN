import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class DetailsView extends Component {

  render() {
    const { id } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text>{id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
