const categories = document.querySelectorAll('ul#categories .item');

console.log(`Total categories: ${categories.length}`);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const itemsInCategory = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements in category: ${itemsInCategory}`);
});