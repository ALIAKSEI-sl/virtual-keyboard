import keys from './keys.js';

export default function createKey(row, numberRow) {
  const date = keys[row][numberRow];
  const key = document.createElement('div');
  key.classList.add('key', date.key);

  const ru = document.createElement('span');
  ru.classList.add('ru');
  const eng = document.createElement('span');
  eng.classList.add('eng', 'hidden');

  const caseDownRu = document.createElement('span');
  caseDownRu.textContent = date.ru.caseDown;
  caseDownRu.classList.add('caseDown');
  ru.append(caseDownRu);

  const caseUpRu = document.createElement('span');
  caseUpRu.textContent = date.ru.caseUp;
  caseUpRu.classList.add('caseUp', 'hidden');
  ru.append(caseUpRu);

  const capsRu = document.createElement('span');
  capsRu.textContent = date.ru.caps;
  capsRu.classList.add('caps', 'hidden');
  ru.append(capsRu);

  const shiftCapsRu = document.createElement('span');
  shiftCapsRu.textContent = date.ru.shiftCaps;
  shiftCapsRu.classList.add('shiftCaps', 'hidden');
  ru.append(shiftCapsRu);

  const caseDownEng = document.createElement('span');
  caseDownEng.textContent = date.eng.caseDown;
  caseDownEng.classList.add('caseDown', 'hidden');
  eng.append(caseDownEng);

  const caseUpEng = document.createElement('span');
  caseUpEng.textContent = date.eng.caseUp;
  caseUpEng.classList.add('caseUp', 'hidden');
  eng.append(caseUpEng);

  const capsEng = document.createElement('span');
  capsEng.textContent = date.eng.caps;
  capsEng.classList.add('caps', 'hidden');
  eng.append(capsEng);

  const shiftCapsEng = document.createElement('span');
  shiftCapsEng.textContent = date.eng.shiftCaps;
  shiftCapsEng.classList.add('shiftCaps', 'hidden');
  eng.append(shiftCapsEng);

  key.append(ru);
  key.append(eng);

  return key;
}
