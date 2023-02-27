// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];


// Write password to the #password input
function writePassword() {
  var correctPrompt = getPrompt(); 

  if(correctPrompt) {
  var randomPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomPassword;
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomLetter];
  }
  return password;
}

function getPrompt(){
  choiceArr = [];

  passwordLength = parseInt(prompt("How many characters would you like included in your password? (choose 8 - 128)"))

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number for your length, 8 - 128 digits, Try again please.");
    return false;
  }
  
  if (confirm("Would you like to include uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm("Would you like to include lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm("Would you like to include special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm("Would you like to include numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
