// Task 1

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("You are logged in!")
} else {
    console.log("You are not logged in.")
}

// Task 2
// Array of products to buy
let products = [
    {name: "Product 1", price: 10.99},{name: "Product 2", price 99.99},{name: "Product 3", price 69.99}
];
// Displays the list of products
for (let i = 0; i < products.length; i++) {
    console.log(`Product ${i + 1}: ${products[i].name} - $${products[i].price}`);
}

//Task 3

//Adds products to cart
let cart = [
    {name: "Product 1", price: 10.99, quantity: 2}, {name: "Product 2", price: 99.99, quantity: 1}
];

let totalCost = 0; 
// calculate total cost of products in cart
for (let i = 0; i < cart.length; i++) {
    totalCost += cart [i].price * cart[i].quantity;
}
console.log(`Total cost: $${totalCost}`);