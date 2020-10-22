import galleryItems from './gallery-items';
import { refs } from './refs';
import closeModal from './close-modal';
export default function keyboardPressEvents(event) {
  const urlsArr = galleryItems.map(el => el.original);
  const altsArr = galleryItems.map(el => el.description);

  if (event.code === 'Escape') {
    closeModal();
  }

  if (event.code === 'ArrowRight') {
    for (let i = 0; i < urlsArr.length; i += 1) {
      if (refs.modalImg.src === urlsArr[urlsArr.length - 1]) {
        refs.modalImg.src = `${urlsArr[0]}`;
        refs.modalImg.alt = `${altsArr[0]}`;
        return;
      }

      if (refs.modalImg.src === urlsArr[i]) {
        refs.modalImg.src = `${urlsArr[i + 1]}`;
        refs.modalImg.alt = `${altsArr[i + 1]}`;
        return;
      }
    }
  }
  if (event.code === 'ArrowLeft') {
    for (let i = 0; i < urlsArr.length; i += 1) {
      if (refs.modalImg.src === urlsArr[0]) {
        refs.modalImg.src = `${urlsArr[urlsArr.length - 1]}`;
        refs.modalImg.alt = `${altsArr[altsArr.length - 1]}`;
        return;
      }

      if (refs.modalImg.src === urlsArr[i]) {
        refs.modalImg.src = `${urlsArr[i - 1]}`;
        refs.modalImg.alt = `${altsArr[i - 1]}`;
        return;
      }
    }
  }
}
