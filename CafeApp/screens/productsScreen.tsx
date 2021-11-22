import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '../App';
import {Button, ButtonTypes} from '../components/buttonWrapper';
type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Products'
>;
export const ProductsScreen = (props: ProductsScreenProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        type={ButtonTypes.Secondary}
        title="Product1"
        onPress={() =>
          props.navigation.push('Product', {
            productName: 'Coffee',
          })
        }
      />
      <Button
        type={ButtonTypes.Secondary}
        title="Product2"
        onPress={() =>
          props.navigation.push('Product', {
            productName: 'Tea',
          })
        }
      />
    </View>
  );
};
