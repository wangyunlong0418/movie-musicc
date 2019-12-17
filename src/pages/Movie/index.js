import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, RefreshControl} from 'react-native';
import {inject, observer} from 'mobx-react';
import Search from './Search';
import Location from './Location';
import IntheaterMovie from './IntheaterMovie';
import TabPage from './TabPage';
import Loading from '../../components/Loading';

@inject('movieStore')
@observer
class Moive extends Component {
  state = {
    refreshing: false,
  };
  componentDidMount() {
    const {movieStore} = this.props;
    // movieStore.getIntheaterMovie();
    movieStore.getAllMovie();
  }

  _refresh = () => {
    console.log(111);
    this.setState({refreshing: true});
  };

  _scroll = event => {
    console.log(event.nativeEvent.contentOffset.y);
  };

  render() {
    const {navigation, movieStore} = this.props;
    const {homeLoading} = movieStore.loading;
    return (
      <View style={styles.box}>
        {this.state.refreshing && <Text>正在刷新</Text>}
        <Loading isShow={homeLoading} hasMask={true} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
              title="正在加载中..."
              titleColor="#00ff00"
            />
          }
          onScroll={this._scroll}>
          <Search navigation={navigation} />
          <View style={styles['has-padding']}>
            <Location />
            <IntheaterMovie navigation={navigation} />
          </View>
          <TabPage navigation={navigation} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    position: 'relative',
  },
  'has-padding': {
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default Moive;
