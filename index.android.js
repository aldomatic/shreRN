import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import routesConfig from './src/config/routes'
import { combineReducers, createStore } from 'redux';
import {Provider, connect} from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

const AppNavigator = routesConfig;
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('LoginView'));


const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const appReducer = combineReducers({
  nav: navReducer
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

  const mapStateToProps = (state) => ({
    nav: state.nav
  });

const AppWithNavigationState = connect(mapStateToProps)(App);
const store = createStore(appReducer);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('shreApp', () => Root);