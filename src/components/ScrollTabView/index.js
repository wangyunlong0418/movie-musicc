import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';

import TabIndicator from '../TabIndicator';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

//集成TabIndicator和需要滚动的子视图
export default class ScrollTabView extends Component {
  //这里的属性基本就是TabIndicator的除了titles,这个是所有tab的名称,当然最后也是传给TabIndicator的
  // static propTypes = {
  //   tabBarActiveTextColor: React.PropTypes.string,
  //   tabBarInactiveTextColor: React.PropTypes.string,
  //   titles: React.PropTypes.array,
  //   tabTextStyle: React.PropTypes.any,
  //   tabBarUnderlineStyle: React.PropTypes.any,
  //   tabHeight: React.PropTypes.number,
  // };
  static defaultProps = {
    tabBarActiveTextColor: '#686868',
    tabBarInactiveTextColor: '#cccccc',
    titles: [],
    tabHeight: 50,
  };
  render() {
    return (
      <View style={styles.container}>
        <TabIndicator
          ref={r => (this.tab = r)}
          tabNames={this.props.titles}
          tabBarUnderlineStyle={this.props.tabBarUnderlineStyle}
          tabHeight={this.props.tabHeight}
          tabTextStyle={this.props.tabTextStyle}
          tabBarActiveTextColor={this.props.tabBarActiveTextColor}
          tabBarInactiveTextColor={this.props.tabBarInactiveTextColor}
          onTabPress={index => {
            this.sv.scrollTo({x: index * screenWidth, y: 0, animated: true});
          }}
        />
        <ScrollView
          ref={r => (this.sv = r)}
          pagingEnabled
          horizontal
          onScroll={e => {
            this.tab.swipeToTrans(e.nativeEvent.contentOffset.x / screenWidth);
          }}>
          {/* 要展示的滚动视图 */}
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
  },
});
