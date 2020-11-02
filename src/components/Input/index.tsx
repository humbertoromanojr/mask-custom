/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import { maskCep } from '../utils/mask';

interface InputProps extends TextInputProps {
  mask: 'cep' | 'prone' | 'currency';
  inputMaskChange: any;
}

const Input = ({ mask, inputMaskChange, ...rest }: InputProps) => {

  const handleChange = (text: string) => {
    const value = maskCep(text);
    inputMaskChange(value);
  };

  return (
    <>
      <TextInput
      style={styles.input}
      onChangeText={text => handleChange(text)}
      { ...rest }
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff',
    height: 50,
    width: 200,
    borderRadius: 26,
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: 16,
  },
});
