let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

let PEN = new Intl.NumberFormat('es-PE', {
  style: 'currency',
  currency: 'PEN',
});

const FormatCoin = (coin: number, currency: string) => {
  let result;
  if (currency === 'USD') {
    result = USDollar.format(coin);
  } else {
    result = PEN.format(coin);
  }
  // quitar ceros de los decimales
  result = result.replace(/\.00/, '');
  return result;
};

export default FormatCoin;
