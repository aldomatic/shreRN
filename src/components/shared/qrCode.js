import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import QRCode from 'react-native-qrcode';

const QRCodeGen = () => {
  return (
    <QRCode
     value='aldomatic'
     size={220}
     bgColor='#040626'
     fgColor='#eb0b42' />
  );
}
export default QRCodeGen;

const styles = StyleSheet.create({});
