/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';

import Input from './components/Input';

const App = () => {
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  const [currency, setCurrency] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#0c0577', alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar barStyle="light-content" backgroundColor="#0c0577" />

      <Input
        mask="cep"
        maxLength={9}
        value={cep}
        placeholder="Digite o CEP"
        inputMaskChange={(text: string) => setCep(text)}
      />

      <Input
        mask="phone"
        maxLength={14}
        value={phone}
        placeholder="Digite o Telefone"
        inputMaskChange={(text: string) => setPhone(text)}
      />

      <Input
        mask="currency"
        value={currency}
        placeholder="Digite o Valor"
        inputMaskChange={(text: string) => setCurrency(text)}
      />

    </View>
  );
};

export default App;
