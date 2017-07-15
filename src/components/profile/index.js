import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';

import ToolBarBack from '../shared/toolbar_back';

import LinearGradient from 'react-native-linear-gradient';
import FBRequestPromise from '../../config/FBRequestPromise';

export default class ProfileView extends Component {

  constructor(props){
    super(props)
    this.state = {
      FBMeData: {
        name: '',
        pic: '',
        email: ''
      }
    }
  }

  componentWillMount(){
    try{
      const accessToken = AsyncStorage.getItem('accessToken');
      if(accessToken !== null){
        FBRequestPromise(accessToken).then((data) => {
          console.log(data);
            this.setState({
              FBMeData: {
                name: data.name,
                pic: data.picture.data.url,
                email: data.email
              }
            })
          }).catch((reason) => {
            console.log('Error ('+reason+')');
        });
      }
    } catch (error){
      console.log('Error saving token', error)
    }
  }

  render() {
    const { id } = this.props.navigation.state.params
    return (
      <LinearGradient
        style={styles.mainContainer}
        locations={[0,0.8]}
        colors={['#040626', '#040626']}>

            <ToolBarBack title="Profile" nav={this.props.navigation} />
            <View style={{
               flexDirection: 'column',
               justifyContent: 'flex-start',
               backgroundColor: 'transparent',
               alignItems: 'center',
               flex: 1
             }}>
            <View style={{
               flexDirection: 'column',
               justifyContent: 'flex-start',
               backgroundColor: 'transparent',
               alignItems: 'center',
               flex: 1
             }}>
             <Image
             source={{uri: this.state.FBMeData.pic}}
             style={{width: 130, height: 130, marginTop: 30, marginBottom: 10, overflow: 'hidden', borderRadius: 65, borderColor: '#0b0d2f', borderWidth: 5}}
             />

             <Text style={styles.name}>{this.state.FBMeData.name}</Text>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.text}>Email:</Text>
                <Text style={styles.text}>{this.state.FBMeData.email}</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.text}>Phone:</Text>
                <Text style={styles.text}>214-556-6666</Text>
            </View>
           </View>


            <View style={{flexDirection: 'row', flex: .10}}>
               <TouchableHighlight style={{flex: .15, backgroundColor: '#272b46', justifyContent: 'center', alignItems: 'center'}} underlayColor={'#272b46'} activeOpacity={0.7} onPress={() => {
                 console.log("EDIT")
               }}>
               <View>
                   <Text style={{color:"#fff", fontWeight: 'bold', fontSize: 16}}>EDIT</Text>
               </View>
               </TouchableHighlight>
             </View>
           </View>

          </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  name: {
   color: '#fff',
   fontSize: 24,
   padding:10,
   textAlign:'center',
   marginTop:0,
   marginBottom: 0,
   backgroundColor: 'transparent',
   alignItems: 'stretch'
 },
 text:{
   color:'#7c81a6',
   fontSize:16,
   textAlign:'center',
   padding:5,
   backgroundColor: 'transparent',
   alignItems: 'stretch'
 }
});
