console.log("HELLO!");

//PART 1 - Password Generator

// HTML for Password 
var generateBtn = document.querySelector("#generate");
var newPassword = document.querySelector("#password");

// User input and password component variables
var includeNumbers = "1234567890".split("");
var includeUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var includeLower = "abcdefghijklmnopqrstuvwxyz".split("");
var includeSpecial = " !#$%&'()*+,-.:;<=>?@[]^_`{|}~".split("");

// TEST HOW ABOVE ARRAYS LOG
// console.log(includeNumbers);
// console.log(includeUpper);
// console.log(includeLower);
// console.log(includeSpecial);

//Add event listener to generateBtn
generateBtn.addEventListener("click", function(event) {
    event.preventDefault("");
    generatePassword();
});

//Initiate user password criteria
function generatePassword() {
    //Ask user for password length; change input to NUMBER
    var pwLength = (prompt("Choose a password length between 8 and 128."));

    //Create criteria array/ensure previous criteria choices reset to empty;
     var pwArray = [];

    //Validate pwLength contains numbers only
    // console.log(isNaN(pwLength));
    // console.log(pwLength);
    if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
        alert("HMMM...ERROR: Please re-enter a password length from 8 to 128.");
        generatePassword();
        return;
    } 

    console.log(pwLength);

    //Function: ask for more password criteria, validate at least one selection, build critera array
    var criteria = function askCriteria() {
   
    // Confirm password preferred criteria
    var confirmNumbers = confirm("Should password contain numbers?");
    var confirmUpper = confirm("Uppercase letters?");
    var confirmLower = confirm("Lowercase letters?");
    var confirmSpecial = confirm("Special characters?");

    //Validate at least once criteria selection: If all negatives, alert and repeat
    if (!confirmNumbers && !confirmUpper && !confirmLower && !confirmSpecial) {
        alert("OOPS! You must choose at least one character criteria.")   
        askCriteria();
        return;
        }
    //Build array of confirmed criteria preferences
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
    }

    //Call function for additional criteria
    criteria();
  
    //Create variable for password. NOTE: put this here to clear cache for next generate
    var password = [];

    //Loop through compiled criteria and randomly choose indexes per pwLength desired
    for (var i = 0; i < pwLength ; i++) {
    var pwRandom = pwArray[Math.floor(Math.random() * pwArray.length)];
    // console.log(pwRandom); 

    //Add random choices to password array
    password.push(pwRandom);
    console.log(password);
    }  

    //Join password array emoving quotes, commas, whitespaces
    passwordJoin = password.join("").replace(/\s+/g, '');
    console.log(passwordJoin);

    //Print generated password to HMTL text area input
    newPassword.innerText = passwordJoin;      
}
//End of generator function

//PART 2 - Styling HTML

// font-family: 'Josefin Slab', serif;
// font-family: 'Special Elite', cursive;

var wrap = document.querySelector(".wrapper");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var card = document.querySelector(".card");
var textArea = document.querySelector("textarea");
var cardHeader = document.querySelector(".card-header");
var password = document.querySelector("#password");
var cardBtn = document.querySelector(".btn");
var body = document.querySelector("body");
var btn = document.querySelector(".btn");
var footer = document.querySelector("footer");


var bg = `background:radial-gradient(#383838, #232323, #0d0d0d, #000);`
body.style.backgroundImage = bg;
body.style.backgroundImage = "url('assets/pngkit_barrel-png_2066813.png')";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundImage = "height:100%"
body.style.backgroundSize = "cover";

body.style.height = "100%"
body.style.overflow = "hidden";

wrap.style.overflow = "hidden";
h1.style.fontFamily = "Special Elite, Courier, Serif";
h1.style.fontSize = "50px";
h1.style.fontWeight = "800";
h1.style.color = "red";

card.style.backgroundColor = "#0d0d0d";
card.style.border = "solid 10px #383838";
textArea.style.backgroundColor = "lightgrey";

h2.style.fontFamily = "Special Elite, Courier, Serif";
h2.style.fontFamily = "30pxrem";
h2.style.textAlign = "center";
h2.style.color = "#e1e1e1";

password.style.fontFamily = "Special Elite, Courier, Serif";
password.style.fontSize = "20px";
password.style.color = "black";

btn.style.backgroundColor = "red";
btn.style.color = "white";

footer.style.fontSize = "12px";




//NOT WORKING YET
// var agent = document.createElement("IMG");
//     agent.src = "assets/pngkit_detective-hat-png_4291313.png";
//     agent.style.width = "100%";
//     agent.style.maxWidth = "35rem";
//     agent.style.marginTop = "25px"
//     agent.style.display = "block";
//     agent.style.marginLeft = "auto";
//     agent.style.marginRight = "auto";
//     // agent.style.alignContent = "center";
// wrap.appendChild(agent);

 
//NOT WORKING YET    
// var footer = document.createElement("FOOTER");
// footer.textContent = "HW3 Password Generator";
// footer.setAttribute("style", "position:fixed; left:0, bottom:0, width:100%, background-color:red; color:white; text-align:center;")
// wrap.appendChild(footer);







 

 


    
        