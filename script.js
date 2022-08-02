const grid = document.getElementById('grid');

function createGrid() {
    for (let i = 0; i < 256; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        grid.append(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red';
        })
    }
}

createGrid();