// operate function
// give it an **operation** and two **numbers** and return the result
let operate = (operation,nbr1,nbr2) => {

    // init add function
    let add = (nb1,nb2) => nb1 + nb2;

    // init substract function
    let substract = (nb1,nb2) => nb1 - nb2;

    // init multiply function
    let multiply = (nb1,nb2) => nb1 * nb2;

    // init divide function
    let divide = (nb1,nb2) => {
        if (nb2 == 0) {
            return "syntaxe error";
        }else{
            return nb1 / nb2;
        }
    }

    // call cases based on the operation giving in the function operate
    switch (operation) {
        case 'addition':
            // calling the add function
            return add(nbr1,nbr2)

        case 'substraction':
            // calling the substract function
            return substract(nbr1,nbr2)

        case 'multiplication':
            // calling the multiply function
            return multiply(nbr1,nbr2)

        case 'division':
            // calling the divide function
            return divide(nbr1,nbr2)  

        default:
            break;
    }
}

// take a button value and do an action based on that value
let buttonAction = (btnValue) => {
    let realTimeInput = document.getElementById("realtime-input");

    // take a number and change the innerhtml of the input in the screen
    let ConcatNumber = (number) => {
        

        if (realTimeInput.innerHTML !== "0") {
            realTimeInput.innerHTML += number.toString();
        }else{
            realTimeInput.innerHTML = number.toString();
        }
    }

    // make the innerhtml of the input = "0" in the screen
    let clearInput = () => {
            realTimeInput.innerHTML = "0";
        
    }

    switch (btnValue) {
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
            
            break;
        case "=":
            
            break;
        case "C":
            clearInput();
            break;
        case "+":
            
            break;
        case "-":
            
            break;
        case "×":
            
            break;
        case "÷":
            
            break;
    
        default:
            break;
    }

}

// getting all the pad buttons and calling for the buttonAction function
let padButtons = document.querySelectorAll(".button-holder");

for (const padButton of padButtons) {
    padButton.addEventListener("click", (e) => {
        buttonAction(e.target.innerText);
    })
}

