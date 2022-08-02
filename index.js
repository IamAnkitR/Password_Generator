const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass1-el");
let pass2El = document.getElementById("pass2-el");
let password1 = "";
let password2 = "";

function generatePassword() {
  for (let i = 0; i < 15; i++) {
    password1 += characters[getRandomNumber()];
    password2 += characters[getRandomNumber()];
  }
  pass1El.textContent = password1;
  pass2El.textContent = password2;

  password1 = "";
  password2 = "";
}

function getRandomNumber() {
  let num = Math.floor(Math.random() * characters.length);
  return num;
}

function copyPassword1() {
    if(pass1El.textContent == ""){
        alert("Generate Passwords");
  
    }
    else{
       const cb = navigator.clipboard;
      cb.writeText(pass1El.textContent).then(() => alert("Text copied"));
    }
}
function copyPassword2() {
    if(pass1El.textContent == ""){
        alert("Generate Passwords");
  
    }
    else{
      const cb = navigator.clipboard;
      cb.writeText(pass2El.textContent).then(() => alert("Text copied"));
    }
}
