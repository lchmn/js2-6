import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery');
  const galleryMarkup = createGalleryMarkup(galleryItems);
  galleryContainer.innerHTML = galleryMarkup;

  galleryContainer.addEventListener('click', onGalleryContainerClick);
});

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `).join('');
}

function onGalleryContainerClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const source = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `);

  instance.show();
}
