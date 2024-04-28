const expression = document.getElementById("expression");

function appendToExpression(input) { expression.value += input; }

function clearExpression() { expression.value = ""; }

// function Calculate() { expression.value = eel.calculate(expression.value); }

// function removeLastSymbol() { expression.value = eel.remove_last_symbol(expression.value); }

function removeLastSymbol() { expression.value = expression.value.slice(0, -1); }

function Calculate() {
    let expressionList = expression.value.split(" ");

    for (let id = 0; id < expressionList.length; id++) {
        let element = expressionList[id];

        if (element.includes("sin")) {
            let num = parseFloat(element.replace("sin", ""));
            expressionList[id] = Math.sin(num);
        }
        if (element.includes("cos")) {
            let num = parseFloat(element.replace("cos", ""));
            expressionList[id] = Math.cos(num);
        }
        if (element.includes("tan")) {
            let num = parseFloat(element.replace("tg", ""));
            expressionList[id] = Math.tan(num);
        }
        if (element.includes("√")) {
            let num = parseFloat(element.replace("√", ""));
            expressionList[id] = Math.sqrt(num);
        }
        if (element.includes("÷")) {
            let action = element.replace("÷", "/");
            expressionList[id] = action;
        }
        if (element.includes("×")) {
            let action = element.replace("×", "*");
            expressionList[id] = action;
        }
        if (element.includes("π")) {
            let action = element.replace("×", "*");
            expressionList[id] = Math.PI;
        }
    }

    let formattedExpression = expressionList.join(" ");

    try { expression.value = eval(formattedExpression); }
    catch (error) { expression.value = error; }
}