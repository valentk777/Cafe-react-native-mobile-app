import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '../App';
import {Section} from '../components/section';

type ProductScreenProps = NativeStackScreenProps<RootStackParamList, 'Product'>;

export const ProductScreen = ({route}: ProductScreenProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Section title="Step One">{`Product: ${route.params.productName}`}</Section>
    </View>
  );
};
