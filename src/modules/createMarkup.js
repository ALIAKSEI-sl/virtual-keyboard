import createKey from './createKey.js';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.prepend(wrapper);

const title = document.createElement('p');
title.classList.add('title');
title.textContent = 'RSS Виртуальна клавиатура';
wrapper.append(title);

const inputField = document.createElement('textarea');
inputField.classList.add('input-field');
wrapper.append(inputField);

const keyboardBlock = document.createElement('div');
keyboardBlock.classList.add('keyboard-block');
wrapper.append(keyboardBlock);

const descriptionOs = document.createElement('p');
descriptionOs.classList.add('description');
descriptionOs.textContent = 'RSS Виртуальная клавиатура';
wrapper.append(descriptionOs);

const descriptionLang = document.createElement('p');
descriptionLang.classList.add('description');
descriptionLang.textContent = 'Для переключения языка комбинация левые ctrl + alt';
wrapper.append(descriptionLang);

const rows = [];
for (let i = 0; i <= 4; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  keyboardBlock.append(row);
  rows.push(row);
}

for (let i = 0; i <= 13; i++) {
  const key = createKey('first', i);
  rows[0].append(key);
}

for (let i = 0; i <= 14; i++) {
  const key = createKey('second', i);
  rows[1].append(key);
}

for (let i = 0; i <= 12; i++) {
  const key = createKey('third', i);
  rows[2].append(key);
}

for (let i = 0; i <= 12; i++) {
  const key = createKey('fourth', i);
  rows[3].append(key);
}

for (let i = 0; i <= 8; i++) {
  const key = createKey('fifth', i);
  rows[4].append(key);
}
