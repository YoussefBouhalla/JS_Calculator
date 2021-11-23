// add function
let add = (nbr1,nbr2) => nbr1 + nbr2;

// substract function
let substract = (nbr1,nbr2) => nbr1 - nbr2;

// multiply function
let multiply = (nbr1,nbr2) => nbr1 * nbr2;

// divide function
let divide = (nbr1,nbr2) => {
    if (nbr2 == 0) {
        return "syntaxe error";
    }else{
        return nbr1 / nbr2;
    }
}