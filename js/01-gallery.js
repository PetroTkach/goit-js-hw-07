import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

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
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  if (!evt.target.dataset.source) {
    return;
  }
  const cardUrl = evt.target.dataset.source;
  console.log("cardUrl", cardUrl);
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}
