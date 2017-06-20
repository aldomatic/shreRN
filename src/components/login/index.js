import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  TouchableHighlight
} from 'react-native';

import Header from '../shared/header';

class LoginView extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: ''
    }
  }

  render() {
    let {navigate} = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <StatusBar hidden />
        <View style={styles.content}>
              <View style={{
                flex:2,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{
                  color: '#DBBFB3',
                  fontSize: 30,
                  fontWeight: 'bold'
                }}>LOGO</Text>
              </View>
              <View style={{flex:2, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                <View style={{backgroundColor:'transparent', width:300}}>
                  {/*<TextInput
                    style={{height: 50, width:300, borderColor: 'white', borderWidth: 0, backgroundColor: '#530a19', paddingLeft: 10, paddingRight: 10, color:'white'}}
                    onChangeText={(text) => console.log(text)}
                    placeholder="Email"
                    placeholderTextColor="#df4f6d"
                  />
                  <TextInput
                    style={{height: \80, width:300, borderColor: 'white', borderWidth: 0, backgroundColor: '#530a19', paddingLeft: 10, paddingRight: 10, color:'white', marginTop:10}}
                    onChangeText={(text) => console.log(text)}
                    placeholder="Password"
                    placeholderTextColor="#df4f6d"
                  />*/}

                  <TouchableHighlight
                    onPress={()=> navigate('HomeView')}
                    underlayColor={'#cb5043'}
                    activeOpacity={0.6}
                    >
                    <View
                      style={{height:75, width:300, backgroundColor: '#DB5D4F',flexDirection:'column', justifyContent: 'center', alignItems: 'center', borderRadius: 0}}
                    >
                      <Text style={{color:'#fff', fontSize: 24, fontWeight: 'bold'}}>SIGN IN</Text>
                    </View>
                  </TouchableHighlight>



                  <Text style={{
                    color: '#566a90',
                    textAlign: 'center',
                    marginTop: 15,
                    fontSize: 14
                  }}>We use facebook to authenticate your identity.
                  </Text>
                  </View>
              </View>
              <View style={{flex: .25}}>
              <Text style={{
                color: '#566a90',
                textAlign: 'center',
                marginTop: 15,
                fontSize: 12
              }}>Copyright 2017
              </Text>
              </View>
        </View>
      </View>
    );
  }
}
export default LoginView;


const styles = StyleSheet.create({
  mainContainer:{
      flex:1
    },
    content:{
      backgroundColor:'#1e293d',
      flex:1
    }
});
