const circle = new Circle;
circle.color = 'red';
circle.size = 20;
circle.name = 'healing';
console.log(circle);



function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}


Circle.call(circle, 1); 
Circle.apply(circle, [1]); // apply takes an array of arguments

Circle.bind(circle, 1); // bind returns a new function with the specified context
circle.draw = function() {
    console.log('draw');
}
console.log(Circle.prototype);
console.log(Circle.prototype.constructor);
console.log(circle.constructor);

const other = new Circle(1);
console.log(other.constructor);

Circle.call({}, 1)
const second = new Circle(1);

console.log(second.constructor);


