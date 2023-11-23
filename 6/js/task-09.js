document.addEventListener('DOMContentLoaded', () => {
  const changeColorButton = document.querySelector('.change-color');
  const colorValueSpan = document.querySelector('.color');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  changeColorButton.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    colorValueSpan.textContent = newColor;
  });
});