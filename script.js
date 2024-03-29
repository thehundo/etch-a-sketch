//Create a variable for grid size and set to 16
let gridSize = 16;
const gridPixels = 960;
//let boxPixels = gridPixels / gridSize + "px";
//Create a variable for a new div container element
const grid = document.querySelector("#grid");
//Create a variable for resetGrid button element
const resetButton = document.querySelector("#resetGrid");


makeGrid(gridSize);

//Add a loop to create a div for each row grid
function makeGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        grid.appendChild(row);
        for (w = 0; w < gridSize; w++) {
            let box = document.createElement("div");
            box.setAttribute("class", "box");
            let boxPixels = gridPixels / gridSize + "px";
            box.setAttribute("style", "height: " + boxPixels);
            box.textContent = " ";
            box.addEventListener("mouseover", () => {
                box.setAttribute("id", "highlight")
            })
            row.appendChild(box);
        };
    };
};
const boxes = document.querySelectorAll("box");


//Add a 'click' event listener to resetGrid button
resetButton.addEventListener('click', () => {
    gridSize = prompt("Enter a new grid size");
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    return makeGrid(gridSize);
});

//Prompt for grid width (units)
//Set gridSize equal to user input
//Append new grid to #grid

/* boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.setAttribute("style", "color: red");
    });
}); */

/* box.addEventListener("onmouseover", function(e) {
    e.setAttribute("class", "highlight");
}); */