import React from 'react';
import {Button, ButtonProps, StyleSheet, Text, View} from 'react-native';
export enum ButtonTypes {
  Primary,
  Secondary,
}
interface ButtonWrapperProps extends ButtonProps {
  type: ButtonTypes;
}

export const ButtonWrapper: React.FC<ButtonWrapperProps> = props => {
  const {type, ...rest} = props;
  return (
    <View style={styles.buttonContainer}>
      <Button
        color={type == ButtonTypes.Primary ? '#f194ff' : '#ff0'}
        {...rest}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
  },
  red: {
    color: 'red',
  },
});
