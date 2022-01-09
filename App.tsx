import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './src/screens/loginScreen';
import {ProductsScreen} from './src/screens/productsScreen';
import {ProductScreen} from './src/screens/productScreen';
import {ThemeContext, ThemeProvider} from './src/contexts/themeContext';
import {Switch} from 'react-native';
import {Product} from './src/entities/product';
import {
  AuthorizationContextProvider,
  useAuthorizationContext,
} from './src/contexts/authorizationContext';

export type RootStackParamList = {
  Login: undefined;
  Products: undefined;
  Product: {product: Product};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ThemeProvider>
      <AuthorizationContextProvider>
        <AppComponent />
      </AuthorizationContextProvider>
    </ThemeProvider>
  );
};

export const AppComponent = () => {
  const {isDarkMode, theme, toggleTheme} = useContext(ThemeContext);
  const {isSignedIn} = useAuthorizationContext();
  return (
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
            <Stack.Screen
              name="Products"
              component={ProductsScreen}
              options={{
                headerRight: () => (
                  <Switch value={isDarkMode} onValueChange={toggleTheme} />
                ),
              }}
            />
            <Stack.Screen
              name="Product"
              component={ProductScreen}
              options={{
                headerRight: () => (
                  <Switch value={isDarkMode} onValueChange={toggleTheme} />
                ),
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Cafe App',
                headerRight: () => (
                  <Switch value={isDarkMode} onValueChange={toggleTheme} />
                ),
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
