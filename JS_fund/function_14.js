// Function declaration
function greet(firstName='John',lastName='Doe'){ //default value pass here John and Doe
    // if(typeof firstName === 'undefined'){ firstName='John'} (old way)
    // if(typeof lasttName === 'undefined'){ lastName='Doe'} (old way)

    console.log(`welcome ${firstName} ${lastName}`);
}

greet();

// function expression

const square = function(x=3){ //default value is 3
    return x*x;
};
console.log(square(5));

// Immidiate invokable function expression
(function(){
    console.log('IIFE RAN...')
})(); //call immediately ();

(function(userName='John'){
    console.log(`welcome ${userName}`)
})();

// property method
// when a function is a property of an object its

const todo={
    add: function(){ // add is name of function
        console.log('add to the list'); //method
    },
    edit: function(){
        console.log('edit the list');
    }
}

todo.edit();
todo.add();