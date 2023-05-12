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
};

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
/*
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