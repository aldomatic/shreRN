import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

const {height, width} = Dimensions.get('window');

class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      topPosition: new Animated.Value(-300)
    }
    this._closeMenu = this._closeMenu.bind(this);
    this._navigate = this._navigate.bind(this);
    this._signOut = this._signOut.bind(this);
  }

  /*
    Close Menu
  */
  _closeMenu(){
    this.props.dispatch({
      type: "CLOSE_MENU",
      payload: {
        isActive: false
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
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.menu.isActive){
      Animated.timing(
        this.state.topPosition,
        {
          toValue: 0,
          duration:500,
          easing: Easing.bounce
        }
      ).start();
    } else {
      Animated.timing(this.state.topPosition, {
          toValue: -250,
          duration:250,
          easing: Easing.ease
        }
      ).start();
    }
  }

  render() {
    let {navigate} = this.props.nav;
    return (
      <Animated.View style={[styles.menu, {top: this.state.topPosition}]}>
        <TouchableHighlight underlayColor={'#DB5D4F'} activeOpacity={0.7} onPress={() => {
          this._navigate('HomeView');
          this._closeMenu();
      }}>
          <View>
            <Text style={styles.menuItems}>HOME</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#DB5D4F'} activeOpacity={0.7} onPress={() => {
          this._navigate('ProfileView')
          this._closeMenu();
      }}>
          <View>
            <Text style={styles.menuItems}>PROFILE</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#DB5D4F'} activeOpacity={0.7} onPress={() => this._signOut()}>
          <View>
            <Text style={styles.menuItems}>LOG OUT</Text>
          </View>
        </TouchableHighlight>
      </Animated.View>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    menu: state.menu
  }
}

export default connect(mapStateToProps)(Menu);

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#DB5D4F',
    height:250,
    top:-250,
    position:'absolute',
    left:0,
    width: width,
    zIndex: 10,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  menuItems:{
    color:'#fff',
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom:15,
    textAlign: 'center'
  }
});
