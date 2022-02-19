//Define user input variables
var length;
var capital;
var confirmNumbers;
var characters;

//Lowercase letters
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Lowercase & Uppercase letters

const lettersCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Special Characters
const specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//Combination of characters
var combinedCharacters;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write Generate Password Function
function generatePassword() {
  length = parseInt(window.prompt("How many characters would you like your password to be?"));
  console.log(length);

  if (length === "" || null) {
    window.alert("You need to provide a valid answer! Please try again");
    return generatePassword();
  } else if (length > 0) {
    //desired input
    capital = confirm ("Would you like capital letters included in your password?");
    confirmNumbers = confirm ("Would you like numbers included in your password?");
    characters = confirm ("Would you like special characters included in your password?");
  } else {
    window.alert("You need to provide a valid answer! Please try again");
    return generatePassword();
  }

  //Combinations of situations
  if (!capital && !confirmNumbers && !characters) {
    combinedCharacters = letters;
  } else if (capital && confirmNumbers && characters) {
    combinedCharacters = lettersCases.concat(numbers, specialCharacters);
  } 
  
    else if (!capital && !confirmNumbers && characters) {
    combinedCharacters = letters.concat(specialCharacters);
  } else if (!capital && confirmNumbers && !characters) {
    combinedCharacters = letters.concat(numbers);
  } else if (capital && !confirmNumbers && !characters) {
    combinedCharacters = lettersCases;
  } 
  
  else if (!capital && confirmNumbers && characters) {
    combinedCharacters = letters.concat(numbers, specialCharacters);
  } else if (capital && confirmNumbers && !characters) {
    combinedCharacters = lettersCases.concat(numbers);
  } else if (capital && !confirmNumbers && characters) {
    combinedCharacters = specialCharacters.concat(lettersCases);
  };

return combinedCharacters;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
