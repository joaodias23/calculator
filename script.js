const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

function updateDisplay(value) {
    display.textContent = value;
}

function handleButtonClick(event) {
    const value = event.target.textContent;

    if (value === "=") {
        try {
            currentInput = eval(currentInput).toString();
            updateDisplay(currentInput);
        } catch (error) {
            updateDisplay("Error");
            currentInput = "";
        }
    } else if (value === "C") {
        currentInput = "";
        updateDisplay("Awaiting User Input...");
    } else {
        currentInput += value;
        updateDisplay(currentInput);
    }
}

buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});
