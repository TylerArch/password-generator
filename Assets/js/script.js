// Assignment Code

// Global variables
var pwLength;
var lowerCaseLtrs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var upperCaseLtrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = ["!", "@","#", "$", "%", "&", "_", "*", "+", "-", "^", "~",] ;
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// ask the user how many characters should be in the password and loop if invalid
function pwOptions(){
  var pwLength;
  do {
    pwLength = parseInt( prompt("How many characters between 8 and 128?") );
    var invalid = pwLength > 128 || pwLength < 8 || isNaN(pwLength);
    if (invalid) {
      window.alert("Please enter a number that must be at least 8 characters and no more than 129 characters");
    }
  } while (invalid)
  console.log(pwLength);

  do {
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

  //display error and loop if at least one different character is not selected  
    var invalid =  !useLowerCaseLtrs && !useUpperCaseLtrs && !useSpecialCharacters && !useNumbers 
    if (invalid) {  
    window.alert("At least one character type is required for the password");
    }
  } while(invalid)


//Define object for length, upper , lower,specialChars, and numberas
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
  var options = pwOptions();
  var finalPassword = [];
  var possibleOptions = [];
  var combinedOptions = [];

//adding a random element to the array of possible options and combined options
  if (options.useLowerCaseLtrs) {
    possibleOptions = possibleOptions.concat(lowerCaseLtrs);
    combinedOptions.push(makeRandom(lowerCaseLtrs))
  }
  if (options.useUpperCaseLtrs) {
    possibleOptions = possibleOptions.concat(upperCaseLtrs);
    combinedOptions.push(makeRandom(upperCaseLtrs))
  }
  if (options.useSpecialCharacters) {
    possibleOptions = possibleOptions.concat(specialChars);
    combinedOptions.push(makeRandom(specialChars))
  }
  if (options.useNumbers) {
    possibleOptions = possibleOptions.concat(numbers);
    combinedOptions.push(makeRandom(numbers))
  }
  for (i = 0; i <options.pwLength; i++) {
    var possibleCharacter = makeRandom(possibleOptions);
    finalPassword.push(possibleCharacter);
  }

  for (i = 0; i <combinedOptions.length; i++) {
    finalPassword[i] = combinedOptions[i];
  }
  return finalPassword.join("");
}

var generateBtn = document.querySelector("#generate");

// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

