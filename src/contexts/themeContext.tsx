import {createContext} from 'react';
import React, {useState} from 'react';
import {customeDarkTheme, customeTheme} from '../styles/customeTheme';

interface ContextProvider {
  isDarkMode: boolean;
  theme: typeof customeTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProvider>({
  isDarkMode: false,
  theme: customeTheme,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FunctionComponent = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode: darkMode,
        theme: darkMode ? customeDarkTheme : customeTheme,
        toggleTheme: toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
