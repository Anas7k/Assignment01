// STEP 1
/*
// Convert the following identifiers to Camel Case notation:
// let some_month;
let someMonth;

// function the Month();
function theMonth() {
}

// let current-month;
let currentMonth;

// let summer_month;
let summerMonth;

// let MyLibrary-function
let myLibraryFunction;
*/


// STEP 2
/*
// Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
// numeric literal expression
let numericLiteral = 42;

// string literal expression
let stringLiteral = "Hello, World!";

// Boolean literal expression
let booleanLiteral = true;

// null literal expression
let nullLiteral = null;
*/


// STEP 3
/*
// Give me two examples of complex/variable expressions.
// Example 1
let x = 10;
let y = 5;
let result = (x * y) + (2 * x) - y;

// Example 2
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
*/


// STEP 4
/*
// Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
let strFirstName;
let strLastName;
let strAddress;
let strCity;
let strState;
let strZipCode;
let intYourAge;
let strReferralSource;
let boolMayWeContactYou;
*/


// STEP 5
/*
// Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
// Method 1: Individual Assignments
let strFirstName = "John";
let strLastName = "Doe";
let intYourAge = 30;

// Method 2: Sequential Assignments
let strFirstName = "Jane",
    strLastName = "Smith",
    intYourAge = 25;

// Method 3: Separate Declarations and Assignments
let strFirstName, strLastName, intYourAge;
strFirstName = "Alice";
strLastName = "Johnson";
intYourAge = 35;
*/


// STEP 6
/*
// Create a variable.  Add a number and a string and display the coerced result in the browser’s console window.
let number = 10;
let string = "20";

let result = number + string;

console.log(result);
*/


// STEP 7
/*
// Create two variables.
var part1, part2;

// For the first variable, add a Boolean and a string and display the coerced result.
part1 = true + " Lie";
console.log(part1);

// For the second variable, add a number and a Boolean and display the coerced result.
part2 = 10 + false;
console.log(part2);
*/


// STEP 8
/*
// Is the following string literal valid?
// var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';
// No.

// If not, how would you fix it?
// An escape backslash is needed to ignore the apostrophe in "I'm".
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);
*/


// STEP 9
/*
// Create a variable that produces a null value in the console window.
let nullValue = null;
console.log(nullValue);

// Create a variable that produces an undefined value in the console window.
let undefinedValue;
console.log(undefinedValue);
*/


// STEP 10
/*
// Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
window.console.log(typeof String());   // string
window.console.log(typeof Number());   // number
window.console.log(typeof Boolean());  // boolean
window.console.log(typeof {});         // object
var undefinedValue;
window.console.log(typeof undefinedValue);  // undefined
*/


// STEP 11
/*
// Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
// Hello Zak Ruvalcaba, welcome to the JavaScript class!
alert("Hello " + "Anas Ahmed" + ", welcome to the JavaScript class!");

Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
*/


// STEP 12
/*
// Declare a variable called name and set it equal to your name.
let name = "Anas Ahmed";

// Substitute your name in the previous alert string with the variable instead.
alert("Hello " + name + ", welcome to the JavaScript class!");
*/


// STEP 13
/*
// Declare a variable called course and set it equal to "JavaScript".
let course = "JavaScript";

// Rework the alert string to display the string of text using the variables.
let name = "Anas Ahmed";
alert("Hello " + name + ", welcome to the " + course + " class!");
*/


// STEP 14
/*
// Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!
let name = "Anas Ahmed";
let course = "JavaScript";
alert("Hello " + name + ".\nWelcome to the " + course + " class!");
*/


// STEP 15
/*
// Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
let course = "JavaScript";
let name = prompt("Please enter your name");
alert("Hello " + name + ".\nWelcome to the " + course + " class!");
*/


// STEP 16
/*
// Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
let name = prompt("Please enter your name");
let course = prompt("Which course are you taking?");
alert("Hello " + name + ".\nWelcome to the " + course + " class!");
*/


// STEP 17
/*
// Declare a variable called x and assign it a value of 10.
let x = 10;

// Declare a variable called y and assign it a value of 20.
let y = 20;

// Display the sum of those two numbers in the console window.
console.log(x + y);
*/


// STEP 18
/*
// Declare a variable called x and assign it a value of 20.
let x = 20;

// Add and assign 20 to that variable and display the result in the console window.
x += 20;
console.log(x);
*/


// STEP 19
/*
// Declare a variable called x and assign it a value of 20.
let x = 20;

// Multiply and assign 5 to that variable and display the result in the console window.
x *= 5;
console.log(x);
*/


// STEP 20
/*
// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
let x = 20 % 3;

// Divide and assign 1 to that variable and display the result in the console window.
x /= 1;
console.log(x);
*/


// STEP 21
/*
// Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
let a = 10;
let b = 20;
let c = 30;

let result = (a < b) && (c > b);

console.log(result);
*/


// STEP 22
/*
// Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
let x = 10;
let y = 20;

let result = (x > y) || (x === y);

console.log(result);
*/
