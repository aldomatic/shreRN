import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  requireNativeComponent,
  processColor,
  Image
} from 'react-native';

import ToolBarBack from '../shared/toolbar_back';

import LinearGradient from 'react-native-linear-gradient';
// let RNLinearGradient = requireNativeComponent('RNLinearGradientSwift', null);

export default class DetailsView extends Component {

  componentWillMount(){
    //
  }

  render() {
    const { id } = this.props.navigation.state.params
    return (
      <LinearGradient
        style={styles.mainContainer}
        locations={[0,0.8]}
        colors={['#040626', '#040626']}>

            <ToolBarBack title="Details" nav={this.props.navigation} />

            <View style={{
               flexDirection: 'column',
               justifyContent: 'flex-start',
               backgroundColor: 'transparent',
               alignItems: 'center',
               flex: 1,
               marginTop: 15
             }}>
             <Image
             source={require('../../assets/images/avatar-placeholder.png')}
             style={{width: 130, height: 130, marginTop: 10, overflow: 'hidden', borderRadius: 65, borderColor: '#0b0d2f', borderWidth: 5}}
             />
             <Text style={styles.name}>{id}</Text>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.text}>Email:</Text>
                <Text style={styles.text}>test@test.com</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.text}>Phone:</Text>
                <Text style={styles.text}>214-556-6666</Text>
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
   color: '#7c81a6',
   fontSize: 24,
   padding:10,
   textAlign:'center',
   marginTop:0,
   marginBottom: 0,
   backgroundColor: 'transparent',
   alignItems: 'stretch'
 },
 text:{
   color:'#fff',
   fontSize:16,
   textAlign:'center',
   padding:5,
   backgroundColor: 'transparent',
   alignItems: 'stretch'
 }
});
