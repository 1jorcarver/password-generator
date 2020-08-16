// Assignment code here
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
var pwArray = []; 
// Array.toString()
// String.replace()
var totalArray = [];

// Prompt user about length of password
function promptLength(){
 var length = prompt("How long do you want your password from 8 to 128 characters?")
 
 if (length does not meet conditions){
   alert("Password length not valid. Must be 8-128 characters.");
   promptLength();
  }
};

promptLength();

// Asking user to confirm the other variables
var useUpper = confirm("Do you want to use an uppercase letter?")
// IF USER SAYS YES
totalArray.push(upperArray)

var useLower = confirm("Do you want to use a lowercase letter?")

totalArray.push(lowerArray)

var useNum = confirm("Do you want to use a number?")

totalArray.push(numArray)

var useSpec = confirm("Do you want to use a special character?")

totalArray.push(specArray)



// Password function
// var i = 0
function generatePassword(){
// grab the i-th array from total array
// pick random index between 0 and totalarray[i].length
// push that character to passwordempty

// if passwordempty.length is shorter than length
// i++
// generatepassword()
// if password is long enough: return result(whatever you want that result to be)
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
