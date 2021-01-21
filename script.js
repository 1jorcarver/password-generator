// Create arrays which lists out all of the options
var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', ' ', "\\"];

// Password function
var generatePassword = function () {
  var length = window.prompt("How long do you want your password to be? Must be 8-128 characters.");
  length = parseInt(length);
  
  if (length >= 8 && length <= 128) {
    var useLower = window.confirm("Do you want to use a lowercase letter?");
    var useUpper = window.confirm("Do you want to use an uppercase letter?");
    var useNum = window.confirm("Do you want to use a number?");
    var useSpec = window.confirm("Do you want to use a special character?");
    
    if (useLower === false && useUpper === false && useNum === false && useSpec === false) {
      window.alert("Please select a character type.")
      generatePassword();
    }
    
    //variable for the new password
    var newPw = "";
    for (var i = 0; i < length; i) {

      if (useLower === true) {
        newPw += upperArray[Math.floor(Math.random() * 26)];
        i++;
      }
      if (useUpper === true) {
        newPw += numArray[Math.floor(Math.random() * 26)];
        i++;
      }
      if (useNum === true) {
        newPw += numArray[Math.floor(Math.random() * 10)];
        i++;
      }
      if (useSpec === true) {
        newPw += specArray[Math.floor(Math.random() * 33)];
        i++;
      }
    }
  }
  else {
    window.alert("Please use a number between 8 and 128");
    generatePassword();
  }
  return newPw;
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
