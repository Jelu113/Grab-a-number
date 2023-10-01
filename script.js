function generatePassword() {
   var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
   var symbol = "!@#$%^&*()_-+=<>".split("");
   var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   var numbers = "1234567890".split("");
 
   var lengthInput = document.getElementById("length");
   var wantsLower = document.getElementById("lowercase").checked;
   var wantsUpper = document.getElementById("uppercase").checked;
   var wantsSymbol = document.getElementById("special").checked;
   var wantsNumbers = document.getElementById("numeric").checked;
 
   // Get password length from the input element
   var length = parseInt(lengthInput.value);
 
   // Validate password length
   if (length < 8 || length > 128) {
     alert("Please enter a valid password length between 8 and 128 characters.");
     return "";
   }
 
   // Validate character type selection
   if (!wantsLower && !wantsUpper && !wantsSymbol && !wantsNumbers) {
     alert("Please choose at least one type of character.");
     return "";
   }
 
   var choices = [];
 
   if (wantsLower) {
     choices = choices.concat(lowerCase);
   }
   if (wantsUpper) {
     choices = choices.concat(upperCase);
   }
   if (wantsSymbol) {
     choices = choices.concat(symbol);
   }
   if (wantsNumbers) {
     choices = choices.concat(numbers);
   }
 
   var finalPassword = "";
 
   for (var i = 0; i < length; i++) {
     var randomNumber = Math.floor(Math.random() * choices.length);
     finalPassword += choices[randomNumber];
   }
 
   // Display the generated password
   return finalPassword;
}

var generateBtn = document.getElementById("generate");

function writePassword() {
   var password = generatePassword();
   var passwordText = document.getElementById("password");

   passwordText.value = password;
   alert("Generated Password: " + password); // Display the password in an alert
}

generateBtn.addEventListener("click", writePassword);
