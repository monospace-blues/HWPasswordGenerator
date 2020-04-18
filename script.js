// first, get elements to use in javascript
var passwordGen = document.querySelector("#passwordGen");
var genPassButton = document.querySelector("#generatePassButton");

// variables to use for password
var length = 0;
var lowercase = false;
var uppercase = false;
var numerical = false;
var specialChar = false;

// Variables for our password
// ################################
// Depending on the choices made, if the user wants these characters
// it will be added to the array, where we'll use the array to pick 
// and choose randomly our characters.
var buildingPassword = [];
var lChar = "abcdefghijklmnopqrstuvwxyz";
var uChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nChar = "0123456789";
var sChar = "&*%$#!@_+";

var password;

// add event listener for clicking button
genPassButton.addEventListener("click", function(event){
    event.preventDefault();

    // parse int to make sure the variable is a number
    length = parseInt(prompt("Length of password? between 8 - 128"));
    // check if it is a string
    if (typeof length === "string") {
        alert("Cannot be text, only integers");
        return;
    }
    // check if it is between the 8 - 128
    else if (length > 128 || length < 8) {
        alert("Length cannot be more than 128 or less than 8");
        return;
    }
    // if user doesn't enter anything, just jump off function
    else if (length === null || isNaN(length)){
        return;
    }

    console.log(length);

    // check if user wants lowercase
    lowercase = confirm("Do you want lowercase characters?");
    console.log("lowercase: " + lowercase);
    // if confirmed, add it to the array
    include(lowercase, lChar);
    console.log(buildingPassword);

    // check if user want uppercase
    uppercase = confirm("Do you want uppercase characters?");
    console.log("uppercase: " + uppercase);
    include(uppercase, uChar);
    console.log(buildingPassword)

    // check if user want numbers
    numerical = confirm("Do you want numbers?");
    console.log("numerical: " + numerical);
    include(numerical, nChar);
    console.log(buildingPassword)

    // check if user want special characters
    specialChar = confirm("Do you want special characters?");
    console.log("specialChar: " + specialChar);
    include(specialChar, sChar);
    console.log(buildingPassword)

    // generate password
    password = generatingPassword();
    passwordGen.textContent = password;

});

// function to include our types of password
function include (obj, insertObj) {

    // if it's true, add it to the array
    if (obj === true) {
        buildingPassword.push(insertObj)
    }
}

// function for generating password
function generatingPassword() {

    var builtPass = "";

    

    //create for loop to go through
    for (var i = 0; i < length; i++){
        // first, we'll select a random character list using random() and the array
        // this will select a random index number in the array
        var x = Math.floor(Math.random() * buildingPassword.length);
        console.log("Random Generated number: " + x);
        

        // next, we'll randomly select a character index number based on the length
        var selectedCharIndex = Math.floor(Math.random() * buildingPassword[x].length);
        console.log("Selected Character Index: " + selectedCharIndex + "in " + buildingPassword[x]);

        // using the generated random character index num (selectedCharIndex),
        // we'll use it to get the character
        var selectedChar = buildingPassword[x].charAt(selectedCharIndex)
        console.log("Selected Character: " + selectedChar);

        // now, we'll add the character to our password!
        builtPass += selectedChar;
        
    }

    return builtPass;
    
}