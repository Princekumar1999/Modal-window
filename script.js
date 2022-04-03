'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// SELECT ALL ELEMENT OF THE SAME CLASS
const btnsCloseModal = document.querySelectorAll('.show-modal');

// OPEN MODAL AND OVERLAY
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// CLOSE MODAL AND OVERLAY
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsCloseModal.length; i++)
  btnsCloseModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // HIDDEN THE MODAL IF Esc KEY IS PRESSED}
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
