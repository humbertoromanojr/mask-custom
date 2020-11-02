/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';

import Input from './components/Input';

const App = () => {
  const [cep, setCep] = useState('');

  const handleInputCustom = (value: string) => {
    console.log(value);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0c0577', alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar barStyle="light-content" backgroundColor="#0c0577" />

      <Input
      mask="cep"
      value={cep}
      inputMaskChange={(text: string) => handleInputCustom(text)} />

    </View>
  );
};

export default App;
