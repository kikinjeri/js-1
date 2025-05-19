let person = {
    name: 'Mwihaki',
    race: 'Black',
    gender: 'female',
}

console.log(person);
console.log(person.name);

person.name = 'john'
console.log(person.name);

person['name'] = 'Mary';
console.log(person.name);

let selectedColors = ['red', 'blue', 1];
selectedColors[2]
console.log(selectedColors[0]);
console.log(selectedColors[1]);
console.log(selectedColors[2]);
console.log(selectedColors);
console.log(selectedColors.length);

function greet(girl, lastName) {
    console.log('Hi ' + girl +' ' + lastName);
}
greet('john', 'smith');


function square(number){
   return number * number;
}
let number = square(2);
console.log(number);
























