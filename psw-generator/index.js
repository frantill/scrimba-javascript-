const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
    "T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
    "`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
    "<",">",".","?",
"/"];

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let passwordLength = document.getElementById("password-length")



function generatePassword() {
    let password = ""
    let length = parseInt(passwordLength.value) || 12
    for (let i = 0; i < length; i++) {
        let x = Math.floor(Math.random() * characters.length)
        password += characters[x]
    }
    password1.textContent = password
    password2.textContent = password
}

// generatePassword()

function copyPassword() {
    let tempInput = document.createElement("input");
    tempInput.value = password1.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Password copied to clipboard!");
}

