import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../App';
import {PressableTile} from '../components/tile/pressableTile';
import {globalProductsDB} from '../database/productsDB';
import {Product} from '../entities/product';

type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Products'
>;

export const ProductsScreen = (props: ProductsScreenProps) => {
  const renderItem = ({item}: {item: Product}) => {
    return (
      <PressableTile
        title={item.title}
        product={item}
        onPress={() => props.navigation.push('Product', {product: item})}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={globalProductsDB}
        renderItem={renderItem}
        keyExtractor={item => item.productId}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={styles.columns}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  columns: {
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 20,
  },
});
