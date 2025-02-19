import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Images } from '../config';

export const Logo = ({ uri }) => {
  return <Image source={uri} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    marginTop: 75,
    width: 200,
    height: 200
  }
});
