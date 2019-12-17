import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Moive from './pages/Movie';
import Music from './pages/Music';
import Mine from './pages/Mine';
import Search from './pages/Search';
import Detail from './pages/Movie/Detail';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createBottomTabNavigator(
  {
    movie: {
      screen: Moive,
      navigationOptions: {
        title: '电影',
        tabBarIcon: ({tintColor}) => {
          return (
            <MaterialCommunityIcons
              name="movie-roll"
              color={tintColor}
              size={18}
            />
          );
        },
      },
    },
    music: {
      screen: Music,
      navigationOptions: {
        title: '音乐',
        tabBarIcon: ({tintColor}) => {
          return (
            <MaterialCommunityIcons name="music" color={tintColor} size={20} />
          );
        },
      },
    },
    self: {
      screen: Mine,
      navigationOptions: {
        title: '我的',
        tabBarIcon: ({tintColor}) => {
          return <Ionicons name="md-person" color={tintColor} size={20} />;
        },
      },
    },
  },
  {
    initialRouteName: 'movie',
    backBehavior: 'none', // back按键是否跳转到第一个页面
    tabBarOptions: {
      activeTintColor: '#0092FF',
      activeBackgroundColor: '#FFFEFF',
      inactiveTintColor: '#B5B7BC',
      inactiveBackgroundColor: '#FFFEFF',
      labelStyle: {
        fontSize: 14,
      },
      tabStyle: {
        paddingBottom: 4,
        fontSize: 18,
      },
      style: {
        backgroundColor: '#FFFEFF',
      },
    },
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppNavigation = createStackNavigator(
  {
    Main: {
      screen: MainNavigator,
      navigationOptions: {
        header: null,
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {},
    },
    Search: {
      screen: Search,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Main',
  },
);

const AppContainer = createAppContainer(AppNavigation);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
