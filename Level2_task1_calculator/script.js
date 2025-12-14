function press(value) {
    const display = document.getElementById("display");
    let expr = display.value;

    const operators = ['+', '-', '*', '/', '%'];
    const nonMinusOperators = ['+', '*', '/', '%'];

    if (operators.includes(value)) {
        const lastChar = expr.slice(-1);
        const secondLastChar = expr.slice(-2, -1);

        if (value === '-' && (expr === "" || nonMinusOperators.includes(lastChar))) {
            display.value += value;
            return;
        }

        if (lastChar === '-' && nonMinusOperators.includes(secondLastChar)) {
            display.value = expr.slice(0, -2) + value;
            return;
        }

        if (operators.includes(lastChar)) {
            display.value = expr.slice(0, -1) + value;
            return;
        }
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function cancelLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}
function toggleHelp() {
    const helpBox = document.getElementById("helpBox");
    helpBox.style.display =
        helpBox.style.display === "block" ? "none" : "block";
}
