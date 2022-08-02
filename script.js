const grid = document.getElementById("grid");
const selectBtn = document.getElementById("sqr-select-btn");
let gridHeight = grid.getBoundingClientRect().height;
let gridWidth = grid.getBoundingClientRect().width;
console.log(gridWidth);

function createGrid() {
  let selectSqrs;
  let square;

  selectBtn.addEventListener("click", () => {
    grid.remove(square);
    selectBtn.style.backgroundColor = "blue";
    selectSqrs = Number(
      prompt("Select the number of squares you would like on your grid")
    );

    if (selectSqrs <= 100) {
      for (let i = 0; i < selectSqrs ** 2; i++) {
        square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${
          (gridWidth - 4 - selectSqrs * 2) / selectSqrs
        }px`;
        square.style.height = `${
          (gridHeight - 4 - selectSqrs * 2) / selectSqrs
        }px`;
        console.log(square.style.width);
        grid.append(square);
        square.addEventListener("mouseover", () => {
          square.style.backgroundColor = "red";
        });
      }
    } else {
      alert("Number too high");
    }
  });
}

createGrid();

function init() {
  grid.remove(square);
}
