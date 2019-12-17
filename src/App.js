/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'mobx-react';
import {Provider as AntdProvider} from '@ant-design/react-native';
import Navigator from './Navigator';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <AntdProvider>
          <Navigator />
        </AntdProvider>
      </Provider>
    );
  }
}

export default App;
