document.addEventListener('DOMContentLoaded', (event) => {
    const ingredientsList = [
      "Potatoes",
      "Mushrooms",
      "Garlic",
      "Tomatos",
      "Herbs",
      "Condiments",
    ];

    const ingredientsUl = document.getElementById('ingredients');

    ingredientsList.forEach(ingredient => {
      const li = document.createElement('li'); 
      li.textContent = ingredient; 
      li.classList.add('item'); 

      ingredientsUl.appendChild(li);
    });
});