import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// it`s gallery DOM element
const galleryContainer = document.querySelector(".gallery");
// creating (rendering) card  
function createElementMarkup(markup) {
   return markup.map(({ description, preview, original }) => {
    
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" loading="lazy" src=${preview} alt="${description}" />
</a>
    `
}).join("")}
// Edding card in the gallary
galleryContainer.insertAdjacentHTML("beforeend",
    createElementMarkup(galleryItems));
// simple light box
const lightbox = new SimpleLightbox('.gallery a',
    {
    captionsData: "alt",
    }
);

lightbox.on('show.simplelightbox'); 







