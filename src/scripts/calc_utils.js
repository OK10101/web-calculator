const expression = document.getElementById("expression");
let isLastChar = false;

async function appendNum(input) { 
    expression.value += input;
    isLastChar = false;
}

async function appendOperation(input) { 
    if (!isLastChar) { expression.value += input; }
    isLastChar = true;
}

async function clearExpression() {
    expression.value = "";
}

async function removeLastSymbol() { 
    expression.value = expression.value.slice(0, -1);
}

async function Calculate() {
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
            expressionList[id] = Math.PI;
        }
    }

    let formattedExpression = expressionList.join(" ");

    try { expression.value = eval(formattedExpression); }
    catch (error) { expression.value = error; }
}