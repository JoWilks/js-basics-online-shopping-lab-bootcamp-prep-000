var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var Price = Math.floor((Math.random() * 100) + 1)  //rand gen no between 1-100
 var itemObject = {itemName: item, itemPrice: Price};   //create an object with the item name and item price
 cart.push(itemObject);   //push item object into cart array
 return `${item} has been added to your cart.`  //return message saying "'item' has been added to cart"
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
