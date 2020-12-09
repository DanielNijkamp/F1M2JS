'use strict';
    let mijnButton = document.getElementById('mijnButton');
    let optellen = document.getElementById('optellen');
    let vermenigvuldigen = document.getElementById('vermenigvuldigen');
    let aftrekken = document.getElementById('aftrekken'); 
    let delen = document.getElementById('delen');

    mijnButton.addEventListener('click', function(){
        // lees de waarden van de text input velden in 
        // let op DIT ZIJN STRINGS
        let getal1 = document.getElementById('getal1').value;        
        let getal2 = document.getElementById('getal2').value;      
        // zet de ingelezen strings om in getallen
        getal1 = parseFloat(getal1);
        getal2 = parseFloat(getal2);
        // roep de function aan met arguments
        trekaf(getal1,getal2);
        deel(getal1,getal2);
        telOp(getal1,getal2);
        vermenigvuldig(getal1,getal2);
    })
    
     function telOp(getal1, getal2){
        let antwoord = getal1 + getal2;
        console.log("optellen" + antwoord);
        optellen.innerHTML = antwoord;
    }

    function vermenigvuldig(getal1, getal2){
        let antwoord = getal1 * getal2;
        console.log("vermenigvuldigen" + antwoord);
        vermenigvuldigen.innerHTML = antwoord;
    }

    function trekaf(getal1, getal2){
        let antwoord = getal1 - getal2;
        console.log("aftrekken" + antwoord);
        aftrekken.innerHTML = antwoord;
    }
    function deel(getal1, getal2){
        let antwoord = getal1 / getal2;
        console.log("delen" + antwoord);
        delen.innerHTML = antwoord;
    }
