let answEr = 0
let userName = prompt("What is your name?");
console.log(userName);
alert("welcome " + userName);

let myName = prompt("Is my name salah?");
console.log(myName);
if (myName === "yes" && "true") {
    alert("This corect")
    console.log("correct")
    answEr++
} else {
    alert("it is salah")
}

let uniStudy = prompt(" did I study at hashimate university?");
if (uniStudy === "yes" || uniStudy === "true") {
    alert("This correct")
    console.log("correct")
    answEr++
} else {
    alert("I was stuidied at it.")
}

let jobExp = prompt("Did i work as a customer service previsoly?")
if (jobExp === "yes" || jobExp === "true") {
    alert("This correct")
    console.log("correct")
    answEr++
} else {
    alert("I worked as customer service for 6 months")
}

let grYear = prompt("Is 2019 my graduation year??");
if (grYear === "yes" || grYear === "true") {
    alert("This correct")
    console.log("correct")
    answEr++
} else {
    alert("I graduted at feb/2019")
}
