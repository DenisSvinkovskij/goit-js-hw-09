import { refs } from './refs';
export default function closeModal() {
  refs.modal.classList.remove('is-open');
  refs.modalImg.src = '';
  refs.modalImg.alt = '';
}
