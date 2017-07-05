/* @flow weak */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ToolbarRedux = ({}) => (
  render(
    <View style={styles.container}>
      <Text>ToolbarRedux</Text>
    </View>
  )
);

export default ToolbarRedux;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
