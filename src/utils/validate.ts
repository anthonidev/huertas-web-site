const onlyNumberDecimal = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (
    (!/[0-9]/.test(e.key) &&
      e.key !== '.' &&
      e.key !== 'Backspace' &&
      e.key !== 'Tab') ||
    (e.key === '.' && e.currentTarget.value === '') ||
    (e.key === '.' && e.currentTarget.value.includes('.'))
  ) {
    e.preventDefault();
  }
};
const onlyNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
    e.preventDefault();
  }
};

const onlyLetter = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (
    (!/[a-zA-Z]/.test(e.key) &&
      e.key !== 'Backspace' &&
      e.key !== 'Tab' &&
      e.key !== ' ') ||
    (e.key === '.' && e.currentTarget.value === '') ||
    (e.key === '.' && e.currentTarget.value.includes('.'))
  ) {
    e.preventDefault();
  }
};

export { onlyNumberDecimal, onlyNumber, onlyLetter };
