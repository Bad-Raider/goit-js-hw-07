import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryImage = document.querySelector(".gallery__image");

const card = galleryItems.map(obj => {
    const { description, preview, original } = obj;
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt="${description}"
        />
        </a>
    </div>
    `
}).join("")

galleryContainer.insertAdjacentHTML("beforeend", card);

const handleZoomPictureGallery = (event) => {
    event.preventDefault();
    const linkOriginalPicture = event.target.dataset.source;
    console.log(linkOriginalPicture)    
}

galleryContainer.addEventListener("click", handleZoomPictureGallery)

// Визначити як створити елемент
// Визначити як створити повноцінну галерею
//  Дослідити питання готових галерей