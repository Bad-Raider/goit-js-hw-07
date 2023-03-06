import { galleryItems } from './gallery-items.js';
// it`s gallery DOM element
const galleryContainer = document.querySelector(".gallery");
// creating (rendering) card  
function createElementMarkup(markup) {
    return markup.map(({ description, preview, original }) => {
    
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image lazyload"
            data-src=${preview}
            data-source=${original}
            alt="${description}"
        />
        </a>
    </div>
    `
    }).join("")
};
// Edding card in the gallary
galleryContainer.insertAdjacentHTML("beforeend",
    createElementMarkup(galleryItems));

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
    `,
    //options modal 
        {
        onShow: () => { 
            document.addEventListener("keydown", handleCloseModalKeyEsc);
            },
        onClose: () => {
            document.removeEventListener("keydown", handleCloseModalKeyEsc) 
            }
        }
    );
    // show modal element
    modal.show();
    // handler closed model key "esc"
    function handleCloseModalKeyEsc (event) {
            if (event.key === "Escape") {
                modal.close();
        }
    } 
}

galleryContainer.addEventListener("click", handleOpenModalShowOriginalPicture);


 


