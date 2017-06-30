import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import routesConfig from './src/config/routes'
import { combineReducers, createStore } from 'redux';
import {Provider, connect} from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

// Reducers
import menuReducer from './src/reducers/menuReducer';

const AppNavigator = routesConfig;

const defaultGetStateForAction = AppNavigator.router.getStateForAction;
const navReducer = (state, action) => {
  if(state && action.type == "replaceScreen"){
    const routes = state.routes.slice(0, state.routes.length - 1);
    routes.push(action);
    console.log(routes);
    return {
      ...state,
      routes,
      index: routes.length - 1
    }
  }
  return defaultGetStateForAction(action, state);
};

const appReducer = combineReducers({
  nav: navReducer,
  menu: menuReducer
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
