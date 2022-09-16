// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Global variables
var numOfCharacters;
var useLowerCaseLtrs;
var useUpperCaseLtrs;
var useSpecialChars;
var useNumbers;

// ask the user how many characters should be in the password
function howManyCharacters(){
  numOfCharacters = parseInt( prompt("How many characters?") );
  console.log(useNumOfCharacters);
}

  // ask user if they want lower case letters in the password
function useLowerCase(){
  useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  console.log(useLowerCaseLtrs)
}

// ask user if they want upper case letters in the password
function useUpperCase(){
  useUpperCaseLtrs = confirm("Do you want upper case letters in the password?");
  console.log(useUpperCaseLtrs)

}

// ask user if they want special characters in the password
function useSpecialCharacters(){
  useSpecialCharacters = confirm("Do you want special characters in the password?");
  console.log(useSpecialCharacters)
}

// ask user if they want numbers in the password
function useNumbers(){
  useNumbers = confirm("Do you want numbers in the password?");
  console.log(useNumbers)
}

// function to generate password
function generatePassword() {
  console.log("start here");
  howManyCharacters();
  useUpperCase();
  useLowerCase();
  useSpecialCharacters();
  useNumbers();
}

// return “final password"