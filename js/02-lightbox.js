import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
// console.log("galleryContainer", galleryContainer);
const cardsGallery = createGalleryItems(galleryItems);
// console.log(cardsGallery);
galleryContainer.insertAdjacentHTML("beforeend", cardsGallery);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>

    `;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
console.log(lightbox);