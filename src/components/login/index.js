import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Header from '../shared/header';

const FBSDK = require('react-native-fbsdk');
const { LoginButton, AccessToken, LoginManager } = FBSDK;

class LoginView extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: ''
    }
  }

  _FBLogin(navigate){
    LoginManager.logInWithReadPermissions(['public_profile']).then(
    function(result) {
      if (result.isCancelled) {
        alert('Login was cancelled');
      } else {
        AccessToken.getCurrentAccessToken().then((data) => {
          try{
            AsyncStorage.setItem('accessToken', data.accessToken);
          } catch (error){
            console.log('Error saving token', error)
          }
        });
        navigate('HomeView', {});
      }
    },
    function(error) {
      alert('Login failed with error: ' + error);
    }
  );
  }

  // _navigateToHomeView(){
  //     this.props.navigation.navigate('HomeView', {})
  // }

  render() {
    let {navigate} = this.props.navigation;
    return (
      <LinearGradient
        style={styles.mainContainer}
        locations={[0,0.8]}
        colors={['#040626', '#040626']}>

        <StatusBar hidden />
        <View style={styles.content}>
              <View style={{
                flex:2,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{
                  color: '#eb0b42',
                  fontSize: 70,
                  fontWeight: 'bold',
                  letterSpacing: -2,
                  backgroundColor: 'transparent'
                }}>SHRE</Text>
                <Text style={{
                  color: '#6e7291',
                  fontSize: 19,
                  fontWeight: 'normal',
                  letterSpacing: 0,
                  backgroundColor: 'transparent'
                }}>Connect with Peeps</Text>
              </View>
              <View style={{flex:2, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                <View style={{backgroundColor:'transparent', width:300}}>
                  <TouchableHighlight
                    onPress={()=> this._FBLogin(navigate)}
                    underlayColor={'transparent'}
                    activeOpacity={0.6}
                    >
                    <View
                      style={{height:80, width:300, backgroundColor: '#eb0b42',flexDirection:'column', justifyContent: 'center', alignItems: 'center', borderRadius: 50, borderBottomColor: '#b10d36', borderBottomWidth:1}}
                    >
                      <Text style={{color:'#fff', fontSize: 28, fontWeight: 'bold'}}>LOGIN</Text>
                    </View>
                  </TouchableHighlight>

                  <Text style={{
                    color: '#5b5f7e',
                    textAlign: 'center',
                    marginTop: 25,
                    fontSize: 13
                  }}>We use facebook to{"\n"}authenticate your identity.
                  </Text>
                  </View>
              </View>
              <View style={{flex: .25}}>
              <Text style={{
                color: '#5b5f7e',
                textAlign: 'center',
                marginTop: 15,
                fontSize: 12,
                backgroundColor: 'transparent'
              }}>Copyright 2017
              </Text>
              </View>
        </View>
      </LinearGradient>
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
