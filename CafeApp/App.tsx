import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './screens/loginScreen';
import {ProductsScreen} from './screens/productsScreen';
import {ProductScreen} from './screens/productScreen';
import {
  AuthorizationContextProvider,
  useAuthorizationContext,
} from './contexts/authorizationContext';

export type RootStackParamList = {
  Login: undefined;
  Products: undefined;
  Product: {productName: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const {isSignedIn} = useAuthorizationContext();
  console.log('App', isSignedIn);
  useEffect(() => {
    console.log('changed', isSignedIn);
  }, [isSignedIn]);
  return (
    <AuthorizationContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#E6E6E6',
            },
            headerTitleAlign: 'center',
          }}>
          {isSignedIn ? (
            <>
              <Stack.Screen name="Products" component={ProductsScreen} />
              <Stack.Screen name="Product" component={ProductScreen} />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{title: 'Cafe App'}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthorizationContextProvider>
  );
};

export default App;
