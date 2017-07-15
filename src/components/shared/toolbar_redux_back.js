/* @flow weak */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';

const ToolBarRedux = (props) => {
  return(
    <View>
      <StatusBar hidden/>
      <View>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}>{props.title}</Text>
          <Text style={styles.toolbarButton} onPress={() => props.nav.goBack()}>BACK</Text>
        </View>
      </View>
    </View>
    )
  };

export default ToolBarRedux;

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#eb0b42',
    paddingTop:15,
    paddingBottom:15,
    flexDirection: 'row',


    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  toolbarButton: {
    width:50,
    color:'#fff',
    textAlign:'center',
    marginTop:8,
    marginRight: 5,
    flex: .25,
    fontSize: 16,
    fontWeight: 'normal'
    },
  toolbarTitle: {
    color:'#fff',//db3a7c
    textAlign:'left',
    fontWeight: 'bold',
    fontSize: 28,
    flex: 1,
    marginLeft: 15
    }
});
