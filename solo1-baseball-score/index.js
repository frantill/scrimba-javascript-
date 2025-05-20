let homeCount = document.getElementById("home-count")
let guestCount = document.getElementById("guest-count")
homeCount.textContent = 0
guestCount.textContent = 0

let homeScore = 0
let guestScore = 0

// homeCount.textContent = 0
// console.log(homeCount)

function homeAdd1() {
  homeScore += 1
  homeCount.textContent = homeScore
}

function homeAdd2() {
  homeScore += 2
  homeCount.textContent = homeScore
}

function homeAdd3() {
  homeScore += 3
  homeCount.textContent = homeScore
}

function guestAdd1() {
  guestScore += 1
  guestCount.textContent = guestScore
}

function guestAdd2() {
  guestScore += 2
  guestCount.textContent = guestScore
}

function guestAdd3() {
  guestScore += 3
  guestCount.textContent = guestScore
}