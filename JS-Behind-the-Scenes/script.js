'use strict';

/*
function calcAge (birthYear) {
    const age = 2023 - birthYear;
    console.log(firstName);
    return age;
}

const firstName = 'Jose'; // Global  (In the global scope)
calcAge(1994); // At this poing the firstName variable is already in the global execution environment so It'll be logged to the console



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


// HOISTING AND TDZ

// VARIABLES
console.log(me); // undefined
// console.log(job);
// console.log(birthYear);

var me = 'Jose';
let job = 'Student'; // The TDZ (Temporal Dead Zone) of this variable is from the begging of the code until this line where it was declared.
const year = 1994;

// FUNCTIONS
console.log(addDecl(2, 3)); // We can call it before it was declared
// console.log(addExpr(2, 3)); // Uncaught ReferenceError: Cannot access 'addExpr' before initialization.
// console.log(addArrow(2, 3)); // Uncaught ReferenceError: Cannot access 'addArrow' before initialization.
// console.log(addExprVar(2, 3)); // caught TypeError: addExprVar is not a function
// console.log(addArrowVar(2, 3)); // caught TypeError: addArrowVar is not a function

function addDecl (a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;


// var addExprVar = function (a, b) {
//     return a + b;
// }

// var addArrowVar = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart(); // All products deleted! because undefined = false

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}



// The THIS keyword

console.log(this); // output the window (Global Object)

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // undefined because we are in 'strict mode'. If not it'll point to the Global Object
}

calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // It'll point to the Global Object 
}

calcAgeArrow(1991);

const jose = {
    birthYear: 1994,
    calcAge () {
        console.log(this); // It will output the 'jose' object. Because it's the method calling it
        console.log(2023 - this.birthYear);
    }
}
jose.calcAge();

const paula = {
    birthYear: 1997

}

paula.calcAge = jose.calcAge; // copying the calcAge() method from jose to paula (method borrowing). We copy the method without calling it ()

paula.calcAge(); // the same method will point to the 'paula' object because even though it belong to 'jose' object in this case is 'paula' who is calling it.

// The THIS keyword is very dynamic

const f = jose.calcAge; // we copy the method without calling it ()

f(); // The result will be undefined as the first global functions, because 'this' keyword in regular functions points to undefined


// --------------------------------------------------------

// var firstName = 'Paula';

const jose = {
    firstName: 'Jose',
    birthYear: 1994,
    calcAge () {
        console.log(this); // It will output the 'jose' object. Because it's the method calling it
        console.log(2023 - this.birthYear);
    }, 

    greet: () => console.log(`Hey ${this.firstName}`),
};

jose.greet(); // it will output 'Hey undefined'. Because the this keyword in an arrow function points to the global object (window) and there is no any global variable firstName which was created (var firstName).

// --------------------------------------------------------




const jose = {
    firstName: 'Jose',
    birthYear: 1994,
    calcAge () {
        console.log(this); 
        console.log(2023 - this.birthYear);

        const isMillenial = function () {
            console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
        }
        isMillenial(); // It's a regular function so the 'this' keyword will be undefined. Then if we call it it'll throw an Uncaught TypeError
    }, 

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    },
};

jose.greet();
jose.calcAge();

// --------------------------------------------------------

// OLDER SOLUCION TO THE Uncaught TypeError
const jose = {
    firstName: 'Jose',
    birthYear: 1994,
    calcAge () {
        console.log(this); 
        console.log(2023 - this.birthYear);

        const self = this; // here we still can access to the 'this' variable, so using the 'self' we can save the value and use it later on the regular function inside of the method.  It can be 'self' or 'that'.
        const isMillenial = function () {
            console.log(self); // JS goes up (scope chain) into the parent scope to look for the variable
            console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
        }
        isMillenial();
    }, 

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    },
};

jose.greet();
jose.calcAge();



// --------------------------------------------------------

// NEWER SOLUCION TO THE Uncaught TypeError
const jose = {
    firstName: 'Jose',
    birthYear: 1994,
    calcAge () {
        console.log(this); 
        console.log(2023 - this.birthYear);

        
        // Remember an arrow function does not have its own 'this' keyword but its parent's one ( calcAge() )  so we can use it and keep the 'this' keyword on the code.
        const isMillenial = () => {
            console.log(this); 
            console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
        }
        isMillenial();
    }, 

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    },
};

jose.greet();
jose.calcAge();

// --------------------------------------------------------


// 'arguments' keyword (only available to regular functions): Can be useful when we want a function to accept more parrameters than what we actually especify.

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12); // thanks to the 'arguments' keyword we can add them but the sum won't happen.


var addArrow = (a, b) => {
    console.log(arguments);
    return a + b
};

// addArrow(2, 5, 8); // it will lead to a 'caught ReferenceError'

*/

//-------------------------------------------------
// MUTATING PRIMITIVE TYPES (created in the call stack)
let joseLastName = 'Rinconez';
let paulaLastName = joseLastName; //Create a new variable in the Call Stack pointing to the same memory address (with the same value) as the 'joseLastName' variable.
joseLastName = 'Ramirez'; //'joseLastName' variable now point to a differente address with another value
console.log(joseLastName, paulaLastName);


// MUTATING TYPE REFERENCE (created in the heap)
const paula = {
    firstName: 'Paula',
    lastName: 'Ramirez', 
    age: 26,
};
const marriedPaula = paula; // 'marriedPaula' is a variable in the stack, and it points to the same address (in the call stack)  as the 'paula' variable, this address comes from the heap and hold the object.
marriedPaula['lastName'] = 'Rinconez'; // we modified the object in the heap, so any variable pointing to this reference will show the same changes.
console.log('Before marriage:', paula);
console.log('After marriage:', marriedPaula);

// marriedPaula = {}; // This will lead to an error because this is a constant and '{}' is an empty object with a different position in memory

// COPYING OBJECTS

const paulaSingle = {
    firstName: 'Paula',
    lastName: 'Ramirez', 
    age: 26,
    family: ['Virginia', 'Raul', 'Jessica'],
};

const paulaMarried = Object.assign({}, paulaSingle); // Creates another object which is a real copy of the original on a different memory address in the heap

// I can copy as many objects as I want to, with this Object assign method Object.assign({}, firstObject, secondObject, ...nObject, {property1: value1, property2: value2})

// The downside is that the Object.assign({}, copyFromObject) only works on the first level, if we have an object inside an object, this inner object will still be the same (same place in memory). So it only creates a shallow copy. That's why the family array inside of the paulaSingle object won't change

paulaMarried.lastName = 'Rinconez'; // only modifies the copy but no the original
// paulaMarried.family[1] = 'Alqui'; // this will change also the original inner array (which is also an object, remember), so it won't be a total copy.

// We can do a deep copy using an external library, for example Lo-Dash
console.log('Before marriage:', paulaSingle);
console.log('After marriage:', paulaMarried);

