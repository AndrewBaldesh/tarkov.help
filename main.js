import './style.css';

const modal = document.querySelector('#modal');
const openModal = document.querySelector('.register-button');
const openModal2 = document.querySelector('.secondary-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
  modal.showModal();
});
openModal2.addEventListener('click', () => {
  modal.showModal();
});

modal.addEventListener('click', (e) => {
  if (e.target.nodeName === 'DIALOG') {
    modal.close();
  }
});

closeModal.addEventListener('click', () => {
  modal.setAttribute('closing', '');

  modal.addEventListener(
    'animationend',
    () => {
      modal.removeAttribute('closing');
      modal.close();
    },
    { once: true }
  );
});
