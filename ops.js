//let points = 99;

//let type = points < 100 ? 'gold' : 'silver';

//console.log(type);

//logical AND (&&)
// returns True if both && true

//.log(false && true);

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan)

let applicationRefused = !eligibleForLoan;

console.log('Application Refused', applicationRefused);


let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(defaultColor);


let x = 2 + 3 *4;
console.log(x);

let y = (2+3) *4;
console.log(y);