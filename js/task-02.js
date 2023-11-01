const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.getElementById('ingredients');

ingredientsList.forEach(ingredient => {
  const li = document.createElement('li'); // Створення нового елемента li
  li.textContent = ingredient; // Додавання текстового вмісту до li
  li.classList.add('item'); // Додавання класу 'item' до li
  
  ingredientsUl.appendChild(li); // Додавання li до списку ul
});