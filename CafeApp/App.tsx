import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './screens/loginScreen';
import {ProductsScreen} from './screens/productsScreen';
import {ProductScreen} from './screens/productScreen';
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
              // headerRight: () => <Switch value={darkMode} onValueChange={setDarkMode} /> ,
            }}
          />
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
