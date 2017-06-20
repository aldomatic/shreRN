import React, { Component } from 'react';
import {
    View, Text, StyleSheet
}
from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',
        backgroundColor: '#EAEAEA',
    },
    text: {
        fontSize: 13,
    },
});

const SectionHeader = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>Test Header</Text>
  </View>
);

export default SectionHeader;
