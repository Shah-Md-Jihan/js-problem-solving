const shoppingCart = [
    { name: 'Shirt', price: 600, quantity: 1 },
    { name: 'Pent', price: 1000, quantity: 2 },
    { name: 'belt', price: 400, quantity: 1 },
    { name: 'Shoe', price: 2200, quantity: 3 },
    { name: 'Tie', price: 1000, quantity: 1 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productPrice = product.price * product.quantity;
        sum = sum + productPrice;
    }
    return sum;
}

const totalPrice = totalCost(shoppingCart);
console.log(totalPrice);