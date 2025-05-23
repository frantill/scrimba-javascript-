// // Check if the person is old enough to enter the nightclub (21)
// // Log a suitable message to the console in both cases

// let age = 21

// // if less than 21 -> "You can not enter the club!"
// // else            -> "Welcome!"

// if (age <= 20) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

// if (age < 100) {
//     console.log("Not eligible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not eligible, you have already celebrated your birthday")
// }

// if (sum <= 20) {
//     console.log("Do you want to draw another card?")
// } else if (sum === 21) {
//     console.log("Blackjack!")
// } else {
//     console.log("You are out of the game!")
// }

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string
let message = ""

// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}

// 3. Log it out!
console.log(message)
