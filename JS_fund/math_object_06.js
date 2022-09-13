const num1 = 30;
const num2 = 5;
let val;

// simple math with numbers

val= num1 + num2;
val= num1 - num2;
val= num1 * num2;
val= num1 / num2;
val= num1 % num2;

// Math object
val = Math.PI; // pie 3.14
val = Math.E;  // Euler's number
val = Math.round(2.3) //round off (std)
val = Math.ceil(2.1) //round up to 3  
val = Math.floor(2.8); //round down
val = Math.sqrt(81); //square root
val = Math.abs(-56) //absolute number
val = Math.pow(8,2) // 8^2
val = Math.min (2,33,56,78,9,0,-100) // get minimum
val = Math.max (2,33,56,78,9,0,-100) // get maximum
val = Math.random(); // between 0 to 1 

val = Math.floor(Math.random()*20+1);


console.log(val);