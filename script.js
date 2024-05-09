//DOM selectors and variables
const board = document.querySelector('.board');
const clearButton = document.querySelector('.clear-button');
const optionsWindow = document.querySelector('.options')

let boardSize = 256; // Default Value for 16x16
let squareSize = 16; //Default value for 16x16
let squareAmount = boardSize / squareSize; // Default Value for 16x16

board.style.width = `${boardSize}px`;
board.style.height = `${boardSize}px`;
optionsWindow.style.width = `${boardSize * 1.5}px`;


function createDeafultGrid(){
    for (let i = 0; i < (squareSize * squareSize); i++){
        const square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.style.width = `${squareSize}px`;
        square.style.height= `${squareSize}px`;
        board.appendChild(square);
    }
}

createDeafultGrid();