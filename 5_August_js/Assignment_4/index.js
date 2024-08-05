let add = document.querySelector("[addition]");
let sub = document.querySelector("[subtraction]");
let mul = document.querySelector("[multiplication]");
let div = document.querySelector("[division]");


let Addition ;
let Subtraction;
let Multiplication;
let division;



let Number1 = parseInt(prompt("Please enter First number"));

let Number2 = parseInt(prompt("Please enter second Number"));




Addition = Number1 + Number2;

Subtraction = Number1 > Number2 ?( Number1 - Number2) : (Number2 - Number1)

Multiplication = Number1 * Number2;

division =  (!Number2) ? alert("Number 2 cant be Zero") : Number1/Number2;



add.innerHTML = Addition;
sub.innerHTML = Subtraction;
mul.innerHTML = Multiplication;
div.innerHTML = division;