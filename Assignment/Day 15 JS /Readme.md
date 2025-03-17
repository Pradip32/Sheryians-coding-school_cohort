# Assignments from Sheriyans Coding School (JavaScript) 🚀

This file contains various JavaScript assignments from Sheriyans Coding School, covering topics like conditionals, loops, string manipulation, and more.

Each assignment is separated by clear comments. Uncomment and run any section to test.

---

```javascript
// Assignment 1: Age Category Message 😃
// Ask the user for their age.
// If they are under 18, print “You are a minor.” 
// If they are between 18 and 60, print “You are an adult.” 
// If they are above 60, print “You are a senior citizen.”

var age = Number(prompt("enter your age:"));

if (age < 18) {
    console.log("You are a minor.");
    alert("You are a minor.");
}
else if (18 <= age >= 60) {
    console.log("You are a adult.");
    alert("You are a adult.")
}
else {
    console.log("You are a senior citizen.");
    alert("You are a senior citizen.")
}
```

---

```javascript
// Assignment 2: Even or Odd Sum 🔢
// Take two numbers from the user using prompt().
// If the sum of both numbers is even, print “Even Sum”;
// otherwise, print “Odd Sum.”

var n1 = Number(prompt("enter number1"));
var n2 = Number(prompt("enter number2"));

if ((n1 + n2) % 2 == 0) {
    console.log("even sum");
}
else {
    console.log("odd sum");
}
```

---

```javascript
// Assignment 3: Character Case Checker 🔤
// Ask the user for a single character.
// Check if it's uppercase, lowercase, or neither (not a letter).

let char = prompt("enter a character");
if (char >= "A" && char <= "Z") {
    console.log("it is uppercase");
}   
else if (char >= "a" && char <= "z") {
    console.log("it is lowercase");
}
else {
    console.log("it is neither not a latter");
}
```

---

```javascript
// Assignment 4: Largest of Three Numbers 🏆
// Take three numbers as input and print the largest number among them without using Math.max().

let n1 = Number(prompt("enter the number1"));
let n2 = Number(prompt("enter the number2"));
let n3 = Number(prompt("enter the number3"));

if (n2 < n1 && n3 < n1) {
    console.log("the largest number is ", n1)
}
else if (n1 < n2 && n3 < n2) {
    console.log("the largest number is ", n2)
}
else {
    console.log("the largest number is ", n3)
}
```

---

```javascript
// Assignment 5: Leap Year Checker 📅
// Ask the user for a year and determine if it's a leap year or not.

let y = Number(prompt("enter year"));
let check = y / 4;
if (check % 1 == 0) {
    console.log("the year is leap year");
}
else {
    console.log("the year is not a leap year")
}
```

---

```javascript
// Assignment 6: Simple Calculator 🧮
// Ask the user for two numbers and an operator (+, -, *, /).
// Perform the operation and display the result.

let n1 = Number(prompt("enter your first number"));
let n2 = Number(prompt("enter your second number"));

let op = prompt("enter an operation (+,-,*,/)");
 
if (op == "+") {
    console.log(n1 + n2);
}
else if (op == "-") {
    console.log(n1 - n2);
}
else if (op == "*") {
    console.log(n1 * n2);
}
else if (op == "/") {
    console.log(n1 * n2);
}
else {
    console.log("invalid input");
}
```

---

```javascript
// Assignment 7: Positive, Negative, or Zero ➕
// Take a number input and check if it is positive, negative, or zero.

let a = Number(prompt("enter a number"));

if (a > 0) {
    console.log("the number is positive");
}
else if (a < 0) {
    console.log("the number is negative");
}
else if (a == 0) {
    console.log("the number is zero");
}
else {
    console.log("enter number");
}
```

---

```javascript
// Assignment 8: User Greeting 👋
// Ask for the user's name and time (24-hour format).
// Greet them accordingly:
// 5 AM–12 PM: "Good Morning, [Name]!" 
// 12 PM–5 PM: "Good Afternoon, [Name]!" 
// 5 PM–9 PM: "Good Evening, [Name]!" 
// 9 PM–5 AM: "Good Night, [Name]!"

let n = prompt("enter your name");
let time = prompt("enter the time");

if (5 <= time && time <= 12) {
    console.log("good Morning", n);
}
else if (13 <= time && time <= 17) {
    console.log("good afternoon", n);
}
else if (18 <= time && time <= 21) {
    console.log("good Evening", n);
}
else if ((22 <= time && time <= 24) || (time == 0) || (1 <= time && time <= 4)) {
    console.log("good night", n);
}
else {
    console.log("invalid input")
}
```

---

```javascript
// Assignment 9: Traffic Light System 🚦
// Ask the user for a traffic light color (red, yellow, green).
// Print appropriate messages:
// Red: "Stop!" 
// Yellow: "Get Ready!" 
// Green: "Go!"

let light = prompt("enter the traffic light color");

if (light == "Red" || light == "red") {
    console.log("stop!");
}
else if (light == "Yellow" || light == "yellow") {
    console.log("Get Ready!");
}
else if (light == "Green" || light == "green") {
    console.log("Go!");
} 
else {
    console.log("invalid input");
}
```

---

```javascript
// Assignment 10: Multiplication Table ✖️
// Ask the user for a number and print its multiplication table up to 10.

let number = Number(prompt("enter the number"));

for (let i = 1; i <= 10; i++){
    console.log(number * i);
}
```

---

```javascript
// Assignment 11: Grade Calculator 📝
// Ask the user for their marks (0 - 100).
// Assign grades based on the range:
// 90 - 100: A 
// 80 - 89: B 
// 70 - 79: C 
// 60 - 69: D 
// Below 60: F

let g = prompt("enter your marks (0-100)");

if (90 <= g && 100 <= g) {
    console.log("A")
}
else if (80 <= g && 89 >= g) {
    console.log("B")
}
else if (70 <= g && 79 >= g) {
    console.log("C")
}
else if (60 <= g && 69 >= g) {
    console.log("D")
}
else if (60 >= g) {
    console.log("F")
}
else {
    console.log("invalid input")
}
```

---

```javascript
// Assignment 12: Simple Login System 🔒
// Set a predefined username and password.
// Ask the user to enter their credentials using prompt().
// If correct, print “Login Successful”; otherwise, print “Incorrect username or password.”

let a_username = prompt("enter the username");
let b_password = prompt("enter the password");
 
if (a_username == "monkey" && b_password == "black") {
    console.log("login Successful");
}
else {
    console.log("incorrect username or password");
}
```

---

```javascript
// Assignment 13: Swapping Without Third Variable 🔄
// Take two numbers from the user and swap their values without using a third variable.

let a = prompt("enter number1");
let b = prompt("enter number2");

[a, b] = [b, a];
console.log("a:", a);
console.log("b:", b);
```

---

```javascript
// Assignment 14: FizzBuzz (Multiple of Both) 🎉
// Ask the user for a number.
// If it's a multiple of both 3 and 5, print “FizzBuzz”; 
// if only 3, print “Fizz”; 
// if only 5, print “Buzz”; otherwise, print the number itself.

let a_num = prompt("enter the number");

if (a_num % 3 == 0 && a_num % 5 == 0) {
    console.log("FizzBuzz");
}
else if (a_num % 3 == 0) {
    console.log("Fizz");
}
else if (a_num % 5 == 0) {
    console.log("Buzz");
}
else {
    console.log("invalid input");
}
```

---

```javascript
// Assignment 15: Number Reversal 🔁
// Take a three-digit number from the user and print its reverse. (Example: 123 → 321).

let a_val = prompt("enter the 3 digit number"); // e.g., 123
let b_digit, sum = 0

while (a_val > 0) {
    b_digit = a_val % 10;
    sum = sum * 10 + b_digit;
    a_val = Math.floor(a_val / 10); // reduce the number
}
alert(sum);
```

---

```javascript
// Assignment 16: Sum of Digits ➕
// Take a number from the user and print the sum of its digits. (Example: 123 → 1 + 2 + 3 = 6).

let num_val = prompt("enter the number");
let digit, total = 0;

while (num_val > 0) {
    digit = num_val % 10;
    total = total + digit;
    num_val = Math.floor(num_val / 10);
}
alert(total);
```

---

```javascript
// Assignment 17: Palindrome Checker 🔍
// Ask the user for a word.
// Check if it reads the same forward and backward.
// Print “Palindrome” or “Not a Palindrome.”

let word = prompt("enter the word");
let rev_word = word.split("").reverse().join("");

if (word == rev_word) {
    console.log("palindrome");
}
else {
    console.log("not palindrome");
}
```

---

```javascript
// Assignment 18: Reverse Without String Methods ↩️
// Ask the user for a word and reverse it without using split(), reverse(), or join().

let text = prompt("enter the word");
let new_string = "";
for (let i = text.length - 1; i >= 0; i--) {
    new_string += text[i];
}
console.log(new_string);
```

---

```javascript
// Assignment 19: Find Second Largest 🥈
// Take three numbers as input and find the second largest number (without using sort() or Math.max()).

let numA = prompt("enter the number");
let numB = prompt("enter the number");
let numC = prompt("enter the number");

if ((numA < numB && numA > numC) || (numA < numC && numA > numB)) {
    console.log("a");
}
else if ((numB < numA && numB > numC) || (numB < numC && numB > numA)) {
    console.log("b");
}
else if ((numC < numA && numC > numB) || (numC < numB && numC > numA)) {
    console.log("c");
}
else {
    console.log("invalid input")
}
```

---

```javascript
// Assignment 20: Find First Non-Repeating Character 🔎
// Ask the user for a word and find the first character that does not repeat.
// Example: hello → h (since e, l, and o repeat).

let str = prompt("Enter the string");

for (let i = 0; i < str.length; i++){
    let count = false;
    for (let j = 0; j < str.length; j++){
        if (i != j && str[i] === str[j]) {
            count = true;
            break;
        }
    }
    if (count == false) {
        console.log(str[i]);
        break;
    }
}
```

---

```javascript
// Assignment 21: Even Digit Counter 🔢
// Take a number from the user and count how many even digits it has.

let numberStr = prompt("enter the number");
let count = 0;
for (let i = 0; i < numberStr.length; ++i) {
    if (numberStr[i] % 2 == 0) {
        count++;
    }
}
console.log(count);
```

---

```javascript
// Assignment 22: Nested Condition Challenge 💼
// Ask the user for their age and salary.
// Print a message based on conditions:
// If age is below 18, print “Not eligible” 
// If age is 18 or more but salary is less than ₹20,000, print “low salary” 
// If salary is ₹50,000 or more, print “high salary” 
// Otherwise, print “mediun salary”

let age_val = prompt("enter your age");
let salary = prompt("enter the salary");

if (age_val < 18) {
    console.log("Not eligible");
}
else if (age_val > 18 && salary < 20000) {
    console.log("low salary");
}
else if (age_val > 18 && salary > 50000) {
    console.log("high salary");
}
else {
    console.log("mediun salary");
}
```

---

```javascript
// Assignment 23: Toggle Case 🔄
// Ask the user for a word and toggle the case of every character.
// Example: HeLLo → hEllO.

let str_input = prompt("enter the words");
let new_str = "";

for (let i = 0; i < str_input.length; i++) {
    if ("A" <= str_input[i] && str_input[i] <= "Z") {
        new_str += str_input[i].toLowerCase();
    }
    else if ("a" <= str_input[i] && str_input[i] <= "z") {
        new_str += str_input[i].toUpperCase();
    }
    else {
        new_str += str_input[i];
    }
}
console.log(str_input);
console.log(new_str);
```

---

```javascript
// Assignment 24: Find the Missing Number in a Sequence ❓
// Take a list of consecutive numbers (except one missing) and find the missing number.
// Example: 1, 2, 3, 5 → Missing number is 4.

let arr = [1, 8, 10];
let missingNums = [];

let ls = arr[0];
let le = arr[arr.length - 1];

for (i = ls; i < le; i++) {
    if (!(arr.includes(i))) {
        missingNums.push(i);
    }
}

console.log(arr);
console.log(missingNums);
```

---

```javascript
// Assignment 25: Convert Number to Words 🔠
// Take a single-digit number and print it in words (Example: 1 → One, 2 → Two).

let a_num = Number(prompt("enter the value from 1 to 9"));

if (a_num >= 0 && a_num <= 9) {
    switch (a_num) {
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
        case 8:
            console.log("one");
            break;
        case 9:
            console.log("one");
            break;
    }
}
else {
    console.log("Enter only one digit bruh!");
}
```

---

Happy coding! 🎉
