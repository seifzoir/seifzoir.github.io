const typingElement = document.getElementById("typing-text");

const words = [

    "Software Tester",

    "QA Engineer",

    "Manual Tester",

    "API Tester"

];

let wordIndex = 0;
let charIndex = 0;

let deleting = false;

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typingElement.textContent = current.substring(0,charIndex);

        charIndex++;

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typingElement.textContent = current.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting?40:100);

}

typeEffect();
