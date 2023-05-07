'use strict';

// DECLARING VARIABLES TO WORK WITH THE DOM (El = Element)
let nameOfProductEl = document.querySelector('.name-product');
let descriptionEl = document.querySelector('.description');
let referenceEl = document.querySelector('.reference');
let priceEl = document.querySelector('.price');
let availableEl = document.querySelector('.available');
const addProductEl = document.querySelector('.add-product');
const totalProductsEl = document.querySelector('.total-products');
const linkCartEl = document.querySelector('.link-cart');
const cartEl = document.querySelector('.cart');
const overlayEl = document.querySelector('.overlay');
const tableEl = document.querySelector('.table-1');
const totalValueEl = document.querySelector('.total-value');
const closeCartBtn = document.querySelector('.close-cart');
const buyBtn = document.querySelector('.buy-btn');

// CREATING THE PRODUCTS

const product1 = {
    nameOfProduct: "Laptop 1",
    referenceNumber: 'Ref: 000123',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1250,
    amount: 2,
    amountInCart: 0,
    image: 'image-1.jpg',
    available () {
        return this.amount > 0 ? true : false
    }
}

const product2 = {
    nameOfProduct: "Laptop 2",
    referenceNumber: 'Ref: 000124',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1200,
    amount: 2,
    amountInCart: 0,
    image: 'image-2.jpg',
    available () {
        return this.amount > 0 ? true : false
    }
}

const product3 = {
    nameOfProduct: "Laptop 3",
    referenceNumber: 'Ref: 000125',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1150,
    amount: 2,
    amountInCart: 0,
    image: 'image-3.jpg',
    available () {
        return this.amount > 0 ? true : false
    }
}

const product4 = {
    nameOfProduct: "Laptop 4",
    referenceNumber: 'Ref: 000126',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1100,
    amount: 2,
    amountInCart: 0,
    image: 'image-4.jpg',
    available () {
        return this.amount > 0 ? true : false
    }
}

const product5 = {
    nameOfProduct: "Laptop 5",
    referenceNumber: 'Ref: 000127',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1245,
    amount: 2,
    amountInCart: 0,
    image: 'image-5.jpg',
    available () {
        return this.amount > 0 ? true : false
    }
}

const product6 = {
    nameOfProduct: "Laptop 6",
    referenceNumber: 'Ref: 000128',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1240,
    amount: 2,
    amountInCart: 0,
    image: 'image-6.jpg',
    available () {
        return this.amount > 0 ? true : false
    }
}

const product7 = {
    nameOfProduct: "Laptop 7",
    referenceNumber: 'Ref: 000129',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1300,
    amount: 2,
    amountInCart: 0,
    image: 'image-7.jpg',
    available () {
        return this.amount > 0 ? true : false
    }
}

const product8 = {
    nameOfProduct: "Laptop 8",
    referenceNumber: 'Ref: 000130',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1155,
    amount: 2,
    amountInCart: 0,
    image: 'image-8.jpg',
    available () {
        return this.amount > 0 ? true : false
    }
}

const product9 = {
    nameOfProduct: "Laptop 9",
    referenceNumber: 'Ref: 000131',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1450,
    amount: 2,
    amountInCart: 0,
    image: 'image-9.jpg',
    available () {
        return this.amount > 0 ? true : false
    }
}

const product10 = {
    nameOfProduct: "Laptop 10",
    referenceNumber: 'Ref: 000132',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1420,
    amount: 2,
    amountInCart: 0,
    image: 'image-10.jpg',
    available () {
        return this.amount > 0 ? true : false
    }
}

const product11 = {
    nameOfProduct: "Laptop 11",
    referenceNumber: 'Ref: 000133',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1425,
    amount: 2,
    amountInCart: 0,
    image: 'image-11.jpg',
    available () {
        return this.amount > 0 ? true : false
    }
}

const product12 = {
    nameOfProduct: "Laptop 12",
    referenceNumber: 'Ref: 000134',
    description: `14" Laptop, Asus, SSD 256GB, RAM 16GB, IntelCore i7 3500Hz`, 
    value: 1430,
    amount: 2,
    amountInCart: 0,
    image: 'image-12.jpg',
    available () {
        return this.amount > 0 ? true : false
    }
}

const products = [product1, product2, product3, product4, product5, product6,  product7, product8, product9, product10, product11, product12 ];

// Creating the Shopping Cart (Initialized as an empty Array)

const cart = [];
// cart = [product1, product2];
let total = 0;
let totalInCart = 0;
//console.log(document.querySelector('.product-1'));

//console.log(document.querySelector(`.product-1`).children[1].textContent = product1.nameOfProduct);

const loadingInfoProduct = () => {
    for (let i = 1; i <= 12; i++) {
        // Add children[0] and change the images
        document.querySelector(`.product-${i}`).children[0]. src = `img/${products[i-1].image}`;
        document.querySelector(`.product-${i}`).children[1]. textContent = products[i-1].nameOfProduct;
        document.querySelector(`.product-${i}`).children[2]. textContent = products[i-1].description;
        document.querySelector(`.product-${i}`).children[3]. textContent = products[i-1].referenceNumber;
        document.querySelector(`.product-${i}`).children[4]. textContent = products[i-1].value;
        document.querySelector(`.product-${i}`).children[5]. textContent = products[i-1].available() === true ? 'In Stock' : 'Sold out';
    }
}

loadingInfoProduct();


//console.log(product1.available());
// nameOfProductEl.textContent = product1.nameOfProduct;
// descriptionEl.textContent = product1.description;
// referenceEl.textContent += product1.referenceNumber;
// priceEl.textContent = product1.value;
// availableEl.textContent = product1.available === true ? 'In Stock' : 'Sold out';

const showItemsCart = () => {
    for (let item of cart) {
        let productName = document.createElement('p');
        let productPrice = document.createElement('p');
        let productAmount = document.createElement('p');
        let productTotal = document.createElement('p');
        let nameTextNode = document.createTextNode(item.nameOfProduct);
        let priceTextNode = document.createTextNode(item.value);
        let amountTextNode = document.createTextNode(item.amountInCart);
        let totalTextNode = document.createTextNode(`${item.amountInCart * item.value}`);
        productName.appendChild(nameTextNode);
        productPrice.appendChild(priceTextNode);
        productAmount.appendChild(amountTextNode);
        productTotal.appendChild(totalTextNode);
        tableEl.appendChild(productName);
        tableEl.appendChild(productPrice);
        tableEl.appendChild(productAmount);
        tableEl.appendChild(productTotal);
    }
}


for (let i = 1; i <= 12; i++) {
    let addItem = document.querySelector(`.product-${i}`).children[6];

    addItem.addEventListener('click', () => {
        if (products[i-1].available()) {
            if (!cart.includes(products[i-1])) {
                products[i-1].amountInCart += 1;
                cart.push(products[i-1]);
            } else {
                products[i-1].amountInCart += 1;
            }
            
            total +=products[i-1].value;
            totalInCart += 1;
            totalProductsEl.textContent = totalInCart;
            totalProductsEl.classList.remove('hidden');
            console.log(cart);
            console.log(total);
            products[i-1].amount -= 1;
            loadingInfoProduct();
            
        }
        
    })
}



const openCart = () => {
    cartEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
    totalValueEl.textContent = total;
    showItemsCart();
}

const closeCart = () => {
    cartEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
}

linkCartEl.addEventListener('click', openCart);

closeCartBtn.addEventListener('click', closeCart);
overlayEl.addEventListener('click', closeCart);
buyBtn.addEventListener('click', closeCart);

console.log(cart);