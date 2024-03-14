document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (button.textContent === "=") {
                try {
                    display.textContent = eval(display.textContent);
                } catch (error) {
                    display.textContent = "Error";
                }
            } else if (button.textContent === "C") {
                display.textContent = "0";
            } else {
                if (display.textContent === "0" || display.textContent === "Error") {
                    display.textContent = button.textContent;
                } else {
                    display.textContent += button.textContent;
                }
            }
        });
    });
});
