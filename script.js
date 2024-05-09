//DOM selectors and variables
const board = document.querySelector('.board');
const clearButton = document.querySelector('.clear-button');
const optionsWindow = document.querySelector('.options');
//Board and square values
let squaresPerSide = 16; // The dafult value for the 16x16 resolution
let squareSize = 600 / squaresPerSide; // 600 => Board height/width


function createGrid(squareAmount){
    for (let i = 0; i < squareAmount*squareAmount; i++){
        const square = document.createElement('div');
        square.style.backgroundColor = 'var(--text)';
        square.style.width = `${squareSize}px`;
        square.style.height= `${squareSize}px`;
        board.appendChild(square);
    }
}
//Default Board
createGrid(squaresPerSide);