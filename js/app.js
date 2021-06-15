"use strict";

let answEr = 0

let userName = prompt("what is your name?");
alert("welcome "+ userName)

let myName = prompt("Is salah my name?").toLowerCase;
if(myName === "yes" || myName === "y" ){
    alert("it is correct")
    answEr++
}else{
    alert("yes salah is my name")
}

let myAge = prompt("Am I 24 years old ?").toLowerCase;
if(myAge === "yes" || myAge === "y" ){
    alert("it is correct")
    answEr++
}else{
    alert("no i was 24 years")
}

let myUni = prompt("did I study at hashimate university?").toLowerCase;
if(myUni === "yes" || myUni === "y" ){
    alert("it is correct")
    answEr++
}else{
    alert("it is hashimete university")
}

let myGrad = prompt("Is 2019 my graduation year ?").toLowerCase;
if(myGrad === "yes" || myGrad === "y" ){
    alert("it is correct")
    answEr++
}else{
    alert("i was graduted at 2019 in jun")
}

let myExp = prompt("Did i work as a customer service previsoly?").toLowerCase;
if(myExp === "yes" || myExp === "y" ){
    alert("it is correct")
    answEr++
}else{
    alert("not correct")
}

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