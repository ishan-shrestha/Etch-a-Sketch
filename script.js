const container = document.querySelector(".container");
const displayText = document.querySelector(".display-text");
const chnageBtn = document.querySelector(".change-button");
const clearBtn = document.querySelector(".clear-button");
const rgbBtn = document.querySelector(".RGB");
let numGrid = 16;

function createDiv() {
    for (let i = 0; i < (numGrid * numGrid); i++) {
        const square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);

        square.addEventListener("mousemove", () => {
            square.style.backgroundColor = "red";
        })
    }
}

chnageBtn.addEventListener("click", () => {
    const userInput = prompt("Enter a number from 1 to 80");
    if (userInput == null || userInput > 80 || userInput <= 0 || isNaN(userInput)) {
        alert("Re-enter the number between 1 to 80");
        return;
    }
})

createDiv();