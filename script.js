//DOM selectors and creations 
let board = document.querySelector('.board');
let options = document.querySelector('.options');
let clearButton = document.querySelector('.clear-button');
let capacity = 2303;


for (let i = 0; i <= capacity; i++){
    let square = document.createElement('div');
    square.classList.add('squares');
    board.appendChild(square);
}
