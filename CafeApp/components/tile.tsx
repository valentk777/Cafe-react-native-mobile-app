import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

interface TileProps {
  label: string;
  title: string;
  description: string;
  image: string;
}

export const Tile = (props: TileProps) => {
  const {label, title, description, image} = props;

  return (
    <View style={styles.tileContainer}>
      <Image style={styles.tileImage} source={{uri: image}} />
      <Text style={styles.tileLabel}>{label}</Text>
      <Text style={styles.tileTitle}>{title}</Text>
      <Text style={styles.tileDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tileContainer: {},
  tileLabel: {},
  tileTitle: {},
  tileDescription: {},
  tileImage: {
    width: 50,
    height: 50,
  },
});
