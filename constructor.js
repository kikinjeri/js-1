//factory function--- for starters
function createCircle(radius) {
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}  
const myCircle = createCircle(1);



console.log(myCircle);
// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(1);
circle.color = 'red';
circle.size = 20;
circle.name = 'healing'
console.log(circle);



function greetings(name, age, city, country){
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
}
const person = new greetings('John', 25, 'New York', 'USA');
console.log(person);

function xmas(religion, date, christ, birth){
    this.religion= religion;
    this.date = date;
    this.christ = christ;
    this.birth = birth;
}
//const xmas = new xmas('Christianity', 'December 25', 'Jesus Christ', 'Birth of Jesus');
//console.log(xmas);  
