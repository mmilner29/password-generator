//Define user input variables
var length;
var lowerCase;
var capital;
var confirmNumbers;
var characters;

//Lowercase letters
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Lowercase & Uppercase letters

const lettersCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Special Characters
const specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", ">", "?", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//Combination of characters
var combinedCharacters;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write Generate Password Function
function generatePassword() {
  length = parseInt(window.prompt("How many characters would you like your password to be? Please type a number between 8 and 128 for a strong password."));

  if (length === "" || null) {
    window.alert("You need to provide a valid answer! Please try again");
    return generatePassword();
  } else if (length > 8 && length < 128) {
    //desired input
    lowerCase = confirm ("Would you like lower case letters included in your password?");
    capital = confirm ("Would you like capital letters included in your password?");
    confirmNumbers = confirm ("Would you like numbers included in your password?");
    characters = confirm ("Would you like special characters included in your password?");
  } else {
    window.alert("You need to provide a valid answer! Please try again");
    return generatePassword();
  }

  //Combinations of situations from resulting user input
  if (!capital && !confirmNumbers && !characters && !lowerCase) {
    alert ("You need to select at least one criteria, please try again.")
    return generatePassword();
  } else if (capital && confirmNumbers && characters && lowerCase) {
    //.concat merges the arrays of the desired characters
    combinedCharacters = lettersCases.concat(numbers, specialCharacters, letters);
  } 
  
    else if (!capital && !confirmNumbers && characters && !lowerCase) {
    combinedCharacters = specialCharacters;
  } else if (!capital && confirmNumbers && !characters && !lowerCase) {
    combinedCharacters = numbers;
  } else if (capital && !confirmNumbers && !characters && !lowerCase) {
    combinedCharacters = lettersCases;
  } else if (!capital && !confirmNumbers && !characters && lowerCase) {
    combinedCharacters = letters;
  } 

  else if (capital && !confirmNumbers && characters && lowerCase) {
    combinedCharacters = specialCharacters.concat(lettersCases, letters);
  } else if (capital && confirmNumbers && characters && !lowerCase) {
    combinedCharacters = specialCharacters.concat(lettersCases, numbers);
  } else if (capital && confirmNumbers && !characters && lowerCase) {
    combinedCharacters = numbers.concat(lettersCases, letters);
  } else if (!capital && confirmNumbers && characters && lowerCase) {
    combinedCharacters = specialCharacters.concat(letters, numbers);
  } 
  
  else if (!capital && confirmNumbers && characters && !lowerCase) {
    combinedCharacters = numbers.concat(specialCharacters);
  } else if (capital && confirmNumbers && !characters && !lowerCase) {
    combinedCharacters = lettersCases.concat(numbers);
  } else if (capital && !confirmNumbers && characters && !lowerCase) {
    combinedCharacters = specialCharacters.concat(lettersCases);
  } else if (!capital && confirmNumbers && !characters && lowerCase) {
    combinedCharacters = numbers.concat(letters);
  } else if (capital && !confirmNumbers && !characters && lowerCase) {
    combinedCharacters = lettersCases.concat(letters);
  } else if (!capital && !confirmNumbers && characters && lowerCase) {
    combinedCharacters = specialCharacters.concat(letters);
  }; 

var pass = [];
//Randomly select characters from merged array at desired length
for (var i = 0; i < length; i++) {
  var assignCharacters = combinedCharacters[Math.floor(Math.random() * combinedCharacters.length)];
  //.push adds ssignCharacters array to the end of the pass array
  pass.push(assignCharacters);
}
//Reurns the value as a STRING so there aren't any commas seperating the password characters
return pass.join("");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
