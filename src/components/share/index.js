import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import QRCode from 'react-native-qrcode';

import ToolBar from '../shared/toolbar';
import Menu from '../shared/menu';

export default class ShareView extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Menu nav={this.props.navigation} />
        <ToolBar title="SHARE" />
        <View style={styles.content}>
          <QRCode
           value='aldomatic'
           size={150}
           bgColor='#221F2A'
           fgColor='#DB5D4F'/>
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
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});
