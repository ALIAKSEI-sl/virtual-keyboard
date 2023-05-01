const keys = document.querySelectorAll('.key');

function changeKey(lang, status) {
  keys.forEach((key) => {
    Array.from(key.children).forEach((langKey) => {
      if (langKey.classList.contains(lang)) {
        langKey.classList.remove('hidden');
        Array.from(langKey.children).forEach((item) => {
          if (item.classList.contains(status)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      } else {
        langKey.classList.add('hidden');
        Array.from(langKey.children).forEach((item) => {
          item.classList.add('hidden');
        });
      }
    });
  });
}

export default function changeMarkup(parameters) {
  if (parameters.language === 'ru') {
    if (parameters.caseUp && parameters.caps) {
      changeKey('ru', 'shiftCaps');
    } else if (parameters.caseUp) {
      changeKey('ru', 'caseUp');
    } else if (parameters.caps) {
      changeKey('ru', 'caps');
    } else {
      changeKey('ru', 'caseDown');
    }
  } else {
    if (parameters.caseUp && parameters.caps) {
      changeKey('eng', 'shiftCaps');
    } else if (parameters.caseUp) {
      changeKey('eng', 'caseUp');
    } else if (parameters.caps) {
      changeKey('eng', 'caps');
    } else {
      changeKey('eng', 'caseDown');
    }
  }
}
