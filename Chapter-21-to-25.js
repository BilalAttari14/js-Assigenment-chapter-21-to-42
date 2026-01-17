// -----------------------------------😊😊Chapter-21-to-25-start😊😊----------------------------------

document.write("<h2>Chapter 21 to 25</h2>");

// Question : 1

document.write("<h3>Question : 1</h3>");

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName + "! Welcome to our website.");

// Question : 2

document.write("<h3>Question : 2</h3>");

var favMobile = prompt("Enter your favorite mobile phone model");
var lengthOfString = favMobile.length;
document.write("My favorite phone is: " + favMobile + "<br>");
document.write("Length of string: " + lengthOfString);

// Question : 3

document.write("<h3>Question : 3</h3>");

var word = "Pakistani";
var indexOfN = word.indexOf("n");
document.write("String: " + word + "<br>");
document.write("Index of 'n': " + indexOfN);

// Question : 4

document.write("<h3>Question : 4</h3>");

var word = "Hello World";
var lastIndexOfL = word.lastIndexOf("l");
document.write("String: " + word + "<br>");
document.write("Last index of 'l': " + lastIndexOfL);

// Question : 5

document.write("<h3>Question : 5</h3>");

var word = "Pakistani";
var charAtIndex3 = word.charAt(3);
document.write("String: " + word + "<br>");
document.write("Character at index 3: " + charAtIndex3);

// Question : 6

document.write("<h3>Question : 6</h3>");

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(" ", lastName);
alert("Hello " + fullName + "! Welcome to our website.");

// Question : 7

document.write("<h3>Question : 7</h3>");

var word = "Hyderabad";
var city = word.slice(5, 9);
var replacement = "Islam";
document.write("City: " + word + "<br>");
document.write("After replacement: " + replacement + city);

// Question : 8

document.write("<h3>Question : 8</h3>");

var message =
  "Ali and Sami are best friends. They play cricket and football together.";
document.write("<b>Message:</b> " + message + "<br>");
var updatedMessage = message.replace(/and/g, "&");
document.write("<b>After replacement:</b> " + updatedMessage);

// Question : 9

document.write("<h3>Question : 9</h3>");

var value = "472";
document.write("<b>Value:</b> " + value + "<br> <b>Type:</b> " + typeof value);
value = Number(value);
document.write(
  "<br><b>Value:</b> " + value + "<br> <b>Type:</b> " + typeof value
);

// Question : 10

document.write("<h3>Question : 10</h3>");

var url = prompt("Enter your URL", "www.facebook.com");
document.write("<b>URL: </b>" + url);
var domain = url.slice(4, url.length);
document.write("<br><b>Domain: </b>" + domain);

// Question : 11

document.write("<h3>Question : 11</h3>");

var userInput = prompt("Enter your word", "peanut");
document.write("<b>User input: </b>" + userInput);
var upperCase = userInput.toUpperCase();
document.write("<br><b>Upper case: </b>" + upperCase);

// Question : 12

document.write("<h3>Question : 12</h3>");

var userInput = prompt("Enter your word", "Zong 4G");
document.write("<b>User input: </b>" + userInput);
var lowerCase = userInput.toLowerCase();
document.write("<br><b>Lower case: </b>" + lowerCase);

// Question : 13

document.write("<h3>Question : 13</h3>");

var userInput = prompt("Enter your word", "javascript");
document.write("<b>User input: </b>" + userInput);
var titleCase =
  userInput.charAt(0).toUpperCase() + userInput.slice(1, userInput.length);
document.write("<br><b>Title case: </b>" + titleCase);

// Question : 14

document.write("<h3>Question : 14</h3>");

var number = 35.36;
document.write("<b>Number: </b>" + number);
var string = number.toString();
string = string.replace(".", "");
document.write("<br><b>Result: </b>" + string);

// Question : 15

document.write("<h3>Question : 15</h3>");

var a = "3";
document.write("a is " + a);
var b = "3";
document.write("<br>b is " + b);
var x = a + b;
document.write("<br>a + b is " + x);

// Question : 16

document.write("<h3>Question : 16</h3>");

var a = "3";
document.write("a is " + a);
var b = "3";
document.write("<br>b is " + b);
var x = a - b;
document.write("<br>a - b is " + x);

// Question : 17

document.write("<h3>Question : 17</h3>");

var userName = prompt("Enter your name without symbols [@ , . !]");

for (var a = 0; a < userName.length; a++) {
  if (
    userName.charCodeAt(a) === 33 ||
    userName.charCodeAt(a) === 44 ||
    userName.charCodeAt(a) === 46 ||
    userName.charCodeAt(a) === 64
  ) {
    alert("Please enter a valid username");
  }
}

// Question : 18

document.write("<h3>Question : 18</h3>");

var item = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt(
  "Welcome to Bilal's Bakery. What do you want to order sir/ma'am?"
);
search = search.toLowerCase();
var found = false;

for (var a = 0; a < item.length; a++) {
  if (item[a] === search) {
    found = true;
    break;
  }
}

if (found) {
  alert(search + " is available at index " + a + " in our bakery.");
} else {
  alert("We are sorry, " + search + " is not available.");
}

// Question : 19

document.write("<h3>Question : 19</h3>");

var input1 = prompt("Enter any string you whant to compair with second string");
var input2 = prompt("Enter any string you whant to compair with first string");
if (input1 > input2) {
  alert(input1 + " is greater than " + input2);
} else if (input1 < input2) {
  alert(input2 + " is greater than " + input1);
} else {
  alert(input1 + " are equal " + input2);
}

// Question : 20

document.write("<h3>Question : 20</h3>");

var password = prompt(
  "Enter a password that should contain alphabets and numbers, must be at least 6 characters, and not begin with number"
);

var passwordLength = password.length;
var valid = true;

if (passwordLength < 6) {
  valid = false;
}

var numbercheck = password.charCodeAt(0);
if (numbercheck >= 48 && numbercheck <= 57) {
  valid = false;
}

var hasAlphabet = false;
var hasNumber = false;

for (var a = 0; a < passwordLength; a++) {
  var check = password.charCodeAt(a);

  if ((check >= 65 && check <= 90) || (check >= 97 && check <= 122)) {
    hasAlphabet = true;
  }

  if (check >= 48 && check <= 57) {
    hasNumber = true;
  }
}

if (!hasAlphabet || !hasNumber) {
  valid = false;
}

if (valid) {
  alert("Password is valid");
} else {
  alert(
    "Invalid password! Must be at least 6 characters, contain letters and numbers, and not start with a number."
  );
}

// Question : 21

document.write("<h3>Question : 21</h3>");

var university = "University of Karachi";

for (var i = 0; i < university.length; i++) {
  document.write(university[i] + "<br>");
}

// Question : 22

document.write("<h3>Question : 22</h3>");

var userInput = prompt("Enter your input");
document.write("User Input: " + userInput);
var lastIndex = userInput[userInput.length - 1];
document.write("Last character of input: " + lastIndex);

// Question : 23

document.write("<h3>Question : 23</h3>");

var word = "The quick brown fox jumps over the lazy dog.";
var lowerCase = word.toLowerCase();
var check = lowerCase.split(" ");

var count = 0;

for (var a = 0; a < check.length; a++) {
  if (check[a] === "the") {
    count++;
  }
}
document.write("Text: " + word);
document.write("<br>Occurrences of 'the': " + count);

// Question : 24

document.write("<h3>Question : 24</h3>");
var string = "pakistan";

text = string.toLowerCase();

var vowels = 0;
var consonants = 0;

for (var i = 0; i < text.length; i++) {
    var character = text[i];
    if (character >= 'a' && character <= 'z') {
      
        if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
            vowels++;
        } else {
            consonants++;
        }
    }
}

document.write("String: " + string + "<br>");
document.write("Vowels: " + vowels + "<br>");
document.write("Consonants: " + consonants);

// -----------------------------------✌✌Chapter-21-to-25-end✌✌----------------------------------
