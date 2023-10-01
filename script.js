// Assignment code here
function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var symbol = "!@#$%^&*()_-+=<>".split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbers = "1234567890".split("");
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  length = parseInt(length);

  if (length < 8 || length > 128 || isNaN(length)) {
   alert("Please enter a valid password length between 8 and 128 characters.");
   return ""; 
 }

  var wantsLower = confirm("Would you like lower case letters in your password?");
  var wantsUpper = confirm("Would you like upper case letters in your password?");
  var wantsSymbol = confirm("Would you like symbols in your password?");
  var wantsNumbers = confirm("Would you like numbers in your password?");
  var choices = []

   if(wantsLower === true) {
     choices = choices.concat(lowerCase)
   }
   if(wantsSymbol === true) {
      choices = choices.concat(symbol)
   }
   if(wantsUpper === true) {
      choices = choices.concat(upperCase)
   }
    if(wantsNumbers === true) {
       choices = choices.concat(numbers)
   }

   if(wantsLower, wantsSymbol, wantsUpper, wantsNumbers === false) {
      return ("Please choose at least one type of character.")
   }
   if (choices.length === 0) {
      alert("Please choose a number between 8 and 128.");
      return ""; 
    }
var finalPassword = "";
for (var i = 0; i < length; i++) {
 var randomNumber = Math.floor(Math.random() * choices.length);
 finalPassword += choices[randomNumber]
}
return finalPassword
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);