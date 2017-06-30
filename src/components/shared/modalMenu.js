import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-simple-modal';

const FBSDK = require('react-native-fbsdk');
const {LoginManager } = FBSDK;

var {height, width} = Dimensions.get('window');



class ModalMenu extends Component {

  constructor(props){
    super(props);
    this.state = {
      openMenu: false
    }
  }

  /*
    Close Menu
  */
  _closeMenu(){
    this.props.dispatch({
      type: "CLOSE_MENU",
      payload: {
        isActive: false,
        openMenu: false
      }
    });
  }

  /*
    Navigate
  */
  _navigate(routeName){
    this.props.dispatch({
      type: "replaceScreen",
      routeName: routeName,
      params: {}
    })
  }

  /*
   Sign Out
  */
  _signOut(){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'LoginView'})
      ]
    });
    this.props.dispatch(resetAction);
    AsyncStorage.removeItem('accessToken', (result) => {
      console.log("Successfuly logged out and removed accessToken");
    })
    LoginManager.logOut();
  }

  componentWillReceiveProps(nextProps){
    this.setState({openMenu: nextProps.menu.openMenu})
  }

  render() {
    return (
        <Modal
         offset={0}
         open={this.state.openMenu}
         modalDidOpen={() => console.log('modal did open')}
         modalDidClose={() => this.setState({openMenu: false})}
         style={{}}
         modalStyle={{
           borderRadius: 0,
           margin: 0,
           height: height,
           padding: 0,
           backgroundColor: 'rgba(4, 6, 38, 0.7)'
        }}>
          <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableHighlight underlayColor={'#040626'} activeOpacity={0.7} onPress={() => {
              this._navigate('HomeView');
              this._closeMenu();
          }}>
              <View>
                <Text style={styles.links}>HOME</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={'#040626'} activeOpacity={0.7} onPress={() => {
              this._navigate('ProfileView');
              this._closeMenu();
          }}>
              <View>
                <Text style={styles.links}>PROFILE</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={'#040626'} activeOpacity={0.7} onPress={() => {
              this._navigate('HomeView');
              this._closeMenu();
          }}>
              <View>
                <Text style={styles.links}>SETTINGS</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={'#040626'} activeOpacity={0.7} onPress={() => {
              this._signOut();
              this._closeMenu();
          }}>
              <View>
                <Text style={styles.links}>LOG OUT</Text>
              </View>
            </TouchableHighlight>
          </View>
        </Modal>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    menu: state.menu
  }
}

export default connect(mapStateToProps)(ModalMenu);


const styles = StyleSheet.create({
  links: {color:'#fff', marginTop: 15, marginBottom: 15, fontSize: 20, fontWeight: 'bold', color:'#eb0b42'}
});
