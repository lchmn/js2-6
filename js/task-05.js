document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.getElementById('name-input');
  const outputEl = document.getElementById('name-output');

  inputEl.addEventListener('input', () => {
    outputEl.textContent = inputEl.value.trim() === '' ? 'Anonymous' : inputEl.value;
  });
});
