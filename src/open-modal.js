import galleryItems from './gallery-items';
import { refs } from './refs';
export default function openModalImg(e) {
  e.preventDefault();
  if (e.currentTarget !== e.target) {
    refs.modal.classList.add('is-open');
    galleryItems.map(img => {
      if (img.preview === e.target.src) {
        refs.modalImg.src = img.original;
        refs.modalImg.alt = img.description;
      }
    });
  }
}
