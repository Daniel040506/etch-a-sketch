
let container = document.querySelector("#container");

let rows = [];

let resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", resetGrid);

function initializeGrid(numSquares) {

    

    for (let i = 0; i < numSquares; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        let squares = [];

        for (let j = 0; j < numSquares; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover",(event)=> {darkenSquare(event.target)});
            squares.push(square);
        }

        squares.forEach((squareItem) => row.appendChild(squareItem));

        rows.push(row);
    }

    rows.forEach((rowItem) => container.appendChild(rowItem));

}

function darkenSquare(square) {
    square.style.backgroundColor = "black";
    console.log("TEST");
}

function resetGrid(){
    let newSize = prompt("please enter a new n x n grid value"); 
    if (newSize > 100) {
        alert ("Please enter a smaller value, this could cause instability");
        return;
    }
    if (!Number.isInteger(newSize) || newSize <= 0) {
        alert("please enter a valid value for the new grid size");
        return;
    }

    rows.forEach((row) => container.removeChild(row));
    rows = [];
    initializeGrid(newSize);

}




initializeGrid(16);