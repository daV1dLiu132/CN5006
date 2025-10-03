//app.js or index.js
const prompt = require('prompt-sync')(); // This line is essential
console.log("starting")
const name = prompt('Enter your name: ');
console.log(`Hello, ${name}`);
// program that checks if the number is positive, negative or zzero
// input from the user

const number1 = parseInt(prompt("Enter a number1: "));
const number2 = parseInt(prompt("Enter a number2: "));


const operation = parseInt(prompt("Enter the operation\n(0 = addition, 1 = subtraction, 2 = multiplication, 3 = division): "));

if(operation == 0) {
    console.log("The sum is ", number1 + number2);
}


else if(operation == 1) {
    console.log("The sum is", number1 - number2);
}


else if(operation == 2) {
    console.log("The sum is ", number1 * number2);
}

else if(operation == 3){
    console.log("The sum is", number1 / number2);
}

else{
    console.log("Operation not found");
}