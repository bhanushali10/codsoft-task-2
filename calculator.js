const display = document.getElementById("display");
let currentValue = "0";
let operator = "";
let prevValue = "";

function updateDisplay() {
    display.textContent = currentValue;
}

function clearDisplay() {
    currentValue = "0";
    operator = "";
    prevValue = "";
    updateDisplay();
}

function handleNumberClick(number) {
    if (currentValue === "0" || currentValue === "-0") {
        currentValue = number;
    } else {
        currentValue += number;
    }
    updateDisplay();
}

function handleOperatorClick(op) {
    if (prevValue !== "") {
        calculateResult();
    }
    operator = op;
    prevValue = currentValue;
    currentValue = "0";
}

function calculateResult() {
    const num1 = parseFloat(prevValue);
    const num2 = parseFloat(currentValue);

    switch (operator) {
        case "+":
            currentValue = (num1 + num2).toString();
            break;
        case "-":
            currentValue = (num1 - num2).toString();
            break;
        case "*":
            currentValue = (num1 * num2).toString();
            break;
        case "/":
            if (num2 !== 0) {
                currentValue = (num1 / num2).toString();
            } else {
                currentValue = "Error";
            }
            break;
    }

    prevValue = "";
    operator = "";
    updateDisplay();
}

document.getElementById("clear").addEventListener("click", clearDisplay);
document.getElementById("zero").addEventListener("click", () => handleNumberClick("0"));
document.getElementById("one").addEventListener("click", () => handleNumberClick("1"));
document.getElementById("two").addEventListener("click", () => handleNumberClick("2"));
document.getElementById("three").addEventListener("click", () => handleNumberClick("3"));
document.getElementById("four").addEventListener("click", () => handleNumberClick("4"));
document.getElementById("five").addEventListener("click", () => handleNumberClick("5"));
document.getElementById("six").addEventListener("click", () => handleNumberClick("6"));
document.getElementById("seven").addEventListener("click", () => handleNumberClick("7"));
document.getElementById("eight").addEventListener("click", () => handleNumberClick("8"));
document.getElementById("nine").addEventListener("click", () => handleNumberClick("9"));
document.getElementById("decimal").addEventListener("click", () => {
    if (!currentValue.includes(".")) {
        currentValue += ".";
        updateDisplay();
    }
});
document.getElementById("add").addEventListener("click", () => handleOperatorClick("+"));
document.getElementById("subtract").addEventListener("click", () => handleOperatorClick("-"));
document.getElementById("multiply").addEventListener("click", () => handleOperatorClick("*"));
document.getElementById("divide").addEventListener("click", () => handleOperatorClick("/"));
document.getElementById("equals").addEventListener("click", calculateResult);

updateDisplay();