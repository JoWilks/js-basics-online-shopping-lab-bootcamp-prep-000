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
 getCart().push(itemObject);   //push item object into cart array
 return `${item} has been added to your cart.`;  //return message saying "'item' has been added to cart"
}

function viewCart() {
  //if shopping cart empty return "You shopping cart is empty."
  if (getCart().length === 0) {   
    return "Your shopping cart is empty.";     
  }
  else if (cart.length === 1) {
  var item = cart[cart.length].itemName;
  var lastprice = cart[cart.length].itemPame;
  var allItemsMsg = allItems.join(', ') //combine all items in allItems array into 1 string.
  return `In your cart, you have ${allItems}, and ${lastitem} at ${lastprice}.` //return message about what is in cart.
  }
  else {  //return list of items in cart
    var allItems = [];  //define allItems array to but in item and price details from cart
    var cart = getCart(); 
    for (let i = 0; i<cart.length - 1; i++) {  //iterate through all cart array
    var Name = cart[i].itemName;     //pull & save ith items name from cart
    var Price = cart[i].itemPrice;    //pull & save ith items price from cart
    allItems.push(`${Name} at $${Price}`); //push ith item name & price onto end of new array called allItems
  }
  var lastitem = cart[cart.length].itemName;
  var lastprice = cart[cart.length].itemPame;
  var allItemsMsg = allItems.join(', ') //combine all items in allItems array into 1 string.
  return `In your cart, you have ${allItems}, and ${lastitem} at ${lastprice}.` //return message about what is in cart.
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
