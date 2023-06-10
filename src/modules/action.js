class Action {
  backspace(inputField) {
    const selection = window.getSelection();
    const startPosition = inputField.selectionStart;
    const endPosition = inputField.selectionEnd;
    if (startPosition === endPosition) {
      if (startPosition !== 0) {
        inputField.value = inputField.value.slice(0, startPosition - 1)
        + inputField.value.slice(startPosition);
        selection.removeAllRanges();
        inputField.selectionStart = startPosition - 1;
        inputField.selectionEnd = startPosition - 1;
      }
    } else {
      inputField.value = inputField.value.slice(0, startPosition)
      + inputField.value.slice(endPosition);
      selection.removeAllRanges();
      inputField.selectionStart = startPosition;
      inputField.selectionEnd = startPosition;
    }
  }

  delete(inputField) {
    const selection = window.getSelection();
    const startPosition = inputField.selectionStart;
    const endPosition = inputField.selectionEnd;
    if (startPosition === endPosition) {
      if (startPosition !== inputField.value.length) {
        inputField.value = inputField.value.slice(0, startPosition)
        + inputField.value.slice(startPosition + 1);
        selection.removeAllRanges();
        inputField.selectionStart = startPosition;
        inputField.selectionEnd = startPosition;
      }
    } else {
      inputField.value = inputField.value.slice(0, startPosition)
      + inputField.value.slice(endPosition);
      selection.removeAllRanges();
      inputField.selectionStart = startPosition;
      inputField.selectionEnd = startPosition;
    }
  }

  input(inputField, content) {
    const selection = window.getSelection();
    const startPosition = inputField.selectionStart;
    inputField.value = inputField.value.slice(0, startPosition)
    + content + inputField.value.slice(startPosition);
    selection.removeAllRanges();
    inputField.selectionStart = startPosition + content.length;
    inputField.selectionEnd = startPosition + content.length;
  }
}

export default new Action();
