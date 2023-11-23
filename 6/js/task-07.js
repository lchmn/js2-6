document.addEventListener('DOMContentLoaded', () => {
  const fontSizeControl = document.getElementById('font-size-control');
  const text = document.getElementById('text');

  // Функція для оновлення розміру шрифту
  function updateFontSize() {
    text.style.fontSize = fontSizeControl.value + 'px';
  }

  // Встановлення початкового розміру шрифту
  updateFontSize();

  // Додавання обробника події
  fontSizeControl.addEventListener('input', updateFontSize);
});
