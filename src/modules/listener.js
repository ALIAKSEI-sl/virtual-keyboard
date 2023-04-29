import { actionsBackspace, actionsDelete, actionsInput } from './actions.js';
import changeMarkup from './changeMarkup.js';

const inputField = document.querySelector('.input-field');
const wrapper = document.querySelector('.wrapper');

const parameters = {
  language: 'ru',
  caseUp: false,
  caps: false,
};

function inputContent(key, code, content) {
  switch (code) {
    case 'Backspace':
      actionsBackspace(inputField);
      break;
    case 'Delete':
      actionsDelete(inputField);
      break;
    case 'Enter':
      actionsInput(inputField, '\n');
      break;
    case 'ShiftRight':
      parameters.caseUp = !parameters.caseUp;
      changeMarkup(parameters);
      break;
    case 'ControlRight':
    case 'AltRight':
    case 'AltLeft':
    case 'MetaLeft':
    case 'ControlLeft':
      break;
    case 'ShiftLeft':
      parameters.caseUp = !parameters.caseUp;
      changeMarkup(parameters);
      break;
    case 'CapsLock':
      key.classList.toggle('active');
      parameters.caps = !parameters.caps;
      changeMarkup(parameters);
      break;
    case 'Tab':
      actionsInput(inputField, '  ');
      break;
    default:
      actionsInput(inputField, content);
  }
}

document.addEventListener('keydown', (event) => {
  event.preventDefault();

  const { code } = event;
  const key = document.querySelector(`.${code}`);
  if (key) {
    const keyLang = Array.from(key.children).find(
      (item) => !item.classList.contains('hidden'),
    );
    const content = Array.from(keyLang.children).find(
      (item) => !item.classList.contains('hidden'),
    ).textContent;

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      if (!event.repeat) {
        inputContent(key, code, content);
        key.classList.add('active');
      }
    } else {
      key.classList.add('active');
      inputContent(key, code, content);
    }
  }

  if (code === 'AltLeft' && event.ctrlKey) {
    parameters.language = parameters.language === 'ru' ? 'eng' : 'ru';
    changeMarkup(parameters);
  }
});

document.addEventListener('keyup', (event) => {
  const { code } = event;
  if (code) {
    const key = document.querySelector(`.${code}`);
    if (key) {
      if ((code === 'ShiftLeft' || code === 'ShiftRight') && !event.repeat) {
        key.classList.remove('active');
        parameters.caseUp = !parameters.caseUp;
        changeMarkup(parameters);
      } else if (code !== 'CapsLock') {
        key.classList.remove('active');
      }
    }
  }
});

wrapper.addEventListener('mousedown', (event) => {
  const key = event.target.parentElement.parentElement;
  const content = event.target.textContent;
  if (key.classList.contains('key')) {
    const code = key.className.split(' ')[1];
    if (code !== 'CapsLock') {
      key.style.borderRadius = '50px';
    }
    inputContent(key, code, content);
  }
});

wrapper.addEventListener('mouseup', (event) => {
  const key = event.target.parentElement.parentElement;
  if (key.classList.contains('key')) {
    const code = key.className.split(' ')[1];
    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      key.style.borderRadius = '';
      parameters.caseUp = !parameters.caseUp;
      changeMarkup(parameters);
    } else if (code !== 'CapsLock') {
      key.style.borderRadius = '';
    }
  }
});
