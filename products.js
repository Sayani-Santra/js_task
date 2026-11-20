
let products = [
    {
        productId: 101,
        productName: "Laptop",
        price: 50000,
        stock: 10
    },
    {
        productId: 102,
        productName: "Mouse",
        price: 500,
        stock: 25
    },
    {
        productId: 103,
        productName: "Keyboard",
        price: 1500,
        stock: 15
    },
    {
        productId: 104,
        productName: "Mobile",
        price: 20000,
        stock: 8
    },
    {
        productId: 105,
        productName: "Headphones",
        price: 800,
        stock: 20
    }
];

// Find products whose price is greater than 1000
let result = products.filter(function(product) {
    return product.price > 1000;
});

// Display product details
console.log("Products with price greater than 1000:");

result.forEach(function(product) {
    console.log("Product ID:", product.productId);
    console.log("Product Name:", product.productName);
    console.log("Price:", product.price);
    console.log("Stock:", product.stock);
    console.log("----------------------");
});
