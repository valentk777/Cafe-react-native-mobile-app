import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../App';
import {PressableTile} from '../components/tile/pressableTile';
import {globoProducts} from '../database/productsDB';

type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Products'
>;

interface ProductProps {
  productId: string;
  label: string;
  title: string;
  description: string;
  image: string;
}

export const ProductsScreen = (props: ProductsScreenProps) => {
  const renderItem = ({item}: {item: ProductProps}) => {
    return (
      <PressableTile
        title={item.title}
        image={item.image}
        onPress={() => props.navigation.push('Product', {product: item})}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={globoProducts}
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
