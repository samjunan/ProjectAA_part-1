const firstName = 'Sara';
const lastName = 'Smith';
const age = 30;
const test = 'Hello from javascript';
const courses = 'web development,web design,cloud'

let val;

val = firstName + lastName;

// concatination
val = firstName +' '+ lastName;

// Append
val = 'kim';
val += 'Smith';

// escaping
val = 'That\'s awesome';

// length
val = firstName.length;

// change case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

// charAt
val = firstName.charAt('2');

// indexOf
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a');

// substring (subset)
val = firstName.substring(1,3); //start 1 end 3 but not include 3

// slice
val = firstName.slice(0,3);
val = firstName.slice(-3);

// split
val = test.split(' ');
val = courses.split(',');

// replace (case sensitive)
val = test.replace('Javascript','React.js');

// includes
val = test.includes('sara');


console.log(val);
