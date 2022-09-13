let val;

// Number to string
val = String(555);
val = String(3+5);

// boolean to string
val = String(true);

// toString()
// 5 as string
val = (5).toString();
// false as string
val = (false).toString();

// String to number
val = Number('5');

// boolean to number
val = Number(true);
val = Number(false);

// string to number
val = Number('hello');

console.log(val);
console.log(typeof val);