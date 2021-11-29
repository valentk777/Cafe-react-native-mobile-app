import React from 'react';
import {StyleSheet, Text, Image, ButtonProps, Pressable} from 'react-native';
import {Product} from '../../entities/product';

interface TileProps extends ButtonProps {
  product: Product;
}

export const PressableTile = (props: TileProps) => {
  const {onPress, product} = props;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text style={styles.title}>{product.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 3,
    width: 170,
    height: 200,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    lineHeight: 50,
    paddingLeft: 10,
  },
  image: {
    width: 168,
    height: 150,
  },
});
