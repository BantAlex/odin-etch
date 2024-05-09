//DOM selectors and variables
const board = document.querySelector('.board');
const clearButton = document.querySelector('.options-buttons');
clearButton.addEventListener('click',() => {createGrid('var(--text)'); createGrid('var(--accent)')});
const optionsWindow = document.querySelector('.options');
const gridSlider = document.querySelector('.slider');
let sliderValue = gridSlider.value;
const sliderValueDisplay = document.createElement('h3');
optionsWindow.appendChild(sliderValueDisplay)
sliderValueDisplay.textContent = gridSlider.value + 'x' + gridSlider.value;
gridSlider.addEventListener ('input', () => {sliderValueDisplay.textContent = gridSlider.value + 'x' + gridSlider.value;});
const confirmGrid = document.createElement('button');
optionsWindow.appendChild(confirmGrid);
confirmGrid.classList.add('options-buttons');
confirmGrid.textContent = 'Confirm Size';

function createGrid(color){
    board.innerHTML = ''; //Damn, should've thought of that...
    let squareSize = 600 / sliderValue; // 600 => Board height/width
    for (let i = 0; i < sliderValue*sliderValue; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = 'var(--text)';
        square.style.width = `${squareSize}px`;
        square.style.height= `${squareSize}px`;
        board.appendChild(square);
        square.addEventListener('mouseover',function(){
            square.style.backgroundColor = color; 
        })
    }
}
createGrid('var(--accent)');
confirmGrid.addEventListener('click',function(){
    sliderValue = gridSlider.value;
    createGrid('var(--accent)');
})