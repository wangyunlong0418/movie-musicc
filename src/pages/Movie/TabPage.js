import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {inject, observer} from 'mobx-react';
import MovieList from './MovieList';
import Tab from '../../components/Tab';

@inject('movieStore')
@observer
class TabPage extends Component {
  render() {
    const {height, width} = Dimensions.get('window');
    const {movieStore, navigation} = this.props;
    const {comingSoonMovie = [], topMovie = []} = movieStore;
    const tabs = [{title: '即将上映'}, {title: 'Top250'}];
    return (
      <View style={[styles.box, {width}]}>
        <Tab tabs={tabs}>
          <MovieList movieList={comingSoonMovie} navigation={navigation} />
          <MovieList movieList={topMovie} navigation={navigation} />
        </Tab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    height: '100%',
    paddingBottom: 30,
  },
});

export default TabPage;
