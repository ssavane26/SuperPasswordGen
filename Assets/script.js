// Adding array for password content //
var charlength = 8;
var options = [];

var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", "<", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
    var chosenPrompts = passPrompts();
    var passwordText = document.querySelector("#password");
    
    if (chosenPrompts) {
      var newpassword = generatePassword();
      passwordText.value = newpassword;
    } else {
      passwordTest.value = "";
    }
  }

  function generatePassword() {
    var password = "";
    for (var i = 0; i < charlength; i++) {
      var randomLetters = Math.floor(Math.random() * options.length);
      password = password + options[randomLetters];
    }
    return password;
  }

// Functioning For Prompts // 
function passPrompts() {
  options = [];
  charlength = parseInt(prompt("How long would you like your password to be? (8-120 Characters Max!😎"));
 
  if (isNaN(charlength) || charlength < 8 || charlength > 128) {
    alert("Character length must be a number between 8-128!");
    return false;
  }
  if (confirm("Would you like your password to include lower case letters?")) {
    options = options.concat(lowerChar);
  }
  if (confirm("Would you like your password to include upper case letters?")) {
    options = options.concat(upperChar);
  }
  if (confirm("Would you like your password to include special characters?")) {
    options = options.concat(specialChar);
  }
  if (confirm("Would you like your password to include numbers?")) {
    options = options.concat(numChar);
  }
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

