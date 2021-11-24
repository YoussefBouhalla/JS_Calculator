
// array for the stored numbers
let numbers = [];
// array for the stored operators
let operators = ['+'];

let globalResult = 0;

// take a button value and do an action based on that value
let buttonAction = (btnValue) => {

    // getting the screen results nodes
    let realTimeInput = document.getElementById("realtime-input");
    let storedResult = document.getElementById("stored-result");

    // operate function
    // give it an **operation** and two **numbers** and return the result
    let operate = () => {

        // adding the number in the realtime input to the end of the number array
        numbers.push(parseInt(realTimeInput.innerHTML));

        // init add function
        let add = (nb1,nb2) => {
           globalResult = nb1 + nb2;
        }

        // init substract function
        let substract = (nb1,nb2) => {
            globalResult = nb1 - nb2;
        };

        // init multiply function
        let multiply = (nb1,nb2) => {
            globalResult = nb1 * nb2;
        };

        // init divide function
        let divide = (nb1,nb2) => {
            if (nb2 == 0) {
                globalResult = "syntaxe error";
            }else{
                globalResult = nb1 / nb2;
            }
        }

        

        for (let index = 0; index < operators.length; index ++) {

            // call cases based on the operation giving in the function operate
            switch (operators[index]) {
                case '+':
                    add(globalResult,numbers[index]);
                    break;

                case '-':
                    substract(globalResult,numbers[index])
                    break;

                case '×':
                    multiply(globalResult,numbers[index])
                    break;

                case '÷':
                    divide(globalResult,numbers[index])
                    break;

                default:
                    break;
            }
            
        }
        
            
        
        storedResult.innerHTML += realTimeInput.innerHTML.concat('=');
        realTimeInput.innerHTML = globalResult.toString();        
        
    }

    // take a number and change the innerhtml of the input in the screen
    let ConcatNumber = (number) => {
        
        if (realTimeInput.innerHTML !== "0") {
            realTimeInput.innerHTML += number.toString();
        }else{
            realTimeInput.innerHTML = number.toString();
        }
    }

    // make the innerhtml of the input = "0" in the screen
    let ClearInput = () => {
            realTimeInput.innerHTML = "0";
    }

    // cocatinate a dot to the number
    let ConcatDot = () => {
        if (!realTimeInput.innerHTML.includes(".")) {
            realTimeInput.innerHTML += ".";
        }
    }

    // concat add to the stored input innerHtml and the numbers/operators arrays
    let ConcatAdd = () => {
        if (realTimeInput.innerHTML !== "0") {
            storedResult.innerHTML += realTimeInput.innerHTML.concat("+");
            numbers.push(parseInt(realTimeInput.innerHTML));
            operators.push("+")
            realTimeInput.innerHTML = "0";
        }
    }

    // concat sub to the stored input innerHtml and the numbers/operators arrays
    let ConcatSub = () => {
        if (realTimeInput.innerHTML !== "0") {
            storedResult.innerHTML += realTimeInput.innerHTML.concat("-");
            numbers.push(parseInt(realTimeInput.innerHTML));
            operators.push("-")
            realTimeInput.innerHTML = "0";
        }
    }

    // concat mult to the stored input innerHtml and the numbers/operators arrays
    let ConcatMult = () => {
        if (realTimeInput.innerHTML !== "0") {
            storedResult.innerHTML += realTimeInput.innerHTML.concat("×");
            numbers.push(parseInt(realTimeInput.innerHTML));
            operators.push("×")
            realTimeInput.innerHTML = "0";
        }
    }

    // concat Div to the stored input innerHtml and the numbers/operators arrays
    let ConcatDiv = () => {
        if (realTimeInput.innerHTML !== "0") {
            storedResult.innerHTML += realTimeInput.innerHTML.concat("÷");
            numbers.push(parseInt(realTimeInput.innerHTML));
            operators.push("÷")
            realTimeInput.innerHTML = "0";
        }
    }

    switch (btnValue) {

        // calling the ConcatNumber function by the value
        case "1":
            ConcatNumber(1);
            break;
        case "2":
            ConcatNumber(2);
            break;
        case "3":
            ConcatNumber(3);
            break;
        case "4":
            ConcatNumber(4);
            break;
        case "5":
            ConcatNumber(5);
            break;
        case "6":
            ConcatNumber(6);
            break;
        case "7":
            ConcatNumber(7);
            break;
        case "8":
            ConcatNumber(8);
            break;
        case "9":
            ConcatNumber(9);
            break;
        case "0":
            ConcatNumber(0);
            break;
        case ".":
            ConcatDot();
            break;

        // equal case
        case "=":
            operate();
            break;

        // clear case call ClearInput function
        case "C":
            ClearInput();
            break;

        // concatinate the operators
        case "+":
            ConcatAdd();
            break;

        case "-":
            ConcatSub();
            break;

        case "×":
            ConcatMult();
            break;

        case "÷":
            ConcatDiv();
            break;
        
        // default do nothing
        default:
            break;
    }


}

// getting all the pad buttons and calling for the buttonAction function
let padButtons = document.querySelectorAll(".button-holder");

// looping for each button in the pad and giving buttonAction function its innerText
for (const padButton of padButtons) {
    padButton.addEventListener("click", (e) => {
        buttonAction(e.target.innerText);
    })
}

