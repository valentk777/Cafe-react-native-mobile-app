import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../App';
import Icon from 'react-native-vector-icons/Feather';
import {useAuthorizationContext} from '../contexts/authorizationContext';
import {Button, ButtonTypes} from '../components/ButtonWrapper/ButtonWrapper';

interface LoginScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'Login'> {
  setIsLoggedIn: (isAuthenticated: boolean) => void;
}

export const LoginScreen = (props: LoginScreenProps) => {
  const {signIn} = useAuthorizationContext();
  return (
    <View>
      <View style={styles.section}>
        <Icon name="lock" size={70} color="#000" />
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type={ButtonTypes.Primary}
          title="Login"
          onPress={() => {
            signIn();
          }}
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
  section: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  buttonContainer: {
    margin: 20,
  },
});
