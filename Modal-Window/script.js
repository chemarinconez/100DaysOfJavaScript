'use strict';

// Manipulating classes is the main way in which we manipulate webpages

// First select the elements I'll need and then store them into variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelector('.show-modal'); // Only Select the first class with that name
const btnsOpenModal = document.querySelectorAll('.show-modal'); // Select all the elements with the class .show-modal

const openModal = () => {
  // console.log('Button Clicked');
  modal.classList.remove('hidden'); // Delete the class .hidden from the selected element.
  overlay.classList.remove('hidden');
}

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);


btnCloseModal.addEventListener('click', closeModal); // we don't use closeModal() to call the function when JS get to this line but we want when 'click' event happens it call that function. 

overlay.addEventListener('click', closeModal);


// Keyboard events are so called global events (the don't occur on one specific element) --> keydown, keypress, keyup
document.addEventListener('keydown', function (e) {
  //console.log('A key was pressed');
  // console.log(e.key); // Shows an object called 'KeyboardEvent' where you get information about the key was pressed.

  if (e.key === "Escape" && !modal.classList.contains('hidden')) {
    closeModal(); // in this case I do have to call this function because when the program reaches this line and if it's true, something needs to happen.
  }
})