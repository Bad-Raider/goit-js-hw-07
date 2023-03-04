import { galleryItems } from './gallery-items.js';
// it`s gallery DOM element
const galleryContainer = document.querySelector(".gallery");
// creating (rendering) card  
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
// Edding card in the gallary
galleryContainer.insertAdjacentHTML("beforeend", card);

// handler show modal
const handleOpenModalShowOriginalPicture = (event) => {
    
    // click on img only
    if (event.target.nodeName !== "IMG") {
        return;
    }
    // default link open
    event.preventDefault();

    // link big picture
    const linkOriginalPicture = event.target.dataset.source;
    // creat modal element
    const modal = basicLightbox.create(`
    <div class="modal">
        <img src="${linkOriginalPicture}" >
    </div>
    `);
    // show modal element
    modal.show();
    // closed model key "esc"
    document.body.addEventListener("keydown",
        function (event) {
            if (event.key === "Escape") {
                modal.close();
        }
    });  
}

galleryContainer.addEventListener("click", handleOpenModalShowOriginalPicture);


 


