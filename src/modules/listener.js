import {
  actionsBackspace,
  actionsDelete,
  actionsInput,
  changMarkup,
} from './helpers.js';

const inputField = document.querySelector('.input-field');
const wrapper = document.querySelector('.wrapper');

const parameters = {
  language: 'ru',
  caseUp: false,
  caps: false,
};

function test(key, code, content) {
  switch (code) {
    case ('Backspace'): actionsBackspace(inputField);
      break;
    case ('Delete'): actionsDelete(inputField);
      break;
    case ('Enter'): actionsInput(inputField, '\n');
      break;
    case ('ShiftRight'):
      parameters.caseUp = !parameters.caseUp;
      changMarkup(parameters);
      break;
    case ('ControlRight'):
    case ('AltRight'):
    case ('AltLeft'):
    case ('MetaLeft'):
    case ('ControlLeft'):
      break;
    case ('ShiftLeft'):
      parameters.caseUp = !parameters.caseUp;
      changMarkup(parameters);
      break;
    case ('CapsLock'):
      key.classList.toggle('active');
      parameters.caps = !parameters.caps;
      changMarkup(parameters);
      break;
    case ('Tab'): actionsInput(inputField, '  ');
      break;
    default:
      actionsInput(inputField, content);
  }
}

document.addEventListener('keydown', (event) => {
  // inputField.focus();
  event.preventDefault();

  const key = document.querySelector(`.${event.code}`);
  if (key) {
    const span = Array.from(key.children).find((item) => !item.classList.contains('hidden'));
    const content = Array.from(span.children).find((item) => !item.classList.contains('hidden')).textContent;
    if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
      if (!event.repeat) {
        test(key, event.code, content);
        key.classList.add('active');
      }
    } else if (event.code === 'CapsLock') {
      // key.classList.toggle('active');
      test(key, event.code, content);
    } else {
      key.classList.add('active');
      test(key, event.code, content);
    }
    // if (event.code === 'Tab') {
    //   key.classList.add('active');
    //   const startPosition = inputField.selectionStart;
    //   actionsInput(inputField, '  ');
    //   inputField.selectionStart = startPosition + 2;
    // } else if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && !event.repeat) {
    //   key.classList.add('active');
    //   parameters.caseUp = !parameters.caseUp;
    //   changMarkup(parameters);
    // } else if (event.code === 'CapsLock') {
    //   key.classList.toggle('active');
    //   parameters.caps = !parameters.caps;
    //   changMarkup(parameters);
    // } else {
    //   key.classList.add('active');
    // }
  }

  if ((event.code === 'AltLeft' && event.ctrlKey)) {
    parameters.language = parameters.language === 'ru' ? 'eng' : 'ru';
    changMarkup(parameters);
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code) {
    const key = document.querySelector(`.${event.code}`);
    if (key) {
      if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && !event.repeat) {
        key.classList.remove('active');
        parameters.caseUp = !parameters.caseUp;
        changMarkup(parameters);
      } else if (event.code !== 'CapsLock') {
        key.classList.remove('active');
      }
    }
  }
});

wrapper.addEventListener('mousedown', (event) => {
  const key = event.target.parentElement.parentElement;
  if (key.classList.contains('key')) {
    const code = key.className.split(' ')[1];
    if (code !== 'CapsLock') {
      key.style.borderRadius = '50px';
    }
    test(key, code, event.target.textContent);
  }
});

wrapper.addEventListener('mouseup', (event) => {
  const key = event.target.parentElement.parentElement;
  if (key.classList.contains('key')) {
    const code = key.className.split(' ')[1];
    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      key.style.borderRadius = '';
      parameters.caseUp = !parameters.caseUp;
      changMarkup(parameters);
    } else if (code !== 'CapsLock') {
      key.style.borderRadius = '';
    }
  }
});
