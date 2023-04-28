const inputField = document.querySelector('.input-field');

document.addEventListener('keydown', () => {
  inputField.focus();
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' && event.altKey) {
    // код
  }
});
