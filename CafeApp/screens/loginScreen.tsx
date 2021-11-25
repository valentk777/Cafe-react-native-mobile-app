import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../App';
import {Button, ButtonTypes} from '../components/buttonWrapper';
import Icon from 'react-native-vector-icons/Feather';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Products'>;

export const LoginScreen = (props: LoginScreenProps) => {
  return (
    <View tyle={styles.loginScreen}>
      <View style={styles.loginSection}>
        <Icon name="lock" size={70} color="#000" />
        <Text style={styles.loginText}>Login</Text>
      </View>

      <View style={styles.loginButtonContainer}>
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
  loginScreen: {},
  loginSection: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
  },
  loginText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  loginButtonContainer: {
    margin: 20,
  },
});