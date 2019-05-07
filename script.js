// The line below just ensures that all the HTML loads before we start running our JavaScript!
document.addEventListener('DOMContentLoaded', function() {
// We can compare numbers
// Convert the string inside each console.log() into code. Write down your guess as to whether the code will print true or false. We did the first one for you. 

/////////////////////
//////EXAMPLE///////
///////////////////
console.log("10 is less than 150")
// write the javascript code below
console.log(10 < 150)
// my guess: true


// Go look in the developer tools console and notice that `true` is printed below the sentence `10 is less than 150`. After you finish each comparison, refresh your Chrome page and check the developer tools console to make sure it printed what you predicted. 
/////////////////





console.log("1 is greater than or equal to 0") 
// write the javascript code below 
console.log(1>=0);
// my guess: true


console.log("7 is greater than 15")
// write the javascript code below 
console.log(7>=15);
// my guess: false



// This works with strings too!

console.log('The string "apple" is equal "apple"')
// write the javascript code below
console.log("apple"=="apple");
// my guess: true


console.log('The string "apple" is equal "orange"')
// write the javascript code below
console.log("apple"=="orange");
// my guess: false


console.log('The string "apple" is not equal to "apple"')
// write the javascript code below
console.log("apple"!="apple");
// my guess: false


console.log('The string "apple" is not equal to "orange""')
// write the javascript code below
console.log("apple"!="orange");
// my guess: true



// This works with variables too!
var myFavoriteColor = "blue"

console.log('The variable myFavoriteColor is equal to the string "blue"')
// write the javascript code below
console.log(myFavoriteColor=="blue");
// my guess:true


console.log('The variable myFavoriteColor is not equal to the string "red"')
// write the javascript code below
console.log(myFavoriteColor!="red");
// my guess: true


console.log('The variable myFavoriteColor is equal to the string "purple"')
// write the javascript code below
console.log(myFavoriteColor=="purple");
// my guess: false



// These variables are all booleans 
// We can see whether two booleans are both true using && (AND)
var likesComputers = true;
var likesSports = true;
var likesKnitting = false;
var likesDogs = false;
var likesCats = true;


// Predict if the combination will be true, then code it out to see if you're right.
console.log("I like computers and I like sports")
// my guess: true
// write the javascript code below
console.log(likesComputers&&likesSports);


// We can see whether one of two booleans is true using || (OR)
console.log("I like sports and I like knitting")
// my guess: false
// write the javascript code below
console.log(likesSports&&likesKnitting);


console.log("I like knitting or I like dogs")
// my guess: false
// write the javascript code below
console.log(likesKnitting||likesDogs);


});
