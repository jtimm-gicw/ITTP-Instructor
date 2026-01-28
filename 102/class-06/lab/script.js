'use strict'

// comment 

/* 
multi-line 
comment
*/

// Name prompt
// Greeting Function
function greetUser(){
  const name = prompt("What is your name?");
document.getElementById("header");

if (name && name.trim() !== "") {
    header.textContent= `Welcome, ${name}!`
} else {
    header.textContent= "Welcome, Friend!";
}  
}


// This function is meant to greet users based on input
function timeGreet(){

    const time = prompt("What hour is it? (0-23)")
const hour = Number(time);

const box1 = document.getElementById("box1");

if (hour >=0 && hour < 12) {
    box1.textContent="Good morning";
}else if (hour >=12 && hour < 18) {
    box1.textContent="Good afternoon";
} else if (hour >=18 && hour <= 23) {
    box1.textContent="Good evening";
} else {
     box1.textContent="Good Day";
}


}


//  button color
function buttonColor(){
const btnPush = document.getElementById("btnPush");

const color = prompt("Pick a color, any color.");

if (btnPush && color && color.trim() !== "") {
  btnPush.style.border = `3px solid ${color}`;
}    
}




greetUser(); // function call/ invocation
timeGreet();
buttonColor();



