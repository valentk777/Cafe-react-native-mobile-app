const palette = {
  purple: '#414BB2',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#0B0B0B',
  white: '#F0F2F3',
};

export const customeTheme = {
  colors: {
    primary: palette.purple,
    secondary: palette.white,
    background: palette.green,
    card: palette.green,
    text: palette.green,
    border: palette.green,
    notification: palette.green,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  text: {
    header: {
      fontFamily: 'Raleway',
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Merriweather',
      fontSize: 16,
    },
  },
};

export const customeDarkTheme = {
  ...customeTheme,
  colors: {
    ...customeTheme.colors,
    background: palette.black,
    foreground: palette.white,
  },
};
