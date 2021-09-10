let operators, numbers, display, equal, clear, backspace, scientifics, pi, squareroot, square, brackets, changesign, percent;
let isOperator = false;
let isScientific = true;

window.onload = function () {
    operators = document.querySelectorAll(".operator");
    numbers = document.querySelectorAll(".number");
    brackets = document.querySelectorAll(".brackets");
    display = document.querySelector("#result");
    equal = document.querySelector("#equal");
    clear = document.querySelector("#clear");
    backspace = document.querySelector("#backspace");
    changesign = document.querySelector("#changesign");
    scientifics = document.querySelectorAll(".func");
    pi = document.querySelector(".pi");
    squareroot = document.querySelector(".squareroot");
    square = document.querySelector(".square");
    percent = document.querySelector(".percent")

    operators.forEach((opeartor) => {
        opeartor.onclick = operatorClick;
    })

    numbers.forEach((number) => {
        number.onclick = numberClick;
    })

    brackets.forEach((bracket) => {
        bracket.onclick = bracketClick;
    })

    scientifics.forEach((scientific) => {
        scientific.onclick = scientifiClick;
    })

    clear.onclick = clearClick;
    equal.onclick = equalClick;
    backspace.onclick = backspaceClick;
    changesign.onclick = changesignClick;

    pi.onclick = piClick;
    squareroot.onclick = squarerootClick;
    square.onclick = squareClick;
    percent.onclick = percentClick;
}

var operatorClick = function (event) {
    const operator = event.target.getAttribute("value");
    if (display.value == "") {
        isOperator = true;
    }
    if (!isOperator) {
        display.value += operator;
    }
    isOperator = true;
}

var numberClick = function (event) {
    display.value += event.target.getAttribute("value");
    isOperator = false;
    isScientific = true;
}

var clearClick = function () {
    display.value = "";
    if (isScientific == false) {
        numbers.forEach((number) => {
            number.disabled = false;
        })
        operators.forEach((operator) => {
            operator.disabled = false;
            document.querySelector("#backspace").style.backgroundImage = "url('images/backspace.svg')";
        })
        equal.disabled = false;
    }
    isScientific = true;
}

var backspaceClick = function () {
    var result = display.value;
    display.value = result.substr(0, result.length - 1);

    var lastInput = display.value.toString().slice(-1);
    if (isNaN(parseInt(lastInput))) {
        isOperator = true;
    }
    else {
        isOperator = false;
    }

    // if (isScientific == false) {
    //     numbers.forEach((number) => {
    //         number.disabled = false;
    //     })
    //     operators.forEach((operator) => {
    //         operator.disabled = false;
    //         document.querySelector("#backspace").style.backgroundImage = "url('images/backspace.svg')";
    //     })
    //     equal.disabled = false;
    // }

    // isScientific = true;
    // isOperator=false;
}

var changesignClick = function (event) {
    if (display.value.substr(0, 1) == "-") {
        display.value = display.value.substr(1, display.value.length);
    }
    else {
        display.value = "-" + display.value;
    }
}

var bracketClick = function (event) {
    display.value += event.target.getAttribute("value");
    if (isScientific == false) {
        numbers.forEach((number) => {
            number.disabled = false;
        })
        operators.forEach((operator) => {
            operator.disabled = false;
            document.querySelector("#backspace").style.backgroundImage = "url('images/backspace.svg')";
        })
        equal.disabled = false;
    }

}

var equalClick = function () {
    //console.log(isOperator);
    if (isOperator == true) {
        // console.log(isOperator);
        equal.disabled = true;
        // console.log(isOperator);
    }
    var temp = display.value;
    var lastInput = display.value.toString().slice(-1);
    // console.log(lastInput);
    // console.log(isOperator);
    if (isOperator == true) {
        alert("Input is Invalid");
        // clearClick();
        equal.disabled = false;
    }
    else if (temp.includes("(") && !temp.includes(")") || lastInput == "(") {
        alert("Enter ')' for valid input");
    }
    else {
        if (temp.includes("sin") || temp.includes("cos") || temp.includes("tan") || temp.includes("log10") || temp.includes("^")) {
            temp = temp.replace("sin", "Math.sin");
            temp = temp.replace("cos", "Math.cos");
            temp = temp.replace("tan", "Math.tan");
            temp = temp.replace("log10", "Math.log10");
            temp = temp.replace("^", "**");
            // alert(temp);
            // alert(eval(temp));
        }
        display.value = eval(temp);
    }

}

var scientifiClick = function (event) {
    // console.log("welcome");
    var x = event.target.getAttribute("value");
    // console.log(isScientific);
    if (isScientific == true) {
        numbers.forEach((number) => {
            number.disabled = true;
        })
        operators.forEach((operator) => {
            operator.disabled = true;
            document.querySelector("#backspace").style.backgroundImage = "url('images/backspace-disable.svg')";
        })
        equal.disabled = true;

        // console.log(x);
        if (x == "sin") {
            display.value += "sin";
            // display.value = eval(Math.sin(display.value));
            // console.log(display.value)
        }
        else if (x == "cos") {
            display.value += "cos";
            // display.value = Math.cos(display.value);
        }
        else if (x == "tan") {
            display.value += "tan";
            //display.value = Math.tan(display.value);
        }
        else if (x == "log10") {
            display.value += "log10";
            // display.value = Math.log10(display.value);
        }
        else if (x == "%") {
            display.value += "%";
            // display.value = Math.exp(display.value);
        }
    }
    isScientific = false;
}

var piClick = function () {
    if (display.value == "") {
        display.value = 3.14;
    }
    else {
        display.value = display.value + "*" + 3.14;
    }

}

var squarerootClick = function () {
    display.value = Math.sqrt(display.value);
}

var squareClick = function () {
    //   console.log("square");
    display.value = Math.pow(display.value, 2);
}

var percentClick = function () {
    var input = display.value;
    display.value = input / 100;
}