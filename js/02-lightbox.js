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

// handler show modal
const handleOpenModalShow = (event) => {
    
    // click on img only
    if (event.target.nodeName !== "IMG") {
        return;
    }
    // default link open
    event.preventDefault();
   //options for light box
    const options = {
    captionsData: "alt",
    showCounter: false
    };
    // simple light box
    const lightbox = new SimpleLightbox('.gallery a', options);
    lightbox.on('show.simplelightbox'); 
}

galleryContainer.addEventListener("click", handleOpenModalShow);







