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
const { LoginButton, AccessToken } = FBSDK;

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
      <LinearGradient
        style={styles.mainContainer}
        locations={[0,0.8]}
        colors={['#5ED2A0', '#339CB1']}>

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

                  {/*}<TouchableHighlight
                    onPress={()=> navigate('HomeView')}
                    underlayColor={'transparent'}
                    activeOpacity={0.6}
                    >
                    <View
                      style={{height:70, width:300, backgroundColor: '#195865',flexDirection:'column', justifyContent: 'center', alignItems: 'center', borderRadius: 50, borderBottomColor: '#154e59', borderBottomWidth:1}}
                    >
                      <Text style={{color:'#fff', fontSize: 24, fontWeight: 'bold'}}>Facebook Login</Text>
                    </View>
                  </TouchableHighlight>*/}

                  <LoginButton
                   readPermissions={["public_profile"]}
                   onLoginFinished={
                     (error, result) => {
                       if (error) {
                         alert("Login failed with error: " + result.error);
                       } else if (result.isCancelled) {
                         alert("Login was cancelled");
                       } else {
                         AccessToken.getCurrentAccessToken().then((data) => {
                           try{
                             AsyncStorage.setItem('accessToken', data.accessToken)
                           } catch (error){
                             console.log('Error saving token', error)
                           }
                         });
                         navigate('HomeView', {})
                       }
                     }
                   }
                   onLogoutFinished={() => console.log("User logged out")}/>

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
