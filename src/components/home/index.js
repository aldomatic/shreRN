import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import Modal from 'react-native-simple-modal';

import ToolBar from '../shared/toolbar';
import Menu from '../shared/menu';
import ModalMenu from '../shared/modalMenu';
import QRCodeGen from '../shared/qrCode';
import MyList from '../shared/list';

import LinearGradient from 'react-native-linear-gradient';

var {height, width} = Dimensions.get('window');

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
        colors={['#040626', '#040626']}>

        <Menu nav={this.props.navigation} />

        <ToolBar title="SHRE" />
        <View style={styles.content}>

        <View style={{flex: 1, backgroundColor:'transparent', justifyContent: 'center', alignItems: 'center'}}>
          <MyList navTo={this.props.navigation} />
        </View>

          <View style={{flexDirection: 'row', flex: .10}}>
            <TouchableHighlight style={{flex: .15, backgroundColor: '#272b46', justifyContent: 'center', alignItems: 'center'}} underlayColor={'#323754'} activeOpacity={0.7} onPress={() => {
              this._navigate('ShareView')
            }}>
            <View>
                <Text style={{color:"#fff", fontWeight: 'bold', fontSize: 16}}>CAPTURE</Text>
            </View>
            </TouchableHighlight>

            <TouchableHighlight style={{flex: .10, backgroundColor: '#323754', justifyContent: 'center', alignItems: 'center'}} underlayColor={'#272b46'} activeOpacity={0.7} onPress={() => {
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
      	   margin: 0,
           height: height,
      	   padding: 0,
      	   backgroundColor: '#040626'
      	}}>
          <View style={{flex: 1}}>
            <View style={{flex:.25, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={() => this._toggleModal()}>
                <Text style={{color: '#5b5f7e', marginRight: 15, marginTop: 15, fontSize: 18}}>Close</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1, justifyContent: 'flex-start', alignItems: 'center'}}>
              <QRCodeGen />
              <Text style={{color:'#5b5f7e', marginTop: 40, textAlign:'center', fontSize: 18}}>Position the camera over{"\n"}the graphic above.</Text>
            </View>
          </View>
        </Modal>
        <ModalMenu />
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
