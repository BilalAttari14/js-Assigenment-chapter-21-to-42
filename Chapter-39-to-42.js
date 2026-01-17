// -----------------------------------😊😊Chapter-39-to-42-start😊😊----------------------------------

document.write("<h2>Chapter 39 to 42</h2>");

// Question : 1

document.write("<h3>Question : 1</h3>");

var age = prompt("Enter your age");

switch (true) {
  case age > 18:
    document.write("Old enough");
    break;
  default:
    document.write("Too young");
}

// Question : 2

document.write("<h3>Question : 2</h3>");

var num = prompt("Enter a number:");

switch (num % 3) {
  case 0:
    document.write("Number is divisible by 3");
    break;
  default:
    document.write("Number is not divisible by 3");
}

// Question : 3

document.write("<h3>Question : 3</h3>");

var number1 = prompt("Enter first number:");
var number2 = prompt("Enter second number:");
var operator = prompt("Enter operator (+, -, *, /, %):");

var result;

switch (operator) {
  case "+":
    result = number1 + number2;
    break;

  case "-":
    result = number1 - number2;
    break;

  case "*":
    result = number1 * number2;
    break;

  case "/":
    result = number1 / number2;
    break;

  case "%":
    result = number1 % number2;
    break;

  default:
    document.write("Invalid operator");
}

document.write("Result: " + result);

// Question : 4

document.write("<h3>Question : 4</h3>");
var today = new Date();
var dayNumber = today.getDay();
var dayName;

switch (dayNumber) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

document.write("Today is " + dayName);

// Question : 5

document.write("<h3>Question : 5</h3>");

var today = new Date();
var day = today.getDay();

switch (day) {
  case 0:
    document.write("Today is Sunday");
    break;
  case 6:
    document.write("Today is Saturday");
    break;
  default:
    document.write("Today is a working day");
}

// Question : 6

document.write("<h3>Question : 6</h3>");

function checkCar() {
  var text;
  var favCar = prompt("What is your favorite car?").toLowerCase();
  switch (favCar) {
    case "bmw":
      text = "German car";
      break;
    case "ford":
      text = "American car";
      break;
    case "peugeot":
      text = "French car";
      break;
    default:
      text = "Unknown car name";
  }

  document.write(text);
}

checkCar();

// Question : 7

document.write("<h3>Question : 7</h3>");

// in this code i was add break and apply lowercase function

function checkFruit() {
  var text;
  var fruits = prompt("Enter a fruit name").toLowerCase();

  switch (fruits) {
    case "banana":
      text = "Banana is good!";
      break;
    case "orange":
      text = "I am not a fan of orange.";
      break;
    case "apple":
      text = "How you like them apples?";
      break;
    default:
      text = "I have never heard of that fruit.";
  }
  document.write(text);
}

checkFruit();

// Question : 8

document.write("<h3>Question : 8</h3>");

function showMarksRange() {
  var grade = prompt("Enter your grade (A, B, C, D, F):");
  var range;

  switch (grade.toUpperCase()) {
    case "A":
      range = "Marks [>= 70]";
      break;
    case "B":
      range = "Marks [>= 60 and < 70]";
      break;
    case "C":
      range = "Marks [>= 50 and < 60]";
      break;
    case "D":
      range = "Marks [>= 40 and < 50]";
      break;
    case "F":
      range = "Marks [< 40]";
      break;
    default:
      range = "Invalid grade";
  }
  document.write("Grade " + grade.toUpperCase() + ": " + range);
}

showMarksRange();

// Question : 9

document.write("<h3>Question : 9</h3>");

var input = prompt("Enter the number of the month (1-12):", 8);
var month = parseInt(input);
var monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month";
}

document.write("Month number: " + month + "<br>");
document.write("Month name: " + monthName);

// Question : 10

document.write("<h3>Question : 10</h3>");

var age = prompt("Enter your age");
var voteable = age < 18 ? "Too young" : "Old enough";

document.write(voteable);

// While and do while loop

// Question : 11

document.write("<h3>Question : 11</h3>");

a = 0;
while (a < 5) {
  document.write("Hello World<br>");
  a++;
}

// Question : 12

document.write("<h3>Question : 12</h3>");

a = 1;
while (a <= 10) {
  document.write(a + "<br>");
  a++;
}

// Question : 13

document.write("<h3>Question : 13</h3>");

var number = parseInt(prompt("Enter the number for multiplication table:"));
var length = parseInt(prompt("Enter the length of the table:"));
document.write(
  "Multiplication table of: " + number + "<br>Length: " + length + "<br>",
);

var a = 1;
while (a <= length) {
  document.write(number + " × " + a + " = " + number * a + "<br>");
  a++;
}

// Question : 14

document.write("<h3>Question : 14</h3>");

var mobile = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
var a = 0;
while (a < mobile.length) {
  document.write(mobile[a] + "<br>");
  a++;
}

// Question : 15

document.write("<h3>Question : 15</h3>");
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

var a = 0;
while (a < fruits.length) {
  document.write(fruits[a] + "<br>");
  a++;
}
var i = 0;
while (i < fruits.length) {
  document.write("<br>Element at index " + i + " is " + fruits[i]);
  i++;
}

// Question : 16

document.write("<h3>Question : 16</h3>");
var n = parseInt(prompt("Enter number of items:"));
var items = [];

var a = 0;
while (a < n) {
  items[a] = prompt("Enter item " + (a + 1) + ":");
  a++;
}
document.write("Number of items: " + n + "<br>");
document.write("Items:<br><br>");
i = 0;
while (i < n) {
  document.write(items[i] + "<br>");
  i++;
}

// Question : 17

document.write("<h3>Question : 17</h3>");

var i;
// a
document.write("<b>Counting:</b><br>");
i = 1;
while (i <= 15) {
  if (i <= 15) {
    document.write(i + (i < 15 ? ", " : ""));
  }
  i++;
}
// b
document.write("<br><br><b>Reverse counting:</b><br>");

i = 10;
while (i >= 1) {
  if (i >= 1) {
    document.write(i + (i > 1 ? ", " : ""));
  }
  i--;
}
// c
document.write("<br><br><b>Even:</b><br>");
i = 0;
while (i <= 20) {
  if (i % 2 === 0) {
    document.write(i + (i < 20 ? ", " : ""));
  }
  i++;
}
// d
document.write("<br><br><b>Odd:</b><br>");
i = 1;
while (i < 20) {
  if (i % 2 !== 0) {
    document.write(i + (i < 19 ? ", " : ""));
  }
  i++;
}
// e
document.write("<br><br><b>Series:</b><br>");
i = 1;
while (i <= 20) {
  if (i % 2 === 0) {
    document.write(i + "k" + (i < 20 ? ", " : ""));
  }
  i++;
}

// Question : 18

document.write("<h3>Question : 18</h3>");

var item = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/ma'am?",
);
userInput = userInput.toLowerCase();

var found = false;
var index = 0;

var i = 0;
while (i < item.length) {
  if (item[i] === userInput) {
    found = true;
    index = i;
    break;
  }
  i++;
}

if (found) {
  document.write(
    userInput + " is <b>available</b> at index " + index + " in our bakery",
  );
} else {
  document.write(
    "We are sorry. " + userInput + " is <b>not available</b> in our bakery",
  );
}

// Question : 19

document.write("<h3>Question : 19</h3>");

var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

document.write("<table border='1' cellpadding='8'>");
document.write("<tr>");
document.write("<th>Student</th>");
document.write("<th>Score</th>");
document.write("</tr>");

var i = 0;
while (i < students.length) {
  document.write("<tr>");
  document.write("<td>" + students[i] + "</td>");
  document.write("<td>" + scores[i] + "</td>");
  document.write("</tr>");
  i++;
}

document.write("</table>");

// Question : 20

document.write("<h3>Question : 20</h3>");

var scores = [12, 45, 3, 22, 34, 50];
var stopValue = parseInt(prompt("Enter stop value:"));

var i = 0;
while (i < scores.length) {
  document.write(scores[i]);
  if (scores[i] === stopValue) {
    break;
  }
  document.write(", ");
  i++;
}

// Question : 21

document.write("<h3>Question : 21</h3>");

var array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var i = 0;
while (i < array.length) {
  var j = 0;
  var row = "";
  while (j < array[i].length) {
    row += array[i][j] + " ";
    j++;
  }

  document.write("<br>" + row);
  i++;
}

// Question : 22

document.write("<h3>Question : 22</h3>");

var num = parseFloat(prompt("Enter a number:"));
document.write("<b>Decreasing values:</b><br>");

while (num >= 0) {
  document.write(num + (num > 0 ? ", " : ""));
  num -= 0.5;
}

// Question : 23

document.write("<h3>Question : 23</h3>");

var i = 0;
while (i <= 20) {
  if (i % 2 === 0) {
    document.write(i + " is even<br>");
  } else {
    document.write(i + " is odd<br>");
  }
  i++;
}

// Question : 24

document.write("<h3>Question : 24</h3>");

var i = 1;
var product = 1;

while (i <= 7) {
  if (i % 2 !== 0) {
    product = product * i;
  }
  i++;
}

document.write("The product of odd integers from 1 to 7 is: " + product);

// Question : 25

document.write("<h3>Question : 25</h3>");

var stars = parseInt(prompt("Enter the initial number of stars:", 7));

while (stars > 0) {
  var i = 0;
  while (i < stars) {
    document.write("*");
    i++;
  }
  document.write("<br>");
  stars--;
}

// Question : 26

document.write("<h3>Question : 26</h3>");

var number = parseInt(prompt("Enter number of lines:", 4));
var pattren;

// a.
document.write("<b>a.</b> <br>");
var i = 1;
while (i <= number) {
  pattren = "*";
  var j = 1;
  while (j < number) {
    pattren += "*";
    j++;
  }
  document.write(pattren + "<br>");
  i++;
}
// b.
document.write("<br><b>b.</b> <br>");
i = 1;
while (i <= number) {
  var j = 1;
  while (j <= i) {
    document.write("*");
    j++;
  }
  document.write("<br>");
  i++;
}
// c.
document.write("<br><b>c.</b> <br>");
i = number;
while (i >= 1) {
  var j = 1;
  while (j <= i) {
    document.write("*");
    j++;
  }
  document.write("<br>");
  i--;
}

// -----------------------------------✌✌Chapter-39-to-42-end✌✌----------------------------------
