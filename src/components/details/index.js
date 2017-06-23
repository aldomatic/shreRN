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

let RNLinearGradient = requireNativeComponent('RNLinearGradientSwift', null);

export default class DetailsView extends Component {

  render() {
    const { id } = this.props.navigation.state.params
    return (
        <RNLinearGradient
          style={styles.container}
          locations={[0, 1.0]}
          colors={[processColor('#5ED2A0'), processColor('#339CB1')]}>

            <ToolBarBack title="Details" nav={this.props.navigation} />

            <View style={{
               flexDirection: 'column',
               justifyContent: 'flex-start',
               backgroundColor: 'transparent',
               alignItems: 'center',
               flex: 1
             }}>
             <Image
             source={require('../../assets/images/avatar-placeholder.png')}
             style={{width: 120, height: 120, marginTop: 10, overflow: 'hidden', borderRadius: 60, borderColor: '#5ED2A0', borderWidth: 5}}
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

          </RNLinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  name: {
   color: '#fff',
   fontSize: 26,
   padding:10,
   textAlign:'center',
   marginTop:0,
   marginBottom: 0,
   backgroundColor: 'transparent',
   fontWeight: 'bold',
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
