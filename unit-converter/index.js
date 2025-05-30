/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Get elements
const inputBox = document.getElementById('input-value');
const convertBtn = document.getElementById('convert-btn');
const lengthResult = document.getElementById('length-result');
const volumeResult = document.getElementById('volume-result');
const massResult = document.getElementById('mass-result');

// Function to convert units
function convertUnits() {
    const value = parseFloat(inputBox.value) || 0;

    // Length
    const metersToFeet = (value * 3.281).toFixed(3);
    const feetToMeters = (value / 3.281).toFixed(3);
    lengthResult.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;

    // Volume
    const litersToGallons = (value * 0.264).toFixed(3);
    const gallonsToLiters = (value / 0.264).toFixed(3);
    volumeResult.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;

    // Mass
    const kilosToPounds = (value * 2.204).toFixed(3);
    const poundsToKilos = (value / 2.204).toFixed(3);
    massResult.textContent = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
}

convertBtn.addEventListener('click', convertUnits);

// Run conversion on Enter key
inputBox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        convertUnits();
        inputBox.blur();
    }
});

// Optionally, update results live as user types
inputBox.addEventListener('input', convertUnits);

// Initial conversion
convertUnits();