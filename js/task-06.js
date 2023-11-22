document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.getElementById('validation-input');
  const requiredLength = Number(inputEl.dataset.length);

  inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === requiredLength) {
      inputEl.classList.remove('invalid');
      inputEl.classList.add('valid');
    } else {
      inputEl.classList.remove('valid');
      inputEl.classList.add('invalid');
    }
  });
});