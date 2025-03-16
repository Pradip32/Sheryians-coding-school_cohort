// 1. Age Category Message – 
// Ask the user for their age.
// If they are under 18,    print “You are a minor.” 
// If they are between 18 and 60,     print “You are an adult.” 
// If they are above 60,        print “You are a senior citizen.”

// var age = Number(prompt("enter your age:"));

// if (age < 18) {
//     console.log("You are a minor.");
//     alert("You are a minor.");
// }
// else if (18 <= age >= 60) {
//     console.log("You are a adult.");
//     alert("You are a adult.")
// }
// else {
//     console.log("You are a senior citizen.");
//     alert("You are a senior citizen.")
// }

// .....................................

// 2. Even or Odd Sum – 
// Take two numbers from the user using prompt().
// If the sum of both numbers is even, print “Even Sum”;
//  otherwise, print “Odd Sum.”

// var n1 = Number(prompt("enter number1"));
// var n2 = Number(prompt("enter number2"));
// 
// if ((n1 + n2) % 2 == 0) {
// console.log("even sum");
// }
// else {
// console.log("odd sum");
// }

// ...........................................

// 3. Character Case Checker –
//  Ask the user for a single character.
//  Check if it's uppercase, lowercase, or neither (not a letter).

// let char = prompt("enter a character");
// if (char >= "A" && char <= "Z") {
//     console.log("it is uppercase");
// }   
// else if (char >= "a" && char <= "z") {
//     console.log("it is lowercase");
// }
// else{
//     console.log("it is neither not a latter");
// }

// .........................................

//4. Largest of Three Numbers 
// – Take three numbers as input and print the largest number among 
// them without using Math.max().

// let n1 = Number(prompt("enter the number1"));
// let n2 = Number(prompt("enter the number2"));
// let n3 = Number(prompt("enter the number3"));

// if (n2 < n1 && n3 < n1) {
//     console.log("the largest number is ",n1)
// }
// else if (n1 < n2 && n3 < n2) {
//     console.log("the largest number is ", n2)
// }
// else {
//     console.log("the largest number is ", n3)
// }

// ....................................................

//5. Leap Year Checker 
// – Ask the user for a year 
// and determine if it's a leap year or not.

// let y = Number(prompt("enter year"));
// let check = y / 4;
// if (check % 1 == 0) {
//     console.log("the year is leap year");
// }
// else {
//     console.log("the year is not a leap year")
// }


// .................................

//6. Simple Calculator 
// – Ask the user for two numbers 
// and an operator(+, -, *, /).
// Perform the operation and display the result.

// let n1 = Number(prompt("enter your first number"));
// let n2 = Number(prompt("enter your second number"));
// 
// let op = prompt("enter an operation (+,-,*,/)");
// 
// if (op == "+") {
// console.log(n1 + n2);
// }
// else if (op == "-") {
// console.log(n1 - n2);
// }
// else if (op == "*") {
// console.log(n1 * n2);
// }
// else if (op == "/") {
// console.log(n1 * n2);
// }
// else {
// console.log("invalid input");
// }

// ..................................

// 7. Positive, Negative, or Zero 
// – Take a number input and check if it is positive, negative, or zero.

// let a = Number(prompt("enter a number"));

// if (a > 0) {
//     console.log("the number is positive");
// }
// else if (a < 0) {
//     console.log("the number is negative");
// }
// else if(a == 0) {
//     console.log("the number is zero");
// }
// else {
//     console.log("enter number");
// }


// ...................................

// 8. User Greeting 
// – Ask for the user's name and time (24-hour format).
// Greet them accordingly: 5 AM–12 PM: "Good Morning, [Name]!" 12 PM–5 PM: "Good Afternoon, [Name]!" 5 PM–9 PM: "Good Evening, [Name]!" 9 PM–5 AM: "Good Night, [Name]!"

// let n = prompt("enter your name");
// let time = prompt("enter the time");

// if ( 5 <= time &&  time <= 12 ) {
//     console.log("good Morning", n);
// }
// else if (13 <= time &&  time <= 17 ) {
//     console.log("good afternoon", n);
// }
// else if ( 18 <= time &&  time<= 21 ) {
//     console.log("good Evening", n);
// }
// else if ((22 <= time && time <= 24) || (time == 0) || (1 <= time && time <= 4) )
// {
//     console.log("good night", n);
// }
// else {
//     console.log("invalid input")
// }


// .................................................................

//9. Traffic Light System 
// – Ask the user for a traffic light color(red,yellow, green).
// Print appropriate messages:Red: "Stop!"Yellow: "Get Ready!"Green: "Go!"

// let light = prompt("enter the traffic light color");

// if (light == "Red" || light == "red") {
//     console.log("stop!");
// }
// else if (light == "Yellow" || light == "yellow") {
//     console.log("Get Ready!");
// }
// else if (light == "Green" || light == "green") {
//     console.log("Go!");
// } 
// else {
//     console.log("invalid input");
// }

// ...................................................................

// 10. Multiplication Table 
// – Ask the user for a number and print its multiplication table up to 10.

// let number = Number(prompt("enter the number"));

// for (let i = 1; i <= 10; i++){
//     console.log(number*i);
// }


// 11. Grade Calculator – 
// Ask the user for their marks(0 - 100).
//  Assign grades based on the range: 90 - 100: A 80 - 89: B 70 - 79: C 60 - 69: D Below 60: F

// let g = prompt("enter your marks (0-100)");

// if (90 <= g && 100 <= g) {
//     console.log("A")
// }
// else if (80 <= g && 89 >= g) {
//     console.log("B")
// }
// else if (70 <= g && 79 >= g) {
//     console.log("C")
// }
// else if (60 <= g && 69 >= g) {
//     console.log("D")
// }
// else if (60 >= g) {
//     console.log("F")
// }
// else {
//     console.log("invalid input")
// }


// ............................................

// 12. Simple Login System 
// – Set a predefined username and password.
// Ask the user to enter their credentials using prompt().If correct, print “Login Successful”; otherwise, print “Incorrect username or password.”

// let a = prompt("enter the username");
// let b = prompt("enter the password");
// 
// if (a == "monkey" && b == "black") {
// console.log("login Successful");
// }
// else {
// console.log("incorrect username or password");
// }


// ..........................................

// 13. Swapping Without Third Variable 
// – Take two numbers from the user and swap their values without using a third variable.

// let a = prompt("enter number1");
// let b = prompt("enter number2");

// [a, b] = [b, a];
// console.log("a:",a);
// console.log("b:",b);


// ..........................................

// FizzBuzz(Multiple of Both) 
// – Ask the user for a number.
// If it's a multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if only 5, print “Buzz”; otherwise, print the number itself.

// let a = prompt("enter the number");

// if (a % 3 == 0 && a % 5 == 0) {
//     console.log("FizzBuzz");
// }
// else if (a % 3 == 0) {
//     console.log("Fizz");
// }
// else if (a % 5 == 0) {
//     console.log("Buzz");
// }
// else {
//     console.log("invalid input");
// }


// .................................................
// 15. Number Reversal –
//  Take a three - digit number from the user and print its reverse. (Example: 123 → 321).

// let a = prompt("enter the 3 digit number"); // 123
// let b, sum = 0

// while (a > 0) {
//     b = a % 10;
//     sum = sum * 10 + b;
//     a = Math.floor(a / 10);//12.3
// }
// alert(sum);

// ............................................
// 16. Sum of Digits 
// – Take a number from the user and print the sum of its digits. (Example: 123 → 1 + 2 + 3 = 6).

// let a = prompt("enter the number");
// let b;
// let sum = 0;

// while (a > 0) {
//     b =a % 10;
//     sum = sum + b;
//     a = math.floor(a / 10);
// }
// alert(sum);


// .............................................

//17. Palindrome Checker 
// – Ask the user for a word.
// Check if it reads the same forward and backward.
// Print “Palindrome” or “Not a Palindrome.”

// let a = prompt("enter the word");
// let rev_a = (a.split("").reverse().join(""));

// if (a == rev_a) {
//     console.log("palindrome");
// }
// else {
//     console.log("not palindrome");
// }


// ................................................................

//18. Reverse Without String Methods 
// – Ask the user for a number and reverse it without using.
// split(), .reverse(), or.join().

// let a = prompt("enter the word");
// let new_string = "";
// for (let i = a.length - 1; i >= 0; i--) {
//     new_string += a[i];
// }
// console.log(new_string);


// ................................................................

//19. Find Second argest 
// – Take three numbers as input and find the second largest number(without using sort() or Math.max()).

// let a = prompt("enter the number");
// let b = prompt("enter the number");
// let c = prompt("enter the number");

// if ((a < b && a > c) || (a < c && a > b)) {
//     console.log("a");
// }
// else if ((b < a && b > c) || (b < c && b > a)) {
//     console.log("b");
// }
// else if ((c < a && c > b) || (c < b && c > a)) {
//     console.log("c");
//     }
// else {
//     console.log("invalid input")
// }

// ...............................................

// 20. Find First Non - Repeating Character 
// – Ask the user for a word and find the first character that does not repeat.
// Example: hello → h(since e, l, and o repeat).

// let a = prompt("Enter the string")

// for (let i = 0; i < a.length; i++){
//     let count = false;

//     for (let j = 0; j < a.length; j++){
//         if (i != j && a[i] === a[j]) {
//             count = true;
//             break;
//         }
//     }
//     if (count == false) {
//         console.log(a[i]);
//         break;
//     }
// }

// ........................................................

//21. Even Digit Counter 
// – Take a number from the user and count how many even digits it has.

// let a = prompt("enter the number");
// let count = 0;
// for (let i = 0; i < a.length ; ++i){
//     // for (let j = 0; j < a.length; ++j){
//     if (a[i] % 2 == 0) {
//         count++;
//         }
//     // }
// }
// console.log(count);

// ................................................................

//22. Nested Condition Challenge 
// – Ask the user for their age and salary.
//  Print a message based on conditions: If age is below 18, print “Not eligible” If age is 18 or more but salary is less than ₹20,000, print “Low Salary” If salary is ₹50,000 or more, print “High Salary” .Otherwise, print “Medium Salary”

// let a = prompt("enter your age");
// let s = prompt("enter the salary");

// if (a < 18) {
//     console.log("Not eligible");
// }
// else if (a > 18 && s < 20000) {
//     console.log("low salary");
// }
// else if (a > 18 && s > 50000) {
//     console.log("high salary");
// }
// else {
//     console.log("mediun salary");
// }

// .................................................................

// 23. Toggle Case 
// – Ask the user for a word and toggle the case of every character.
// Example: HeLLo → hEllO.

// let str = prompt("enter the words");
// let new_str = "";

// for (let i = 0; i < str.length; i++) {
//     if ("A"<= str[i] && str[i] <= "Z") {
//         new_str += str[i].toLowerCase();
//     }
//     else if ("a"<= str[i] && str[i] <= "z") {
//         new_str += str[i].toUpperCase();
//     }
//     else {
//         new_str += str[i];
//     }
// }
// console.log(str);
// console.log(new_str);

// .................................................

// 24. Find the Missing Number in a Sequence 
// – Take a list of consecutive numbers(except one missing) and find the missing number.
// Example: 1, 2, 3, 5 → Missing number is 4.

// let a = [1, 8, 10];
// let x = [];

// let ls = a[0]
// let le = a[a.length - 1]

// for (i = ls; i < le; i++) {
//     if (!(a.includes(i))) {
//         x.push(i);
//     }
// }

// console.log(a);
// console.log(x);

// .................................................

// 25. Convert Number to Words – 
// Take a single-digit number and
//  print it in words
// (Example: 1 → One, 2 → Two).

// let a = Number(prompt("enter the value from 1 to 9"));

// if (a >= 0 && a <= 9) {
//     switch (a) {

//         case 1:
//             console.log("one");
//             break;
//         case 2:
//             console.log("two");
//             break;
//         case 3:
//             console.log("three");
//             break;

//         case 4:
//             console.log("four");
//             break;

//         case 5:
//             console.log("five");
//             break;

//         case 6:
//             console.log("six");
//             break;

//         case 7:
//             console.log("seven");
//             break;

//         case 8:
//             console.log("one");
//             break;

//         case 9:
//             console.log("one");
//             break;

//     }
// }
// else {
//     console.log("Enter only one digit bruh!");
// }
