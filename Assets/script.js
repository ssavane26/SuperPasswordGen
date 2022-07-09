// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var userPassword = prompt("How many characters?")
if (userPassword <= 7) { alert ("Password Does Not Meet Minimum Length of 8")
return null;
}
if (userPassword >= 128) { alert ("Password Exceeds Max Length of 128") 
return null;
}
if (userPassword => 7) {confirm ("Do you want special characters?")
return null;
} 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);