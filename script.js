//DOM selectors and variables
const board = document.querySelector('.board');
const clearButton = document.querySelector('.options-buttons');
const optionsWindow = document.querySelector('.options');

const gridSlider = document.querySelector('.slider');
let sliderValue = gridSlider.value;
sliderValue = 16; // The dafult value for the 16x16 resolution
const sliderValueDisplay = document.createElement('h3');
optionsWindow.appendChild(sliderValueDisplay)
sliderValueDisplay.textContent = gridSlider.value + 'x' + gridSlider.value;
gridSlider.addEventListener ('input', function() {
    sliderValueDisplay.textContent = gridSlider.value + 'x' + gridSlider.value;
})

const confirmGrid = document.createElement('button');
optionsWindow.appendChild(confirmGrid);
confirmGrid.classList.add('options-buttons')
confirmGrid.textContent = 'Confirm Size'

//Board and square values
let squaresPerSide = sliderValue; 
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
createGrid(sliderValue);