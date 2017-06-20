import {
  StackNavigator,
} from 'react-navigation';


// Routes
import LoginView from '../components/login';
import HomeView from '../components/home';
import ProfileView from '../components/profile';
import ShareView from '../components/share';
import DetailsView from '../components/details';

import config from './navigationOptions';

const routesConfig = StackNavigator({
  LoginView: {
    screen: LoginView,
    navigationOptions: ({navigation}) => ({
      title: 'LOGIN',
      ...config
    })
  },
  HomeView: {
    screen: HomeView,
    navigationOptions: ({navigation}) => ({
      title: 'HOME',
      ...config
    })
  },
  ProfileView: {
    screen: ProfileView,
    navigationOptions: ({navigation}) => ({
      title: 'PROFILE',
      ...config
    })
  },
  ShareView: {
    screen: ShareView,
    navigationOptions: ({navigation}) => ({
      title: 'SHARE',
      ...config
    })
  },
  DetailsView: {
    screen: DetailsView,
    path: 'details/:id',
    navigationOptions: ({navigation}) => ({
      title: 'DETAILS VIEW',
      ...config
    })
  }
},{
  initialRouteName: 'LoginView',
});

export default routesConfig;
