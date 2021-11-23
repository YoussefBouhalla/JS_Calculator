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
            break;
        case 'substraction':
            // calling the substract function
            return substract(nbr1,nbr2)
            break;
        case 'multiplication':
            // calling the multiply function
            return multiply(nbr1,nbr2)
            break;
        case 'division':
            // calling the divide function
            return divide(nbr1,nbr2)
            break;
    
        default:
            break;
    }
}


