const grid = document.getElementById('grid');

function createGrid() {
    for (let i = 0; i < 16; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        grid.append(square);
    }
}

createGrid();