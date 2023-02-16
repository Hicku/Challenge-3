// Assignment Code
charLength = 8;
generalChoice = [];

numbers = ["1","2","3","4","5","6","7","8","9","0"];
lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
special = ["!","£","$","%","^","&","*","(",")","?","/","@",">","<","+","=","_","-","#","~",",","."];


var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var correctPass = prompts();
  var passwordText = document.querySelector("#password");

  if (correctPass) {
    var nPassword = generatePassword();
    passwordText.value = nPassword;
  } else {
      passwordText.value = "";

  }

  
}


function generatePassword() {

  let password = "";
  for(var i = 0; i < charLength; i++) {
    var randomChoice = Math.floor(Math.random() * generalChoice.length);
    password = password + generalChoice[randomChoice];
  }
  return password;

}


function prompts(){

  generalChoice = [];

  charLength = parseInt(prompt("How long will your password be? (8-28 characters)"))

  if (isNaN(charLength) || charLength < 8 || charLength > 28) {
  alert ("Password length must be a number between 8-28");
  return false;
  }

  if(confirm("Would you like lowecase letters?")) {
  generalChoice = generalChoice.concat(lowerCase);
  }
  if(confirm("Would you like uppercase letters?")) {
    generalChoice = generalChoice.concat(upperCase);
  }
  if(confirm("Would you like numbers?")) {
    generalChoice = generalChoice.concat(numbers);
  }
  if(confirm("Would you like special characters?")) {
    generalChoice = generalChoice.concat(special);
  }

  return true;

}