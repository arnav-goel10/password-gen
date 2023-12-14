const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passlen = document.getElementById("len")
let but1 = document.getElementById("bb1")
let but2 = document.getElementById("bb2")

function gen() {
    passlen = document.getElementById("len")
    but1.innerText = randpass()
    but2.innerText = randpass()
}

function randpass() {
    pas =""
    for (let i=0;i<passlen.value;i++) {
        pas += characters[Math.floor(Math.random()*characters.length)]
    }
    return pas;
}