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
     bgColor='#1e293d'
     fgColor='#DB5D4F' />
  );
}
export default QRCodeGen;

const styles = StyleSheet.create({});
