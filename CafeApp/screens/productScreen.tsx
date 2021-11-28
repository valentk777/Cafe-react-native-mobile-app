import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../App';
import { Tile } from '../components/tile';

type ProductScreenProps = NativeStackScreenProps<RootStackParamList, 'Product'>;

export const ProductScreen = ({route}: ProductScreenProps) => {
  return (
    <View style={styles.container}>
      <Tile
        label={route.params.product.label}
        title={route.params.product.title}
        description={route.params.product.description}
        image={route.params.product.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
