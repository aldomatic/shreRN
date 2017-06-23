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
     size={200}
     bgColor='#195865'
     fgColor='#72e4b3' />
  );
}
export default QRCodeGen;

const styles = StyleSheet.create({});
