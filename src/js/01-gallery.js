import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery")

const getMarkup = galleryItems.map(({preview, original, description}, index, array) => {
    // Тело коллбек-функции
    return `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </div>`;
  })
  .join("");


console.log(getMarkup);

galleryContainer.insertAdjacentHTML("afterbegin", getMarkup);

galleryContainer.addEventListener("click", openModal);

function openModal(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") return;

    var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: "alt",
		captionDelay: 250,
     });
}

