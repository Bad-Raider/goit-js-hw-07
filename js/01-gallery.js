import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const modal = document.querySelector(".modal");

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
// Edding card in gallary
galleryContainer.insertAdjacentHTML("beforeend", card);
// handler show modal
const handleOpenModalShowOriginalPicture = (event) => {
    // default link open
    event.preventDefault();
    // link big picture
    const linkOriginalPicture = event.target.dataset.source;
    // modal
    const modul = basicLightbox.create(`
    <div class="modal">
        <img src="${linkOriginalPicture}" >
    </div>
    `);
    // showing modul
    modul.show();
    // closed model key "esc"
    document.body.addEventListener("keydown",
        function (event) {
            if (event.key === "Escape") {
                modul.close();
        }
    });  
}

galleryContainer.addEventListener("click", handleOpenModalShowOriginalPicture);


 


