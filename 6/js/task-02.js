document.addEventListener('DOMContentLoaded', () => {
  const ingredientsList = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  const ul = document.getElementById('ingredients');
  const fragment = document.createDocumentFragment();

  ingredientsList.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    li.classList.add('item');
    fragment.appendChild(li);
  });

  ul.appendChild(fragment);
});
