/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import { maskCep, maskCurrency, maskPhone } from '../utils/mask';

interface InputProps extends TextInputProps {
  mask: 'cep' | 'phone' | 'currency';
  inputMaskChange: any;
}

const Input = ({ mask, inputMaskChange, ...rest }: InputProps) => {

  const handleChange = (text: string) => {
    if (mask === 'cep') {
      const value = maskCep(text);
      inputMaskChange(value);
    }

    if (mask === 'phone') {
      const value = maskPhone(text);
      inputMaskChange(value);
    }

    if ( mask === 'currency') {
      const value = maskCurrency(text);
      inputMaskChange(value);
    }
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
    color: '#0c0577',
    height: 50,
    width: 200,
    borderRadius: 26,
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: 16,
  },
});
