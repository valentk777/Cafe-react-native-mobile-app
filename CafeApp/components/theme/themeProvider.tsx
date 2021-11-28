import React, {useState} from 'react';
import { Switch } from 'react-native';
import {customeDarkTheme, customeTheme} from './customeTheme';
import {ThemeContext} from './themeContext';

export const ThemeProvider: React.FunctionComponent = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);

  const themeSwitch = () => <Switch value={darkMode} onValueChange={setDarkMode} /> 
  
  return (
    <ThemeContext.Provider value={darkMode ? customeDarkTheme : customeTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
