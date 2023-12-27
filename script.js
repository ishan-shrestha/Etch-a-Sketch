const container = document.querySelector(".container");
const displayText = document.querySelector(".display-text");
const chnageBtn = document.querySelector(".change-button");
const clearBtn = document.querySelector(".clear-button");
const rgbBtn = document.querySelector(".RGB");
let numGrid = 16;

displayText.textContent = `The size of grid: ${numGrid} & ${numGrid}`;
function createDiv() {
    for (let i = 0; i < numGrid; i++){
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);

        for (let j = 0; j < numGrid; j++) {
            const column = document.createElement("div");
            column.className = "column";
            row.appendChild(column);

            column.addEventListener("mousemove", () => {
                column.style.backgroundColor = "red";
            })

            clearBtn.addEventListener("click", () => {
                column.style.backgroundColor = "white";
            })
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


createDiv();

chnageBtn.addEventListener("click", () => {
    const userInput = prompt("Enter a number from 1 to 80");
    if (userInput == null || userInput > 80 || userInput <= 0 || isNaN(userInput)) {
        alert("Re-enter the number between 1 to 80");
        return;
    } else {
        removeAllChildNodes(container);
        numGrid = userInput;
        displayText.textContent = `The size of grid: ${numGrid} & ${numGrid}`;
        createDiv();
    }
})