import { actionsBackspace, actionsDelete, actionsInput } from './helpers.js';

const inputField = document.querySelector('.input-field');
const wrapper = document.querySelector('.wrapper');

document.addEventListener('keydown', (event) => {
  inputField.focus();
  const key = document.querySelector(`.${event.code}`);
  if (key) {
    key.classList.add('active');
    if (event.code === 'Tab') {
      const startPosition = inputField.selectionStart;
      event.preventDefault();
      actionsInput(inputField, '  ');
      inputField.selectionStart = startPosition + 2;
    }
  } else {
    event.preventDefault();
  }

  if ((event.code === 'ShiftLeft' && event.altKey) || (event.code === 'AltLeft' && event.shiftKey)) {
    // console.log(event);
  }
});

document.addEventListener('keyup', (event) => {
  const key = document.querySelector(`.${event.code}`);
  if (key) {
    key.classList.remove('active');
  }
});

wrapper.addEventListener('mousedown', (event) => {
  const key = event.target.parentElement.parentElement;
  if (key.classList.contains('key')) {
    const code = key.className.split(' ')[1];
    key.style.borderRadius = '50px';
    switch (code) {
      case ('Backspace'): actionsBackspace(inputField);
        break;
      case ('Delete'): actionsDelete(inputField);
        break;
      case ('Enter'): inputField.value += '\n';
        break;
      case ('ShiftRight'):
      case ('ControlRight'):
      case ('AltRight'):
      case ('AltLeft'):
      case ('MetaLeft'):
      case ('ControlLeft'):
      case ('ShiftLeft'):
      case ('CapsLock'):
        break;
      case ('Tab'): actionsInput(inputField, '  ');
        break;
      default:
        actionsInput(inputField, event.target.textContent);
    }
  }
});

wrapper.addEventListener('mouseup', (event) => {
  const key = event.target.parentElement.parentElement;
  if (key.classList.contains('key')) {
    key.style.borderRadius = '';
  }
});
