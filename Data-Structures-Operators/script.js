'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //orderDelivery: function (obj) {
  //orderDelivery: function ({starterIndex, mainIndex, time, address}) { // Destructuring the object
  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = "20:00", address}) { // Assigning defaul values
    // console.log(obj);
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  }

};

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
/*
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