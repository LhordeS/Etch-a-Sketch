const grid = document.getElementById("grid");
const selectBtn = document.getElementById("sqr-select-btn");
let gridHeight = grid.getBoundingClientRect().height;
let gridWidth = grid.getBoundingClientRect().width;

let mouseDown;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createGrid() {
  let selectSqrs;

  selectBtn.addEventListener("click", () => {
    selectBtn.style.backgroundColor = "blue";
    grid.innerHTML = "";
    selectSqrs = Number(
      prompt("Enter the number of squares you would like on your grid")
    );

    if (selectSqrs <= 100) {
      for (let i = 0; i < selectSqrs ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${
          (gridWidth - 4 - selectSqrs * 2) / selectSqrs
        }px`;
        square.style.height = `${
          (gridHeight - 4 - selectSqrs * 2) / selectSqrs
        }px`;
        grid.append(square);
        square.addEventListener("mouseover", changeColor);
        square.addEventListener("mousedown", changeColor);
      }
    } else {
      alert("Number too high");
    }
  });
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) {
    return;
  } else {
    //solid color
    // e.target.style.backgroundColor = "red";

    //random color
    const rgb1 = Math.floor(Math.random() * 255);
    const rgb2 = Math.floor(Math.random() * 255);
    const rgb3 = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
  }
}

createGrid();
