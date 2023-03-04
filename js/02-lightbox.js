import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// it`s gallery DOM element
const galleryContainer = document.querySelector(".gallery");
// creating (rendering) card  
const card = galleryItems.map(obj => {
    const { description, preview, original } = obj;
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src=${preview} alt="${description}" />
</a>
    `
}).join("")
// Edding card in the gallary
galleryContainer.insertAdjacentHTML("beforeend", card);

