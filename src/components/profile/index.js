import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ToolBar from '../shared/toolbar';
import Menu from '../shared/menu';

export default class ProfileView extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Menu nav={this.props.navigation} />
        <ToolBar title="PROFILE" />
        <View style={styles.content}>
            <Text>Profile View</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
      flex:1
    },
    content:{
      backgroundColor:'#221F2A',
      flex:1
    }
});
