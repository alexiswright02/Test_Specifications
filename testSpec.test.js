//--------------------------------------TEST CODE---------------------------------------
//import the functions to be "tested"
const {multiplication, concatOff } = require("./testSpec");

//unit test specifications for multiplication function---------------------------------
//EXPECT [action] TO BE [result]
//EXPECT multiplication(5,5) TO BE a number
//EXPECT multiplication(5,5) TO BE equal to 25
//EXPECT multiplication(5,10) TO BE equal to 50
//EXPECT multiplication(5,0) TO BE equal to 0
//EXPECT multiplication(5,"5") TO BE an invalid input
//EXPECT multiplication() TO BE an invalid input

//unit test specifications for concatOdds function------------------------------------
//EXPECT [action] TO BE [result]
//EXPECT concatOdds([1,3,5],[7,9,11]) TO BE [1,3,5,7,9,11]
//EXPECT concatOdds([2,4,6],[8,10,12]) TO BE [] (empty)
//EXPECT concatOdds([-1,2,3],[4,-5,6]) TO BE [-1,3,-5]
//EXPECT concatOdds([1,3,5],[1,3,5]) TO BE [1,3,5]
//EXPECT concatOdds([],[]) TO BE [] (empty)
//EXPECT concatOdds() TO BE an invalid input
//EXPECT concatOdds([a,3,5],[7,9,11]) TO BE [3,5,7,9,11]

//functional test specifications for shopping cart feature----------------------------
//runs simulations to ensure functionality from the users perspective
//WHEN the user ..., they SHOULD ...
/* WHEN the user clicks the cart icon with nothing added to their cart, 
   they SHOULD be met with a message saying "your cart is empty" 
   and two buttons: sign in to your account and sign up */

/* WHEN the user adds the first item to their cart, 
   they SHOULD see only the first item, the subtotal, and the item count being 1
   along with the proceed to checkout button */

/* WHEN the user adds a new item to their cart, 
   they SHOULD see the newest item on top, an updated subtotal and item count
   along with the proceed to checkout button */

/* WHEN the user leaves the shopping cart page or checkout process at any time, 
   they SHOULD have their cart contents remain saved for when they return */

/* WHEN the user clicks the proceed to checkout button and they are NOT LOGGED IN, 
   they SHOULD be met with a sign in form, a create new account button, and 
   continue as guest button*/

/* WHEN the user clicks the proceed to checkout button and they ARE LOGGED IN, 
   they SHOULD be met with a list of their shopping cart items accompanied by a
   a photo and the price, shipping cost options, new order total taking in shipping
   and tax costs, the last provided delivery address and card number prefilled and 
   lastly a place your order button */

/* WHEN the user clicks the create new account button, 
   they SHOULD be met with a form to input their name, number, email, and password
   along with a continue button which takes the user to the checkout page with no
   shipping address or card number prefilled*/

/* WHEN the user clicks the continue as guest button, 
   they SHOULD be met with a two required forms: one for shipping information and 
   another for their payment information as well as a third optional form for gift
   card information or promo codes as well as a continue button*/

/* WHEN the user who does not have their information prefilled enters a valid 
   address and payment, they SHOULD see a place order button which takes them to a
   confirmation page with their order details*/

/* WHEN the user who does not have their information prefilled enters an invalid'
   address or payment, they SHOULD see an error message letting them know which is
   invalid and that they should try again*/
