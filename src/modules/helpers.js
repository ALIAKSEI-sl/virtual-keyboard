const keys = document.querySelectorAll('.key');

export function actionsBackspace(inputField) {
  const selection = window.getSelection();
  const startPosition = inputField.selectionStart;
  const endPosition = inputField.selectionEnd;
  if (startPosition === endPosition) {
    if (startPosition !== 0) {
      inputField.value = inputField.value.slice(0, startPosition - 1)
      + inputField.value.slice(startPosition);
      inputField.selectionStart = startPosition - 1;
      inputField.selectionEnd = startPosition - 1;
    }
  } else {
    inputField.value = inputField.value.slice(0, startPosition)
      + inputField.value.slice(endPosition);
    inputField.selectionStart = startPosition;
    inputField.selectionEnd = startPosition;
  }
  selection.removeAllRanges();
}

export function actionsDelete(inputField) {
  const selection = window.getSelection();
  const startPosition = inputField.selectionStart;
  const endPosition = inputField.selectionEnd;
  if (startPosition === endPosition) {
    if (startPosition !== inputField.value.length) {
      inputField.value = inputField.value.slice(0, startPosition)
      + inputField.value.slice(startPosition + 1);
      inputField.selectionStart = startPosition;
      inputField.selectionEnd = startPosition;
    }
  } else {
    inputField.value = inputField.value.slice(0, startPosition)
      + inputField.value.slice(endPosition);
    inputField.selectionStart = startPosition;
    inputField.selectionEnd = startPosition;
  }
  selection.removeAllRanges();
}

export function actionsInput(inputField, content) {
  const selection = window.getSelection();
  const startPosition = inputField.selectionStart;
  inputField.value = inputField.value.slice(0, startPosition)
  + content
  + inputField.value.slice(startPosition);
  inputField.selectionStart = startPosition + content.length;
  inputField.selectionEnd = startPosition + content.length;
  selection.removeAllRanges();
}

export function render(lang, status) {
  keys.forEach((key) => {
    const itemsLang = Array.from(key.children);
    itemsLang.forEach((langKey) => {
      if (langKey.classList.contains(lang)) {
        langKey.classList.remove('hidden');
        const itemLang = langKey.children;
        const items = Array.from(itemLang);
        items.forEach((item) => {
          if (item.classList.contains(status)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      } else {
        const itemLang = langKey.children;
        langKey.classList.add('hidden');
        const items = Array.from(itemLang);
        items.forEach((item) => {
          item.classList.add('hidden');
        });
      }
    });
  });
}

export function changMarkup(parameters) {
  if (parameters.language === 'ru') {
    if (parameters.caseUp && parameters.caps) {
      render('ru', 'shiftCaps');
    } else if (parameters.caseUp) {
      render('ru', 'caseUp');
    } else if (parameters.caps) {
      render('ru', 'caps');
    } else {
      render('ru', 'caseDown');
    }
  } else {
    if (parameters.caseUp && parameters.caps) {
      render('eng', 'shiftCaps');
    } else if (parameters.caseUp) {
      render('eng', 'caseUp');
    } else if (parameters.caps) {
      render('eng', 'caps');
    } else {
      render('eng', 'caseDown');
    }
  }
}
