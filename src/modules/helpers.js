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

export function changMarkup(parameters) {
  console.log(parameters);
}
