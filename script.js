console.log("I'm running");

// Selected HTML
var generateBtn = document.querySelector("#generate");
var newPassword = document.querySelector("#password");

// User input and password component variables
var pwLength;
var includeNumbers = "1234567890".split("");
var includeUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var includeLower = "abcdefghijklmnopqrstuvwxyz".toLowerCase().split("");
var includeSpecial = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
// var pwArray = [];

// TEST ABOVE ARRAYS LOG
console.log(includeNumbers);
console.log(includeUpper);
console.log(includeLower);
console.log(includeSpecial);

//Add event to generateBtn
generateBtn.addEventListener("click", function(event) {
    event.preventDefault("");
    generatePassword();
});
    
function generatePassword() {
    //Ask user for password length; change input to NUMBER
    var pwLength = parseInt(prompt("Choose a password length between 8 and 128."));

    //Create criteria array here to ensure previous criteria choices reset to empty;
    var pwArray = [];

    // Validate chosen password length
    if (pwLength < 8 || pwLength > 128) {
        alert("Error: That length is invalid. Start over and re-enter a valid password length from 8 to 128.");
    }
    //Validate password length entry only contains numbers
    else if (pwLength != parseInt(pwLength)) {
        alert("Error: You may have entered a non-number. Please re-enter a valid password length from 8 to 128.");
    } 
    else {
    //If above ok confirm additional password criteria 
    var confirmNumbers = confirm("Should password contain numbers?");
    var confirmUpper = confirm("Should password contain uppercase letters?");
    var confirmLower = confirm("Should password contain lowercase letters?");
    var confirmSpecial = confirm("Should password contain special characters?");
    };   
   
    //ISSUE : Validate at least one add'l criteria was chosen

    //if (!confirmNumbers && !confirmUpper && !confirmLower && !confirmSpecial) {
    //NOTE: Find a shorter way to re-confirm
    //alert ("You must choose at lease one character set for your password.")
    //     var confirmNumbers = confirm("Should password contain numbers?");
    //     var confirmUpper = confirm("Should password contain uppercase letters?");
    //     var confirmLower = confirm("Should password contain lowercase letters?");
    //     var confirmSpecial = confirm("Should password contain special characters?");
    //}

    //Build passwordArray criteria based on confirms
    if (confirmNumbers) {
     pwArray = pwArray.concat(includeNumbers);
     console.log(pwArray);
    }

    if (confirmUpper) {
    pwArray = pwArray.concat(includeUpper);
    console.log(pwArray);
    }

    if (confirmLower) {
        pwArray = pwArray.concat(includeLower);
        console.log(pwArray);
    }

    if (confirmSpecial) {
        pwArray = pwArray.concat(includeSpecial);
        console.log(pwArray);
    }

    //Check if defined
    console.log(pwLength);

    //This variable will hold password to be generated
    var password = [];

    //Loop through compiled array criteria and randomly choose indexes x pwLength desired
    for (var i = 0; i < pwLength ; i++) {
        var pwRandom = pwArray[Math.floor(Math.random() * pwArray.length)];
        
        //Add random choices to password array
        password.push(pwRandom);
        console.log(password);

        //Join password array emoving quotes, commas, whitespaces
        passwordJoin = password.join("").replace(/\s+/g, '');
        console.log(passwordJoin);

        //Print generated password to HMTL text area input
        newPassword.innerText = passwordJoin;
    }
};



//STYLING
// var wrapper = document.querySelector(".wrapper");
// wrapper.style.background-color = "black";

var wrap = document.querySelector(".wrapper");
var h1 = document.querySelector("h1");
var card = document.querySelector(".card");
var cardBody = document.querySelector(".card-body");
var cardHeader = document.querySelector(".card-header");
var cardBtn = document.querySelector(".btn");




wrap.setAttribute("style", "background-color: red");

h1.setAttribute("style", "color: blue");






//STYLING
// var wrapper = document.querySelector(".wrapper");
// wrapper.style.background-color = "black";

var wrap = document.querySelector(".wrapper");
var h1 = document.querySelector("h1");
var card = document.querySelector(".card");
var cardBody = document.querySelector(".card-body");
var cardHeader = document.querySelector(".card-header");
var cardBtn = document.querySelector(".btn");




wrap.setAttribute("style", "background-color: red");

h1.setAttribute("style", "color: blue");







 

 


    
        