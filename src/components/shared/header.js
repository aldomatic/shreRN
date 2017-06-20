import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Header = () => {
    return (
      <View style={styles.toolbar}>
        <Text style={styles.toolbarTitle}>SHRE</Text>
      </View>
    );
}
export default Header;

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#1e293d', //91112b
    paddingTop:20,
    paddingBottom:20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  toolbarTitle: {
    color:'#df4f6d',
    fontWeight: 'bold',
    fontSize: 35,
    }
});
