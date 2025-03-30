// 1. Problem Statement: Indian Currency Notes Breakdown

// You need to write a program where the user inputs an amount in Indian Rupees, and the program should output the number of currency notes required to make up that amount using the largest denominations first.

// Denominations Available (Indian Rupees): ₹2000, ₹500, ₹200, ₹100, ₹50, ₹20, ₹10, ₹5, ₹2, ₹1

// Example 1:

// Input:
//     Amount: 4327
// Output:
//     ₹2000 x 2
//     ₹500 x 0
//     ₹200 x 1
//     ₹100 x 1
//     ₹50 x 0
//     ₹20 x 1
//     ₹10 x 0
//     ₹5 x 1
//     ₹2 x 1
//     ₹1 x 0

{
    // let a = Number(prompt("enter the amount:"));
    let a = Math.round(Math.random() * 10000)

    console.log(a);


    let counter2000 = 0;
    let counter500 = 0;
    let counter200 = 0;
    let counter100 = 0;
    let counter50 = 0;
    let counter20 = 0;
    let counter10 = 0;
    let counter5 = 0;
    let counter2 = 0;
    let counter1 = 0;

    for (b = 0; b <= a; b++) {
        if (a >= 2000) {
            a = a - 2000;
            counter2000++;
        }
    }

    for (b = 0; b <= a; b++) {
        if (a >= 500) {
            a = a - 500;
            counter500++;
        }
    }

    for (b = 0; b <= a; b++) {
        if (a >= 200) {
            a = a - 200;
            counter200++;
        }
    }

    for (b = 0; b <= a; b++) {
        if (a >= 100) {
            a = a - 100;
            counter100++;
        }
    }

    for (b = 0; b <= a; b++) {
        if (a >= 50) {
            a = a - 50;
            counter50++;
        }
    }

    for (b = 0; b <= a; b++) {
        if (a >= 20) {
            a = a - 20;
            counter20++;
        }
    }

    for (b = 0; b <= a; b++) {
        if (a >= 10) {
            a = a - 10;
            counter10++;
        }
    }

    for (b = 0; b <= a; b++) {
        if (a >= 5) {
            a = a - 5;
            counter5++;
        }
    }

    for (b = 0; b <= a; b++) {
        if (a >= 2) {
            a = a - 2;
            counter2++;
        }
    }

    for (b = 0; b <= a; b++) {
        if (a >= 1) {
            a = a - 1;
            counter1++;
        }
    }

    console.log(`2000 x ${counter2000}`);
    console.log(`500 x ${counter500}`);
    console.log(`200 x ${counter200}`);
    console.log(`100 x ${counter100}`);
    console.log(`50 x ${counter50}`);
    console.log(`20 x ${counter20}`);
    console.log(`10 x ${counter10}`);
    console.log(`5 x ${counter5}`);
    console.log(`2 x ${counter2}`);
    console.log(`1 x ${counter1}`);
}

// ------------------------------------------

// 2.Write a program to accept rating of the movie as double and Movie name as String. 
// Check and print the category of movie based on rating. 

// Example -
// INPUT 
//     4.9 
// RRR 
//     OP - RR is a Super Hit.

{
    let rateing = prompt("enter the rateing:");
    let movie_name = prompt("enter the movie_name:");

    if (0.0 <= rateing && rateing <= 2.0) {
        console.log(`${movie_name} is a Flop`)
    }
    else if (2.1 <= rateing && rateing <= 3.4) {
        console.log(`${movie_name} is a Semi_Hit`)
    }
    else if (3.5 <= rateing && rateing <= 4.5) {
        console.log(`${movie_name} is a Hit`)
    }
    else if (4.6 <= rateing && rateing <= 5.0) {
        console.log(`${movie_name} is a Super Hit`)
    }
}

// ------------------------------------------


// 3. Write a program to calculate the salary as per the following table

{
    let Gender = prompt("enter your Gender:");
    let Year_of_service = prompt("enter your Year of service:");
    let Qualifcations = prompt("enter your Qualifcations:");

    if ((Gender == "Male" || Gender == "male") && Year_of_service >= 10 && (Qualifcations == "Post Graduate" || Qualifcations == "post Graduate")) {
        console.log("15000")
    }

    else if ((Gender == "Male" || Gender == "male") && Year_of_service >= 10 && (Qualifcations == "Graduate" || Qualifcations == "graduate")) {
        console.log("10000")
    }
    else if ((Gender == "Male" || Gender == "male") && Year_of_service < 10 && (Qualifcations == "Post Graduate" || Qualifcations == "post Graduate")) {
        console.log("10000")
    }
    else if ((Gender == "Male" || Gender == "male") && Year_of_service < 10 && (Qualifcations == "Graduate" || Qualifcations == "graduate")) {
        console.log("7000")
    }
    else if ((Gender == "Female" || Gender == "female") && Year_of_service >= 10 && (Qualifcations == "Post Graduate" || Qualifcations == "post Graduate")) {
        console.log("12000")
    }
    else if ((Gender == "Female" || Gender == "female") && Year_of_service >= 10 && (Qualifcations == "Graduate" || Qualifcations == "graduate")) {
        console.log("9000")
    }
    else if ((Gender == "Female" || Gender == "female") && Year_of_service < 10 && (Qualifcations == "Post Graduate" || Qualifcations == "post Graduate")) {
        console.log("10000")
    }
    else if ((Gender == "Female" || Gender == "female") && Year_of_service < 10 && (Qualifcations == "Graduate" || Qualifcations == "graduate")) {
        console.log("6000")
    }
}
