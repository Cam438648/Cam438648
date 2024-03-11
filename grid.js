const containerDiv = document.querySelector("#container");

function makeGrid(rows, columns) {
    // Clear existing grid items
    while (document.querySelector(".grid-item") !== null) {
        document.querySelector(".grid-item").remove();
    }

    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);

    for (let i = 0; i < rows * columns; i++) {
        let square = document.createElement("div");
        square.style.minHeight = "0";
        square.style.minWidth = "0";
        square.style.overflow = "hidden";
        containerDiv.appendChild(square).className = "grid-item";

        square.addEventListener("mouseover", (event) => {
            let currentSquare = event.target;

            if (currentSquare.style.backgroundColor === "") {
              function getRandomColor() {
                const letters = "0123456789ABCDEF";
                let color = "#";
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            
                let color = getRandomColor();
                currentSquare.style.backgroundColor = color;
                currentSquare.style.opacity = "0.1";  // Corrected opacity value
            } else if (parseFloat(currentSquare.style.opacity) < 0.9) {
                currentSquare.style.opacity = (parseFloat(currentSquare.style.opacity) + 0.1).toString();
            }
        });
    }
}

function createButton() {
    const buttonDiv = document.querySelector("#buttonDiv");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid?";
    resetButton.style.margin = "20px";
    buttonDiv.style.textAlign = "center";
    buttonDiv.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        // Clear existing grid items
        document.querySelectorAll(".grid-item").forEach(e => e.remove());

        let userGridInput = prompt("Enter the # of grid squares, chump. Max 100.");
        if (userGridInput > 100) {
            alert("100 was the max, calm down!");
            return buttonDiv;
        }
        const rows = userGridInput;
        const columns = userGridInput;

        // Update containerDiv styles
        containerDiv.style.setProperty("--grid-rows", rows);
        containerDiv.style.setProperty("--grid-columns", columns);

        // Create a new grid
        makeGrid(rows, columns);
    });
}

// Initial grid setup
makeGrid(16, 16);
createButton();
