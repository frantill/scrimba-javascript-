// document.getElementById("count-el").innerText = 5;

// Itialise the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
    count = count + 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

// function increment() {
//     console.log("The button was clicked");
// }

// Setting up the the race 🏎 🏎 🏎

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown();

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎


// countdown()

// function myLogger() {
//     console.log(42);
// }

// myLogger();

// function logLapTime() {
//     console.log(myLogger());
// }

// logLapTime();


// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)

// function purchase() {
//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please try again"
// }


let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// // Create four functions: add(), subtract(), divide(), multiply()
// // Call the correct function when the user clicks on one of the buttons
// // Perform the given calculation using num1 and num2
// // Render the result of the calculation in the paragraph with id="sum-el"

// // E.g. if the user clicks on the "Plus" button, you should render
// // "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
// let sumEl = document.getElementById("sum-el")

// function add() {
//     let result = num1 + num2
//     sumEl.textContent = "Sum: " + result
// }

// function subtract() {
//     let result = num1 - num2
//     sumEl.textContent = "Sum: " + result
// }

// function divide() {
//     let result = num1 / num2
//     sumEl.textContent = "Sum: " + result
// }

// function multiply() {
//     let result = num1 * num2
//     sumEl.textContent = "Sum: " + result
// }
