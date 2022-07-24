
const gridSize = 16;
createGrid(gridSize);


const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => window.location.reload());

const eraser = document.querySelector('#eraser')
eraser.addEventListener('click', toggleEraser);

const gridsizeButton = document.querySelector('#grid-size');
gridsizeButton.addEventListener('click', changeGridSize);


function toggleEraser() {
    let boxes = document.querySelectorAll('.grid-element');
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        if (mouseDown == true) box.classList.toggle('hovered')}));
    boxes.forEach(box => box.addEventListener('click', () => box.classList.toggle('hovered')));

    this.classList.toggle('enabled'); //show eraser button on/off
}



function createGrid(gridSize) {
    const container = document.querySelector('#grid-container');
    let boxSize = 100/gridSize + '%';
    for (let i = 0; i < gridSize * gridSize; i++) {
        let box = document.createElement('div');
        box.classList.add('grid-element')
        box.style.cssText = `width: ${boxSize}; height: ${boxSize};`
        container.appendChild(box);
    }

    draw();
}

function draw() {
    let mouseDown = false;
    window.addEventListener('mousedown', () => mouseDown = true);
    window.addEventListener('mouseup', () => mouseDown = false);

    let boxes = document.querySelectorAll('.grid-element');
    boxes.forEach(box => box.addEventListener('mouseover', () => {
    if (mouseDown == true) box.classList.add('hovered')}));
    boxes.forEach(box => box.addEventListener('click', () => box.classList.add('hovered')));
}

function changeGridSize() {
    let gridSize;
    do {
        gridSize = prompt('Enter Grid Size. Min: 4  Max: 64');
    } while (gridSize < 4 || gridSize > 64)
    let boxes = document.querySelectorAll('.grid-element');
    boxes.forEach(box => box.remove());
    
    createGrid(gridSize);
}