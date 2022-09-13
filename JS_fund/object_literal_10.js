const person = {
    firstName: 'sara',
    lastName: 'Smith',
    age: 30,
    email: 'sara@gmail.com',
    hobbies: ['music','sport'],
    address: {
        city: 'KL',
        country: 'Malaysia'
    }
};

let val;
val = person.age;
val = person['lastName'];
val = person.firstName;
val = person.hobbies;
val = person.hobbies[0];
val = person.address.city;
val = person.address.country;
val = person.email;

// console.log(val);

const people = [
    {userName:'sara',age:30},
    {userName:'kim',age:35},
    {userName:'John',age:40},
];

// console.log(people);
val = people[0].userName;

// console.log(val);

for(let i=0; i<people.length ; i++){
    console.log(people[i]);
}