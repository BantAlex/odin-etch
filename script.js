//DOM selectors and creations 
let board = document.querySelector('.board');
let options = document.querySelector('.options');
let clearButton = document.querySelector('.clear-button');

let square = document.createElement('div');
square.classList.add('squares');
square.style.backgroundColor = 'green';

board.appendChild(square);

