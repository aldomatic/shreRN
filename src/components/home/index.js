import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  NativeModules,
  requireNativeComponent,
  processColor
} from 'react-native';
import Modal from 'react-native-simple-modal';

import ToolBar from '../shared/toolbar';
import Menu from '../shared/menu';
import QRCodeGen from '../shared/qrCode';
import MyList from '../shared/list';

import LinearGradient from 'react-native-linear-gradient';

export default class HomeView extends Component {
  state = {open: false};

  _toggleModal(){
    this.setState({
      open: !this.state.open
    })
  }

  _navigate(routeName, params = {}){
    this.props.navigation.dispatch({
      type: "replaceScreen",
      routeName: routeName,
      params: params
    })
  }

  render() {

    return (
      <LinearGradient
        style={styles.mainContainer}
        locations={[0,0.8]}
        colors={['#5ED2A0', '#339CB1']}>

        <Menu nav={this.props.navigation} />
        <ToolBar title="SHRE" />
        <View style={styles.content}>

        <View style={{flex: 1, backgroundColor:'transparent', justifyContent: 'center', alignItems: 'center'}}>
          <MyList navTo={this.props.navigation} />
        </View>

          <View style={{flexDirection: 'row', flex: .10}}>
            <TouchableHighlight style={{flex: .15, backgroundColor: '#1b5f6d', justifyContent: 'center', alignItems: 'center'}} underlayColor={'#55a0cd'} activeOpacity={0.7} onPress={() => {
              this._navigate('ShareView')
            }}>
            <View>
                <Text style={{color:"#fff", fontWeight: 'bold', fontSize: 16}}>CAPTURE</Text>
            </View>
            </TouchableHighlight>

            <TouchableHighlight style={{flex: .10, backgroundColor: '#195865', justifyContent: 'center', alignItems: 'center'}} underlayColor={'#DB5D4F'} activeOpacity={0.7} onPress={() => {
              this._toggleModal()
            }}>
            <View>
                <Text style={{color:"#fff", fontWeight: 'bold', fontSize: 16}}>SHARE</Text>
            </View>
            </TouchableHighlight>
          </View>

        </View>

        <Modal
         offset={0}
         open={this.state.open}
         modalDidOpen={() => console.log('modal did open')}
         modalDidClose={() => this.setState({open: false})}
         style={{}}
         modalStyle={{
      	   borderRadius: 0,
      	   margin: 25,
           height: 500,
      	   padding: 0,
      	   backgroundColor: '#195865'
      	}}>
          <View style={{flex: 1}}>
            <View style={{flex:.25, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={() => this._toggleModal()}>
                <Text style={{color: '#3bacc3', marginRight: 10, marginTop: 10}}>Close</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1, justifyContent: 'flex-start', alignItems: 'center'}}>
              <QRCodeGen />
              <Text style={{color:'#88dbec', marginTop: 30, textAlign:'center'}}>Position the camera over{"\n"}the graphic above.</Text>
            </View>
          </View>
        </Modal>
    </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer:{
      flex:1
    },
    content:{
      //backgroundColor:'#1e293d',
      backgroundColor:'transparent',
      flex:1
    }
});
