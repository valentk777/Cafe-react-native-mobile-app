import React from 'react';
import {ButtonProps, Pressable, StyleSheet, Text} from 'react-native';

export enum ButtonTypes {
  Primary,
  Secondary,
}

interface ExpandedButtonProps extends ButtonProps {
  type: ButtonTypes;
}

export const Button = (props: ExpandedButtonProps) => {
  const {onPress, title, type} = props;
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

const styles = StyleSheet.create({
  buttonPrimary: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#414BB2',
    marginBottom: 20,
  },
  textPrimary: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonSecondary: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: '#414BB2',
    borderWidth: 3,
  },
  textSecondary: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#414BB2',
  },
});
