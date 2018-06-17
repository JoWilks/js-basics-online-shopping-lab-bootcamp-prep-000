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
  var cart = getCart();
  if (cart.length === 0) {   
    return "Your shopping cart is empty.";     
  }
  //if shopping cart has 1 item.
  else if (cart.length === 1) {
  var oneItem = cart[0].itemName;
  var onePrice = cart[0].itemPrice;
  return `In your cart, you have ${oneItem} at $${onePrice}.` //return message about what is in cart.
  }
  //if shopping cart has more than 1 item.
  else {  //return list of items in cart
    var allItems = [];  //define allItems array to but in item and price details from cart
    for (let i = 0; i<cart.length - 1; i++) {  //iterate through all cart array
    var obj = cart[i];
    var Name = obj["itemName"];     //pull & save ith items name from cart
    var Price = obj["itemPrice"];     //pull & save ith items price from cart
    allItems.push(`${Name} at $${Price}`); //push ith item name & price onto end of new array called allItems
  }
  var lastno = cart.length
  var objlast = cart[objlast];
  var lastitem = objlast["itemName"];
  var lastprice = objlast["itemPrice"];
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
