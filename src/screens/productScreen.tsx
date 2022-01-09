import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {Button, ButtonTypes} from '../components/ButtonWrapper/ButtonWrapper';
import {Quantity} from '../components/Quantity/Quantity';
import {Tile} from '../components/Tile/Tile';

type ProductScreenProps = NativeStackScreenProps<RootStackParamList, 'Product'>;

export const ProductScreen = ({route}: ProductScreenProps) => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.tileContainer}>
        <Tile product={route.params.product} />
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.text}>Quantity</Text>
        <Quantity count={count} setCount={setCount} />
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
