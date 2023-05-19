'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  //Could be --> [`day-${2+4}`]: { ... }, = day-6: { ... }
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //orderDelivery: function (obj) {
  //orderDelivery: function ({starterIndex, mainIndex, time, address}) { // Destructuring the object
  orderDelivery({starterIndex = 1, mainIndex = 0, time = "20:00", address}) { // Assigning defaul values
    // console.log(obj);
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  openingHours,

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  }

};

// LOOPING OBJECTS

// Property names (keys)
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `
}

console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);
for ({open, close} of values) {
  console.log(open, close);
}

// Entries Object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
// [key, {open, close}]
for ( const [ day, {open: o, close: c} ] of entries ) {
  console.log(`On ${day} we open at ${o} and close at ${c}`);
}

/*
// OPTIONAL CHAINING(?.)

// WITHOUT Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
  
// console.log(restaurant.openingHours.mon.open); // script.js:61 Uncaught TypeError: Cannot read properties of undefined (reading 'open')

// WITH Optional Chaining
console.log(restaurant.openingHours.mon?.open); // undefined

// We can have multiple Optional Chains
console.log(restaurant.openingHours?.mon?.open);
// if 'openingHours' doesn't exist, 'mon' won't be read and 'undefined' will be showed on the console. Otherwise 'mon' will be showed.

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']; 


for (const day of days) {
  const open = restaurant.openingHours?.[day]?.open ?? 'Closed';
  console.log(`${day} Opening Hour: ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');


// Arrays
const users = [ { name: 'Jose', email: 'jose@mail.com' } ];
console.log(users[0]?.name ?? 'Users array empty');


console.log(restaurant);


// for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// };
// the same result, but destructuring
for (const [ index, element ] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
};

// console.log([...menu.entries()]);



// LOGICAL ASSIGNMENT OPERATORS
const rest1 = {
  name: 'Capri',
  numGuests: 0,
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}

// rest1.numGuests = rest1.numGuests || 10; // 10 because 0 is a falsy value
// rest2.numGuests = rest2.numGuests || 10;
console.log(rest1);
// console.log(rest2);

// OR Assignment operator
rest2.numGuests ||= 10; // rest2.numGuests = rest2.numGuests || 10;
console.log(rest2);


// Logical nullish assignment operator (??)

rest1.numGuests ??= 10; //rest1.numGuests = rest1.numGuests ?? 10;
console.log(rest1);

// rest2.owner = rest2.owner && '<ANONYMOUS>';
// console.log(rest2);

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// console.log(rest1); //rest1.owner = undefined


// AND (&&) assignment operator
rest2.owner &&= '<ANONYMOUS>';
console.log(rest2);

rest1.owner &&= '<ANONYMOUS>';
console.log(rest1); // owner property doesn't appear



// NULLISH COALESCING OPERATOR (??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Fixing this
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


// SHOR CIRCUITING (&& AND ||)

console.log('------OR------');
// Logical operators can use ANY data type, return ANY data type, and do short-circuiting
console.log(3 || 'Jose');
console.log('' || 'Jose'); // there's not short-circuiting
console.log(true || 0);
console.log(undefined || null); // there's not short-circuiting

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10; // Better option than above one
console.log(guests2);

// None of these options (above) are good ideas if restaurant.numGuests = 0, because 0 is a falsy value

console.log('------AND------');

console.log(0 && 'Jose');
console.log(7 && 'Jose');
console.log('Hello' && 23 && null && 'Jose');

// PRACTICAL EXAMPLE
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// Alternative with the && operator
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// || does short-circuiting with the first truthy value and && with the first falsy value. Otherwise returns the last option.


// REST PATTERN AND PARAMETERS

// 1. REST PATTERN IN DESTRUCTURING 
// SPREAD, because on Right side of =
const arr = [1, 2, ...[3, 4]]

// REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// The REST PATTERN basically collects the elements that are unused in the destructuring assignment

// We can use the REST and the SPREAD together
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);
// Ther rest element (pattern) always mush be the last in the destructuring assigment. Only must be one rest in every destructuring assignment

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. REST PATTERN IN FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i< numbers.length; i++) sum += numbers[i];

  console.log(sum);
}




add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const array1 = [23, 5, 7];
add(...array1);


restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 0,
});

// THE SPREAD OPERATOR
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// with the spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];

// restaurant.orderPasta(...ingredients);


// SPREAD OPERATOR IN OBJECTS
const newRestaurant = {foundedIn: 1994, ...restaurant, founder: "Jose Rinconez"};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


// DESTRUCTURING OBJECTS

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);
// Destructuring object is very useful when working with big information objects such us API's

// We can also define default values such us
const { menu = [], starterMenu: starters = [] } = restaurant;
//The [brackets] in the above line means, in case the propertie does not exists in restaurant Object, the value by default will be an empty array. 
console.log(menu, starters); // [] ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']



const { fri: { open, close } } = openingHours;
console.log(open, close);


// DESTRUCTURING ARRAYS
const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(a, b, c);
// console.log(a);
// console.log(b);
// console.log(c);

  // const [first, second] = restaurant['categories']; //'Italian' 'Pizzeria'
let [first, , second] = restaurant['categories']; // 'Italian' 'Vegetarian'
console.log(first, second);

//SWUTCHING VARIABLES
//without destructuring
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

//destructuring
[second, first] = [first, second];
console.log(first, second);

// Receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const unknownLength = [8, 9];
const [p=1, q=2, r=1] = unknownLength;
console.log(p, q, r);
*/