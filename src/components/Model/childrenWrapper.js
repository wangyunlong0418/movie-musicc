import React from 'react';
import {Text} from 'react-native';
const childrenWrapper = ({children}) => {
  if (children && typeof children === 'string') {
    return <Text>{children}</Text>;
  }

  return children;
};

export default childrenWrapper;
