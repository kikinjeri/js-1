const message = 'this is my \ first message';
console.log(message);

message.slice(0, 2);
console.log(message.slice(0, 2));
console.log(message.length);
console.log(message.charAt(1));

const other = new String('hi');
console.log (new String('hi')); 

const quote = 'Hello World, \n this is my first message';
console.log(quote);

console.log(quote.indexOf('World')); // 6
console.log(quote.length); // 40
console.log(quote.charAt(0)); // 
console.log(quote.toUpperCase(5)); 

console.log(quote.split('my ')); 