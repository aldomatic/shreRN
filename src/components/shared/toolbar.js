import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  requireNativeComponent,
  processColor
} from 'react-native';
import { connect } from 'react-redux';


class ToolBar extends Component {

  constructor(props){
    super(props);

    this._openMenu = this._openMenu.bind(this);
  }

  /*
    Open Menu
  */
  _openMenu(){
    this.props.dispatch({
      type: "OPEN_MENU",
      payload: {
        isActive: true
      }
    });
  }


  render() {
    return (
      <View>
        <StatusBar hidden/>
        <View>
          <View style={styles.toolbar}>
            <Text style={styles.toolbarTitle}>{this.props.title}</Text>
            <Text style={styles.toolbarButton} onPress={this._openMenu}>Settings</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    menu: state.menu
  }
}

export default connect(mapStateToProps)(ToolBar);

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#eb0b42',
    //backgroundColor: 'transparent',
    paddingTop:15,
    paddingBottom:15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  toolbarButton: {
    width:50,
    color:'#fff',
    textAlign:'center',
    marginTop:8,
    marginRight: 5,
    flex: .25,
    fontSize: 16,
    fontWeight: 'normal'
    },
  toolbarTitle: {
    color:'#fff',//db3a7c
    textAlign:'left',
    fontWeight: 'bold',
    fontSize: 28,
    flex: 1,
    marginLeft: 15
    }
});
