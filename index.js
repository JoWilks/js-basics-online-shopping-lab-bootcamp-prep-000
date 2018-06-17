var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var Price = Math.floor((Math.random() * 100) + 1);  //rand gen no between 1-100
 var itemObject = {itemName: item, itemPrice: Price};   //create an object with the item name and item price
 getcart().push(itemObject);   //push item object into cart array
 return `${item} has been added to your cart.`;  //return message saying "'item' has been added to cart"
}

function viewCart() {
  //if shopping cart empty return "You shopping cart is empty."
  if (getCart().length === 0) {   
    return "Your shopping cart is empty";     
  }
  else {  //return list of items in cart
    var allItems = [];  //define allItems array to but in item and price details from cart
    var cart = getcart(); 
    for (let i = 0; i<cart.length; i++) {  //iterate through all cart array
    itemName = cart[i].itemName;     //pull & save ith items name from cart
    itemPrice = cart[i].itemPrice;    //pull & save ith items price from cart
    allItems.push(`${itemName} at $${itemPrice}`); //push ith item name & price onto end of new array called allItems
  }
  allItemsMsg = allItems.join(', ') //combine all items in allItems array into 1 string.
  return `In your cart, you have  ${allItems}.` //return message about what is in cart.
  }
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
