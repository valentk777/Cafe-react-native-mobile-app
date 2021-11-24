import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../App';
import {Button, ButtonTypes} from '../components/buttonWrapper';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Products'>;

export const LoginScreen = (props: LoginScreenProps) => {
  return (
    <View>
      <View style={{margin: 20}}>
        <Button
          type={ButtonTypes.Primary}
          title="Login"
          onPress={() => props.navigation.push('Products')}
        />
        <Button
          type={ButtonTypes.Secondary}
          title="Register"
          onPress={() => Alert.alert('Register')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});
