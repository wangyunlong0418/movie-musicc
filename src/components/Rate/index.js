import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }
  static propTypes = {
    //如果使用组件时调用了onPress，那么组件默认为可以改变，如果没有，那么组件应该为只读
    value: PropTypes.number,
    size: PropTypes.number,
    margin: PropTypes.number,
    max: PropTypes.number,
    color: PropTypes.string,
    onPress: PropTypes.func,
  };
  static defaultProps = {
    value: 0,
    size: 20,
    margin: 5,
    max: 5,
    color: '#00b600',
  };
  bindClick = index => {
    const {onPress} = this.props;
    if (!onPress) {
      return;
    }
    onPress(index + 1);
    this.setState({
      value: index + 1,
    });
  };
  render() {
    const {size, margin, max, color, onPress, hasText = true} = this.props;
    const {value} = this.state;
    const starValue = value / 2;
    const stars = [];
    for (let i = 0; i < Math.ceil(starValue); i++) {
      stars.push(
        <Icon
          name="star"
          key={i}
          size={size}
          color={color}
          onPress={() => this.bindClick(i)}
          style={{marginRight: margin}}
        />,
      );
    }

    for (let i = 0; i < max - Math.ceil(starValue); i++) {
      stars.push(
        <Icon
          name="star"
          key={starValue + i}
          size={size}
          color="#ececec"
          onPress={() => this.bindClick(i)}
          style={{marginRight: margin}}
        />,
      );
    }

    return (
      <View style={styles.rates}>
        <View style={[styles.stars]}>{stars.map(item => item)}</View>
        {hasText && <Text>{value}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rates: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
