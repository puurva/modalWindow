'use strict';
const modal = document.querySelector('.modal');
console.log(modal);
const overlay = document.querySelector('.overlay');
console.log(overlay);

const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
console.log(btnsOpenModal);
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
