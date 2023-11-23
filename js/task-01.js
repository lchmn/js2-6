
document.addEventListener('DOMContentLoaded', () => {
  const categoriesList = document.getElementById('categories').children;
  console.log(`Number of categories: ${categoriesList.length}`);

  Array.from(categoriesList).forEach(category => {
    const title = category.firstElementChild.textContent;
    const items = category.children[1].children.length;
    console.log(`Category: ${title}\nElements: ${items}`);
  });
});