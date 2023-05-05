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
    available: this.amount > 0 ? 'In Stock' : 'Sold Out',
}

const product2 = {
    nameOfProduct: "Laptop 2",
    referenceNumber: '000124',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? 'In Stock' : 'Sold Out',
}

const product3 = {
    nameOfProduct: "Laptop 3",
    referenceNumber: '000125',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? 'In Stock' : 'Sold Out',
}

const product4 = {
    nameOfProduct: "Laptop 4",
    referenceNumber: '000126',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? 'In Stock' : 'Sold Out',
}

const product5 = {
    nameOfProduct: "Laptop 5",
    referenceNumber: '000127',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? 'In Stock' : 'Sold Out',
}

const product6 = {
    nameOfProduct: "Laptop 6",
    referenceNumber: '000128',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? 'In Stock' : 'Sold Out',
}

const product7 = {
    nameOfProduct: "Laptop 7",
    referenceNumber: '000129',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? 'In Stock' : 'Sold Out',
}

const product8 = {
    nameOfProduct: "Laptop 8",
    referenceNumber: '000130',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? 'In Stock' : 'Sold Out',
}

const product9 = {
    nameOfProduct: "Laptop 9",
    referenceNumber: '000131',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? 'In Stock' : 'Sold Out',
}

const product10 = {
    nameOfProduct: "Laptop 10",
    referenceNumber: '000132',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? 'In Stock' : 'Sold Out',
}

const product11 = {
    nameOfProduct: "Laptop 11",
    referenceNumber: '000133',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? 'In Stock' : 'Sold Out',
}

const product12 = {
    nameOfProduct: "Laptop 12",
    referenceNumber: '000134',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    available: this.amount > 0 ? 'In Stock' : 'Sold Out',
}

const products = [product1, product2, product3, product4, product5, product6,  product7, product8, product9, product10, product11, product12 ];

//console.log(document.querySelector('.product-1'));

//console.log(document.querySelector(`.product-1`).children[1].textContent = product1.nameOfProduct);

for (let i = 1; i <= 12; i++) {
    // Add children[0] and change the images
    document.querySelector(`.product-${i}`).children[1]. textContent = products[i-1].nameOfProduct;
    document.querySelector(`.product-${i}`).children[2]. textContent = products[i-1].description;
    document.querySelector(`.product-${i}`).children[3]. textContent += products[i-1].referenceNumber;
    document.querySelector(`.product-${i}`).children[4]. textContent = products[i-1].value;
    document.querySelector(`.product-${i}`).children[5]. textContent = products[i-1].available;
}


// for (let i = 1; i <= 12; i++) {
//     document.querySelector(`product-${i}`).children[1] = products[i-1].nameOfProduct;
// }

// nameOfProductEl.textContent = product1.nameOfProduct;
// descriptionEl.textContent = product1.description;
// referenceEl.textContent += product1.referenceNumber;
// priceEl.textContent = product1.value;
// availableEl.textContent = product1.available === true ? 'In Stock' : 'Sold out';


// Creating the Shopping Cart (Initialized as an empty Array)

//const cart = [];