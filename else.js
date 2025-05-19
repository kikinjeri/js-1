//hour
// if hour is between 6 and noon good morning
// else good aft
// good eve

let hour = 20;

if (hour >= 6 && hour < 12) 
    console.log('good morning');
 else if (hour >= 12 && hour < 18) 
    console.log('good afternoon');
 else if (hour >= 18 && hour < 21) 
    console.log('good evening');

