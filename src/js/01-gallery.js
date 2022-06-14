// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector('.gallery');

function createGallaryMarkup(items) {
  return items
    .map(
      item =>
        `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" /></a>`
    )
    .join('');
}

const addGallaryMarkup = createGallaryMarkup(galleryItems);

divRef.insertAdjacentHTML('beforeend', addGallaryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
