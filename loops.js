const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle) 
    console.log(key, circle[key]);

//for ( let key of circle) 
  //  console.log(key);
// object is not iterable

for (let key of Object.keys(circle))
    console.log(key);
console.log(Object.keys);
console.log(Object.draw);
console.log(Object.entries(circle));
console.log(Object.keys(circle));