// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);



const divGallery = document.querySelector(".gallery");

// divGallery.addEventListener("click", onImgClick);

divGallery.insertAdjacentHTML("beforeend", createGalleryMarkup());


function createGalleryMarkup() {
    const markup = galleryItems.map(imgMarkupMaker).join("");

    function imgMarkupMaker({ preview, original, description }) {
        return (
            `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src= "${preview}"
                alt= "${description}"
                />
            </a>
            </li>`
        );
    }

    return markup;
}

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});