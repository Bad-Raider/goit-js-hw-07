import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const card = galleryItems.map(obj => {
    const { description, preview, original } = obj;
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
            class="gallery__image"
            src="small-image.jpg"
            data-source="large-image.jpg"
            alt=${description}
        />
        </a>
    </div>
    `
})

console.log(galleryContainer);

// Визначити як створити елемент
// Визначити як створити повноцінну галерею
//  Дослідити питання готових галерей