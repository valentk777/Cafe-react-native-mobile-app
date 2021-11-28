import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../App';
import {Button, ButtonTypes} from '../components/buttonWrapper';
import { Quantity } from '../components/quantity';
import {Tile} from '../components/tile/tile';

type ProductScreenProps = NativeStackScreenProps<RootStackParamList, 'Product'>;

export const ProductScreen = ({route}: ProductScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tileContainer}>
        <Tile
          label={route.params.product.label}
          title={route.params.product.title}
          description={route.params.product.description}
          image={route.params.product.image}
        />
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.text}>Quantity</Text>
        <Quantity passedCount={0}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type={ButtonTypes.Primary}
          title="Add to cart"
          onPress={() => Alert.alert('Add to cart')}
        />
        <Button
          type={ButtonTypes.Secondary}
          title="Pay"
          onPress={() => Alert.alert('Pay')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
  },
  tileContainer: {
    alignItems: 'center',
    height: '55%',
  },
  quantityContainer: {
    height: '20%',
  },
  //TODO: remove
  text: {
    marginLeft: 30,
    fontSize: 20,
  },
  buttonContainer: {
    height: '25%',
    marginRight: 20,
    marginLeft: 20,
  },
});
