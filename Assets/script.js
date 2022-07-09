// Assignment Code
var generateBtn = document.querySelector("#generate");
var special =  [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", "<", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~" ]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function generatePassword(){
//   var userPassword = prompt("How many characters?")
// if (userPassword <= 7) { alert ("Password Does Not Meet Minimum Length of 8")
// return null;
// }
// if (userPassword > 128) { alert ("Password Exceeds Max Length of 128") 
// return null;
// }
// if (userPassword => 7) {prompt ("Do you want special characters?")
// return null;
// } 
var passwordLength = prompt("Enter A Password 8 Characters of More");
if (passwordLength <= 7) { alert ("Password Does Not Meet Minimum Length of 8")
return null; }

var passwordNumber = prompt("Enter A Number");
if (passwordNumber < number) {alert ("Number Does Not Meet Requirement")
return null; }

var passwordSpecial = prompt("Enter A special Character") 
if (passwordSpecial > special) { alert ("Symbol Does Not Meet Requirement")
return null; }

window.alert ("Your Desired Password: " + passwordLength + passwordNumber + passwordSpecial)

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

