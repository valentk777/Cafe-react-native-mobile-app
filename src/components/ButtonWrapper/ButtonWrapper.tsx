import React, {useContext} from 'react';
import {ButtonProps, Pressable, StyleSheet, Text} from 'react-native';
import {customeTheme} from '../../styles/customeTheme';
import {ThemeContext} from '../../contexts/themeContext';

export enum ButtonTypes {
  Primary,
  Secondary,
}

interface ExpandedButtonProps extends ButtonProps {
  type: ButtonTypes;
}

export const Button = (props: ExpandedButtonProps) => {
  const {onPress, title, type} = props;

  const {theme} = useContext(ThemeContext);
  const styles = createStyles(theme);

  return (
    <Pressable
      style={
        type == ButtonTypes.Primary
          ? styles.buttonPrimary
          : styles.buttonSecondary
      }
      onPress={onPress}>
      <Text
        style={
          type == ButtonTypes.Primary
            ? styles.textPrimary
            : styles.textSecondary
        }>
        {title}
      </Text>
    </Pressable>
  );
};

const createStyles = (theme: typeof customeTheme) => {
  const styles = StyleSheet.create({
    buttonPrimary: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 10,
      backgroundColor: theme.colors.primary,
      marginBottom: 20,
    },
    textPrimary: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      color: theme.colors.secondary,
    },
    buttonSecondary: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 10,
      backgroundColor: theme.colors.secondary,
      borderColor: theme.colors.primary,
      borderWidth: 3,
    },
    textSecondary: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: theme.colors.primary,
    },
  });
  return styles;
};
