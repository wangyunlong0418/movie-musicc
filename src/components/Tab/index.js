import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Button from '../Button';

export default class Tab extends PureComponent {
  state = {
    selectedKey: 0,
  };

  updateSelectedKey = index => {
    this.setState({
      selectedKey: index,
    });
  };

  render() {
    const {selectedKey} = this.state;
    const {width} = Dimensions.get('window');
    const {tabs = [], children} = this.props;
    return (
      <View style={{width}}>
        <View style={styles.tabBox}>
          {tabs.map((tab, index) => {
            const isActive = selectedKey === index;
            return (
              <View style={styles.buttonBoxStyle} key={index}>
                <Button
                  title={tab.title}
                  boxStyle={[
                    styles.buttonStyle,
                    isActive ? styles.buttonBoxActiveStyle : {},
                  ]}
                  fontstyle={[
                    styles.buttonFontStyle,
                    isActive ? styles.buttonFontActiveStyle : {},
                  ]}
                  onPress={() => {
                    this.updateSelectedKey(index);
                  }}
                />
              </View>
            );
          })}
        </View>
        <View>{children && children[selectedKey]}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabActiveUnderline: {
    backgroundColor: 'rgb(66, 189, 86)',
    width: 94,
    marginLeft: 54,
  },
  tabBox: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomColor: '#ebedf0',
    borderBottomWidth: 1,
  },

  buttonBoxStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    textAlign: 'center',
  },
  buttonStyle: {
    position: 'relative',
    bottom: -1,
    width: 94,
    height: '100%',
  },
  buttonFontStyle: {
    fontSize: 14,
    color: '#7d7e80',
    textAlign: 'center',
  },

  buttonBoxActiveStyle: {
    color: 'rgb(66, 189, 86)',
    borderStyle: 'solid',
    borderBottomColor: 'rgb(66, 189, 86)',
    borderBottomWidth: 2,
  },

  buttonFontActiveStyle: {
    color: 'rgb(66, 189, 86)',
    fontWeight: '500',
  },
});
