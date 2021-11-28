import React, {useContext} from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './screens/loginScreen';
import {ProductsScreen} from './screens/productsScreen';
import {ProductScreen} from './screens/productScreen';
import {ThemeContext} from './contexts/themeContext';
import {Switch} from 'react-native';
import {ThemeProvider} from './components/theme/themeProvider';

export type RootStackParamList = {
  Login: undefined;
  Products: undefined;
  Product: {productName: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ThemeProvider>
      <AppComponent />
    </ThemeProvider>
  );
};

export const AppComponent = () => {
  const {isDarkMode, theme, toggleTheme} = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#E6E6E6',
          },
          headerTitleAlign: 'center',
        }}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
