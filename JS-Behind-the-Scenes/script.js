'use strict';

/*
function calcAge (birthYear) {
    const age = 2023 - birthYear;
    console.log(firstName);
    return age;
}

const firstName = 'Jose'; // Global  (In the global scope)
calcAge(1994); // At this poing the firstName variable is already in the global execution environment so It'll be logged to the console

*/

function calcAge (birthYear) {
    const age = 2023 - birthYear;
    
    function printAge() {
        // JS will look up 'firstName' in this function and the in the scope chain (all the code outer or parents of this function)
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        // Block Scope
        // JS will look up all the variables we call here, from this scope to outer scopes (parent function and global)
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = "Rinconez"; // This one will appear in the string below, due to JavaScript starts looking for the variables from the current scope and then goes outer.
            
            // Reassigning outer scope's variables
            output = 'NEW OUTPUT!';
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str)

            // Functions are also block scope starting in ES6 (but I can access deleting the 'use stric' at the beggining of this code)
            // It won't be access from out of the if block
            function add (a, b) { 
                return a + b;
            }

            
        }
        // console.log(add(2, 3)); // ReferenceError
        // console.log(str); //JS can't access to this variable from this execution environment (scope);
        console.log(millenial); // this variable was declared with 'var' so it'll be accessible from here (function scope);
        console.log(output);
    }
    printAge();

    // console.log(millenial); // No accessible from here, only from the first parent function (function scope)
    
    return age;
}

const firstName = 'Jose'; 
calcAge(1994);

// printAge(); // It'll appear tha printAge is not defined (ReferenceError), because this function works as a variable inside of the other function not accessible to the global scope.

// console.log(millenial); // Not accessible from here because is function scope