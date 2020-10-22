import galleryItems from './gallery-items';
import { refs } from './refs';
import openModalImg from './open-modal';
import closeModal from './close-modal';
import keyboardPressEvents from './keyboards-events';
import './styles.css';

refs.list.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </li>`,
  )
  .join('');

refs.list.addEventListener('click', openModalImg);

refs.closeModalBtn.addEventListener('click', closeModal);

refs.overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', keyboardPressEvents);
