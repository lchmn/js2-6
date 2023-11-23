function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  let boxesMarkup = '';
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    boxesMarkup += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()};"></div>`;
    boxSize += 10;
  }

  boxesContainer.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  document.getElementById('boxes').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.querySelector('#controls input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');

  createBtn.addEventListener('click', () => {
    const amount = Number(inputEl.value);
    createBoxes(amount);
  });

  destroyBtn.addEventListener('click', destroyBoxes);
});
