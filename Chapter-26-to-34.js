// -----------------------------------😊😊Chapter-26-to-34-start😊😊----------------------------------

document.write("<h2>Chapter 26 to 34</h2>");

// Question : 1

document.write("<h3>Question : 1</h3>");

var number = +prompt("Enter positive number");
document.write("Number: " + number + "<br>");
var round = Math.round(number);
document.write("Round of value: " + round + "<br>");
var floor = Math.floor(number);
document.write("Floor value: " + floor + "<br>");
var ceil = Math.ceil(number);
document.write("Ceil value: " + ceil + "<br>");

// Question : 2

document.write("<h3>Question : 2</h3>");

var number = +prompt("Enter negative number");
document.write("Number: " + number + "<br>");
var round = Math.round(number);
document.write("Round of value: " + round + "<br>");
var floor = Math.floor(number);
document.write("Floor value: " + floor + "<br>");
var ceil = Math.ceil(number);
document.write("Ceil value: " + ceil + "<br>");

// Question : 3

document.write("<h3>Question : 3</h3>");

var number = +prompt("Enter positive floating point number");
document.write("Number: " + number + "<br>");
var round = Math.round(number);
document.write("Round of value: " + round + "<br>");
var floor = Math.floor(number);
document.write("Floor value: " + floor + "<br>");
var ceil = Math.ceil(number);
document.write("Ceil value: " + ceil + "<br>");

// Question : 4

document.write("<h3>Question : 4</h3>");

var number = +prompt("Enter negative floating point number");
document.write("Number: " + number + "<br>");
var round = Math.round(number);
document.write("Round of value: " + round + "<br>");
var floor = Math.floor(number);
document.write("Floor value: " + floor + "<br>");
var ceil = Math.ceil(number);
document.write("Ceil value: " + ceil + "<br>");

// Question : 5

document.write("<h3>Question : 5</h3>");

var number = -23;
var absolute = Math.abs(23);
document.write("The absolute value of: " + number + " is " + absolute);

// Question : 6

document.write("<h3>Question : 6</h3>");

var dice = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + dice);

// Question : 7

document.write("<h3>Question : 7</h3>");

var name1 = prompt("Enter your name ");
var choice1 = prompt("Enter your choice Head / Tail").toLowerCase();
var name2 = prompt("Enter your name ");
var choice2 = prompt("Enter your choice Head / Tail").toLowerCase();

var toss = Math.floor(Math.random() * 2);

if (toss === 0) {
  if (choice1 === "head") {
    document.write("Congratulations You win " + name1 + "🎉🎉");
  } else if (choice2 === "head") {
    document.write("Congratulations You win " + name2 + "🎉🎉");
  }
} else {
  if (choice1 === "tail") {
    document.write("Congratulations You win " + name1 + "🎉🎉");
  } else if (choice2 === "tail") {
    document.write("Congratulations You win " + name2 + "🎉🎉");
  }
}

// Question : 8

document.write("<h3>Question : 8</h3>");

var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("Random number between 1 and 100: " + randomNumber);

// Question : 9

document.write("<h3>Question : 9</h3>");

var userWeight = prompt(
  "Enter your weight (examples: 50, 50kgs, 50.2kgs, 50.2kilograms)",
);
var weight = parseFloat(userWeight);
document.write("The weight of user is " + weight + " kilograms");

// Question : 10

document.write("<h3>Question : 10</h3>");

var secretNumber = Math.round(Math.random() * 10);
var guessNumber = prompt("Guess the secret number 1 to 10");
guessNumber = Number(guessNumber);

if (secretNumber === guessNumber) {
  alert("Congratulate you guess the number");
} else {
  alert("Try again!");
}

// Question : 11

document.write("<h3>Question : 11</h3>");

var date = new Date();

document.write(date);

// Question : 12

document.write("<h3>Question : 12</h3>");

var date = new Date();
var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augest",
  "September",
  "October",
  "November",
  "Decenber",
];

var curerntMonth = date.getMonth();

document.write("Current month: " + month[curerntMonth]);

// Question : 13

document.write("<h3>Question : 13</h3>");

var date = new Date();

var days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
var today = date.getDay();

document.write("Today is: " + days[today]);

// Question : 14

document.write("<h3>Question : 14</h3>");

var date = new Date();

var days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
var today = date.getDay();

if (days[today] === "Sun" || days[today] === "Sat") {
  document.write("It's Fun day😊😊!");
} else {
  document.write("Working day😪😪!");
}

// Question : 15

document.write("<h3>Question : 15</h3>");
var date = new Date();
var today = date.getDate();

if (today < 16) {
  document.write("First fifteen days of the month");
} else {
  document.write("Last days of the month");
}
// Question : 16

document.write("<h3>Question : 16</h3>");

var date = new Date();
var milliSecond = date.getTime();
var minutes = milliSecond / (1000 * 60 * 60);

document.write("Current date: " + date);
document.write("<br>Elapsed milliseconds January 1, 1970: " + milliSecond);
document.write("<br>Elapsed minutes January 1, 1970: " + minutes);

// Question : 17

document.write("<h3>Question : 17</h3>");

var date = new Date();
var hours = date.getHours();
if (hours < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

// Question : 18

document.write("<h3>Question : 18</h3>");

var laterDate = new Date(2020, 11, 31);
document.write("Later date: " + laterDate);

// Question : 19

document.write("<h3>Question : 19</h3>");

var ramadan2015 = new Date(2018, 5, 18);
var today = new Date();
passedDays = today.getTime() - ramadan2015.getTime();

passedDays = Math.round(passedDays / (1000 * 60 * 60 * 24));
document.write(
  "<br>" + passedDays + " days have passed since 1st Ramadan 2015",
);

// Question : 20

document.write("<h3>Question : 20</h3>");

var referenceDate = new Date("Dec 05, 2015 ");
var start2015 = new Date("Jan 01, 2015 00:00:00");
var seconds = referenceDate.getTime() - start2015.getTime();
var secondsPassed = Math.floor(seconds / (1000 * 60));

document.write(
  "On reference date " +
    referenceDate +
    ",<br>" +
    secondsPassed +
    " seconds had passed since beginning of 2015",
);

// Question : 21

document.write("<h3>Question : 21</h3>");

var currentDate = new Date();
var currentHours = currentDate.getHours();

currentDate.setHours(currentHours - 1);
document.write("current date: " + new Date() + "<br>");
document.write("1 hour ago, it was " + currentDate);

// Question : 22

document.write("<h3>Question : 22</h3>");

var currentDate = new Date();
var currentDateYear = currentDate.getFullYear();

var pastDate = new Date(currentDate);
pastDate.setFullYear(currentDateYear - 100);

document.write(
  "current date: " +
    currentDate +
    "<br>" +
    "100 years back, it was " +
    pastDate,
);

// Question : 23

document.write("<h3>Question : 23</h3>");

var userAge = prompt("Enter yuor age");
var date = new Date();
var currentyear = date.getFullYear();
var userYear = currentyear - userAge;
document.write(
  "Your age is: " + userAge + "<br>Your birth year is: " + userYear,
);

// Question : 24

document.write("<h3>Question : 24</h3>");

var customerName = prompt("Enter Customer Name:");
var curerntMonth = prompt("Enter Current Month:");
var numberOfUnit = parseFloat(prompt("Enter Number of Units:")).toFixed(2);
var chargePerUnit = parseFloat(prompt("Enter Charges per Unit:")).toFixed(2);
var netAmountPayable = numberOfUnit * chargePerUnit;
var latePaymentSurcharge = 500;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
document.write("<h4>K-Electric Bill</h4>")
document.write(
  "Customer Name: " +
    customerName +
    "<br>Current Month: " +
    curerntMonth +
    "<br>Number of units: " +
    numberOfUnit +
    "<br>Charges per unit: " +
    chargePerUnit +
    "<br><br>Net Amount Payable (within Due Date): " +
    netAmountPayable.toFixed(2) +
    "<br>Late Payment Surcharge: " +
    latePaymentSurcharge +
    "<br>Gross Amount Payable (after Due Date): " +
    grossAmountPayable.toFixed(2)
); 

// -----------------------------------✌✌Chapter-26-to-34-end✌✌----------------------------------

