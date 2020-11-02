export const maskCep = (value: string) => {
  value = value.replace(/\D/g, ''); // 123456789
  value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  return value;
};

export const maskPhone = (value: string) => {
  value = value.replace(/\D/g, ''); // 123456789
  // (99)9999-9999
  value = value.replace(/^(\d{2})(\d)/g, '($1)$2'); // (99)9999
  value = value.replace(/(\d)(\d{4})$/, '$1-$2'); //-9999
  return value;
};

export const maskCurrency = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
  return value;
};
