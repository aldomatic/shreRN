import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  TouchableHighlight,
  requireNativeComponent,
  processColor
} from 'react-native';

import Header from '../shared/header';

let RNLinearGradient = requireNativeComponent('RNLinearGradientSwift', null);

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
      <RNLinearGradient
        style={styles.mainContainer}
        locations={[0, 1.0]}
        colors={[processColor('#5ED2A0'), processColor('#339CB1')]}>

        <StatusBar hidden />
        <View style={styles.content}>
              <View style={{
                flex:2,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{
                  color: '#2B6059',
                  fontSize: 50,
                  fontWeight: 'bold',
                  backgroundColor: 'transparent'
                }}></Text>
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
                    underlayColor={'transparent'}
                    activeOpacity={0.6}
                    >
                    <View
                      style={{height:70, width:300, backgroundColor: '#195865',flexDirection:'column', justifyContent: 'center', alignItems: 'center', borderRadius: 50, borderBottomColor: '#154e59', borderBottomWidth:1}}
                    >
                      <Text style={{color:'#fff', fontSize: 24, fontWeight: 'bold'}}>Facebook Login</Text>
                    </View>
                  </TouchableHighlight>



                  <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 15,
                    fontSize: 14
                  }}>We use facebook to authenticate your identity.
                  </Text>
                  </View>
              </View>
              <View style={{flex: .25}}>
              <Text style={{
                color: '#fff',
                textAlign: 'center',
                marginTop: 15,
                fontSize: 12,
                backgroundColor: 'transparent'
              }}>Copyright 2017
              </Text>
              </View>
        </View>
      </RNLinearGradient>
    );
  }
}
export default LoginView;


const styles = StyleSheet.create({
  mainContainer:{
      flex:1
    },
    content:{
      flex:1
    }
});
