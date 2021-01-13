"use strict"   
let myText = document.getElementById('myText');
let myImage = document.getElementById('myImage');
let myButton = document.getElementById('myButton');
let myReset = document.getElementById('myReset');

myButton.addEventListener('click', function(){
    main();
})

myReset.addEventListener('click', function(){
    /* hier komt jouw code */
})

function main(){
     let dezeTextWordtHet = makeThisSentence();
     myText.innerHTML = dezeTextWordtHet;
     sayItLoud(dezeTextWordtHet); // say something nice say it loud
     selectThisImage(); // show a nice image
}



function randomizer(range = 1){ 
    // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
    return Math.floor((Math.random() * range));
}


function makeThisSentence(){
    let index = randomizer(arrayLength);
    let woord1 = onderwerp[index];
    let woord2 = werkwoord[index];
    let woord3 = restwoord[index];
    let outputString = woord1 + " " + woord2 + " " + woord3;
    return outputString;
}

function selectThisImage(){
    let index = randomizer(arrayLength);
    myImage.src = plaatjes[index]; 
}

function sayItLoud (textString) {
  let message = new SpeechSynthesisUtterance(textString);
  let voices = window.speechSynthesis.getVoices();
  message.voice = voices[1];
  message.pitch = 1; // range between 0 and 2
  message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
  window.speechSynthesis.speak(message);
}

const onderwerp = ["i", "He", "Ed"];
const werkwoord = ["eats", "cooks", "makes"];
const restwoord = ["a sandwich", "a burger", "super death robots"];

let plaatjes = ["https://static-asset-delivery.hasbroapps.com/a9e79c9b34ea183cad07eb995c5f51818b6c9447/0465731939d703d10b45538ff8e0efbb.png", "https://i.chzbgr.com/full/9303074560/h622371A6", "https://www.pngitem.com/pimgs/m/235-2359071_tf2-sandvich-hd-png-download.png"]

let arrayLength = onderwerp.length;