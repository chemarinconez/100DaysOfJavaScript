'use strict';

/*
// PRODUCT TEMPLATE
12 products (3 x 4 on big screem)
const product = {
    nameOfProduct: ' ',
    referenceNumber: 000+(3digists)
    description:
    value:
    discount: `x%/100`, 
    available: true,
}
*/

// DECLARING VARIABLES TO WORK WITH THE DOM (El = Element)
let nameOfProductEl = document.querySelector('.name-product');
let descriptionEl = document.querySelector('.description');
let referenceEl = document.querySelector('.reference');
let priceEl = document.querySelector('.price');
let availableEl = document.querySelector('.available');

// CREATING THE PRODUCTS

const product1 = {
    nameOfProduct: "Laptop Asus Vivobook",
    referenceNumber: '000123',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? true : false,
}

nameOfProductEl.textContent = product1.nameOfProduct;
descriptionEl.textContent = product1.description;
referenceEl.textContent += product1.referenceNumber;
priceEl.textContent = product1.value;
availableEl.textContent = product1.available === true ? 'In Stock' : 'Sold out';

const product2 = {
    nameOfProduct: "Laptop Asus Vivobook",
    referenceNumber: '000123',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? true : false,
}

const product3 = {
    nameOfProduct: "Laptop Asus Vivobook",
    referenceNumber: '000123',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? true : false,
}

const product4 = {
    nameOfProduct: "Laptop Asus Vivobook",
    referenceNumber: '000123',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? true : false,
}

const product5 = {
    nameOfProduct: "Laptop Asus Vivobook",
    referenceNumber: '000123',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? true : false,
}

const product6 = {
    nameOfProduct: "Laptop Asus Vivobook",
    referenceNumber: '000123',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? true : false,
}

const product7 = {
    nameOfProduct: "Laptop Asus Vivobook",
    referenceNumber: '000123',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? true : false,
}

const product8 = {
    nameOfProduct: "Laptop Asus Vivobook",
    referenceNumber: '000123',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? true : false,
}

const product9 = {
    nameOfProduct: "Laptop Asus Vivobook",
    referenceNumber: '000123',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? true : false,
}

const product10 = {
    nameOfProduct: "Laptop Asus Vivobook",
    referenceNumber: '000123',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? true : false,
}

const product11 = {
    nameOfProduct: "Laptop Asus Vivobook",
    referenceNumber: '000123',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? true : false,
}

const product12 = {
    nameOfProduct: "Laptop Asus Vivobook",
    referenceNumber: '000123',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? true : false,
}

// Creating the Shopping Cart (Initialized as an empty Array)
const cart = [];