import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const Button = ({title, fontstyle, boxStyle, onPress}) => {
  return (
    <View
      style={[boxStyle, {justifyContent: 'center', alignContent: 'center'}]}>
      <TouchableOpacity activeOpacity={1} onPress={onPress}>
        <Text style={fontstyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
