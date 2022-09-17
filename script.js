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
var pwLength;
var lowerCaseLtrs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var upperCaseLtrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = ["!", "@","#", "$", "%", "&", "_", "*", "+", "-", "^", "~",] ;
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// ask the user how many characters should be in the password
function pwOptions(){
  var pwLength = parseInt( prompt("How many characters?") );
  if (pwLength > 128 || pwLength < 8 || isNaN(pwLength)) {
    window.alert("Please enter a number that must be at least 8 characters and no more than 129 characters");
      return;}
  console.log(pwLength);

  // ask user if they want lower case letters in the password
 
  var useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  console.log(useLowerCaseLtrs)


// ask user if they want upper case letters in the password  
  var useUpperCaseLtrs = confirm("Do you want upper case letters in the password?");
  console.log(useUpperCaseLtrs)

// ask user if they want special characters in the password
  var useSpecialCharacters = confirm("Do you want special characters in the password?");
  console.log(useSpecialCharacters)

// ask user if they want numbers in the password
  var useNumbers = confirm("Do you want numbers in the password?");
  console.log(useNumbers)
    if (!useLowerCaseLtrs && !useUpperCaseLtrs && !useSpecialCharacters && !useNumbers) {
      window.alert("At least one character type is required for the password");
    return;}


// for (var i = 0; i < pwLength; i++) {
//   console.log("This is the amount of characters: " + pwLength[i] + ".");
//   }
var passwordOptions = {
  pwLength: pwLength,
  useLowerCaseLtrs: useLowerCaseLtrs,
  useUpperCaseLtrs: useUpperCaseLtrs,
  useSpecialCharacters: useSpecialCharacters,
  useNumbers: useNumbers
};
return passwordOptions;

}
//Creating a random element from an array
function makeRandom(arr) {
  //math.floor negates any decimals that occur
  var randomIndex = Math.floor(Math.random() * arr.length); 
  var randomElement = arr[randomIndex];
  return randomElement;
}

// function to generate password
function generatePassword() {
  console.log("start here");
  pwOptions();

}

// Grabbing random element from an array:
// var min = x;
// var max = y;
// var random = Math.floor(Math.random() * (max - min + 1) + min)

// return (finalpassword);