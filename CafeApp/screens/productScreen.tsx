import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../App';
import {Button, ButtonTypes} from '../components/buttonWrapper';
import {Tile} from '../components/tile';

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
        {/* TODO: replace with quantity component */}
        <Text style={styles.text}>Quantity component</Text>
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
    alignSelf: 'center',
    fontSize: 40,
  },
  buttonContainer: {
    height: '25%',
    marginRight: 20,
    marginLeft: 20,
  },
});
