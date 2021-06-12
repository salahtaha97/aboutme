"use strict";

let userName = prompt("what is your name?");
alert("welcome "+ userName)

function answerQustion(qustion,yesAnswer,noAnswer){
    let answerAb;
    do {
       answerAb = prompt(qustion) 
    } while (answerAb !== "yes" && answerAb !== "no"  && answerAb !== "y"  && answerAb !== "n"  );
    if(answerAb === "yes" || answerAb === "y" ){
        answEr++
    }else{
    }
}

answerQustion("Is my name salah?","corect","notcorect");
answerQustion("did I study at hashimate university?","corect","notcorect");
answerQustion("Did i work as a customer service previsoly?","corect","notcorect");
answerQustion("Am I 24 years old??","corect","notcorect");
answerQustion("Is 2019 my graduation year?","corect","notcorect");

let favNub = prompt("enter correct number");
let favNamn = [ 1,2,3];
for(i = 0; i < 4; i++){
    if (favNamn === 1 || favNamn === 2 || favNamn === 3 ) {
        answEr++

    } else{
        favNub = prompt("please try again")
    }
}


let aBc = ['football', 'basketball', 'f1', 'tennies'];
let answerBu = prompt('What is my favourite sport? ' + aBc).toLowerCase();
while (answerBu !== "football")
    answEr++
    {
    answerBu = prompt("try agian")
}
alert(answEr++)
alert("good by "+ userName)


