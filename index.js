let express = require('express');
let app = express();
let port = 3000;

app.get( '/', ( req, res ) => {
  res.send( 'Hello World!' );
});
//Question 1: Create an endpoint that returns a welcome message.
function getWelcomeMessage() {
  return "Welcome to our service!";
}

app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

//Question 2: Create an endpoint that takes a username as a query parameter and returns a greeting message.

function getGreetingMessage(username){
  return "Hello, " + username + "!";
}
app.get("/greet", (req, res) => {
   let username = req.query.username;
   res.send(getGreetingMessage(username));
});

//Question 3: Create an endpoint that takes a password as a query parameter and returns if it is strong (length > 15) or weak.
function checkPasswordStrength(password){
   if(password.length > 15){
     return "password is strong";
   }else{
     return "password is weak";
   }
}

app.get("/check-password", (req, res) =>{
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});

//Question 4: Create an endpoint that takes two numbers as query parameters and returns their sum.
function getSum(num1, num2){
  return num1 + num2;
}

app.get("/sum", (req, res) => {
  let num1= parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2).toString());
})

//Question 5: Create an endpoint that takes a username and a boolean isSubscribed indicating subscription status, and returns a message if the user is subscribed or not.
function getSubscriptionStatus(username, isSubscribed){ 
   if(isSubscribed){
     return username + " is Subscribed";
   }else{
     return  username + " is not Subscribed"
   }
}

app.get("/subscription-status", (req, res) => {
      let username = req.query.username;
      let isSubscribed = req.query.isSubscribed === "true";
      res.send(getSubscriptionStatus(username, isSubscribed));
})

//Question 6: Create an endpoint that takes a product price and a discount percentage, and returns the final price after discount.
function finalDiscountedPrice(price, discount){
  return price - (price * discount / 100);
}

app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(finalDiscountedPrice(price, discount).toString()); 
})

//Question 7: Create an endpoint that takes a user's age, gender, and name, and returns a personalized greeting message.
function getPersonalizedGreeting(age, gender,name){
   return "Hello, " + name + "! You are " + age + " years old " + gender + "." ;
}

 app.get("/personalized-greeting", (req, res) => {
   let age = parseFloat(req.query.age);
   let gender = req.query.gender;
   let name = req.query.name;
   res.send(getPersonalizedGreeting(age, gender, name));  
 })

//Question 8: Create an endpoint that takes a product price, discount percentage, and tax rate, and returns the final price after applying discount and tax.
 function getFinalPrice(price, discount, tax){
    let discountPrice =  price - (price * (discount / 100));
    return discountPrice + (discountPrice * (tax / 100));
 }

app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discouunt = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getFinalPrice(price, discouunt, tax).toString())
});

//Question 9: Create an endpoint that takes three fitness activity durations (running, cycling, swimming) and returns the total exercise time.
function getTotalExerciseTime(running, cycling, swimming){
   return running + cycling + swimming;
}

app.get("/total-exercise-time",(req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming).toString());
});


app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
})