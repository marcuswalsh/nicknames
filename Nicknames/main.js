// Nickname list
let nameList = ['The Blob', 'Wolverine', 'Night Monkey', 'Rogue', 'Cloak', 'Dagger'];

// Checks button press
document.getElementById('randomName').addEventListener('click', oneName);
document.getElementById('allNames').addEventListener('click', everyName);

function oneName() {
    // Gets names
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    // Clears any previous nicknames displayed
    document.getElementById('nameList').innerHTML = " ";
    // Gets index
    let nameIndex = randomInt(0, nameList.length);
    // Prints name
    document.getElementById('nameList').innerHTML = firstName + " \"" + nameList[nameIndex] + "\" " + lastName;
}

function everyName() {
    // Gets names
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    // Clears any previous nicknames displayed
    document.getElementById('nameList').innerHTML = " ";
    // Prints names
    for(i = 0; i < nameList.length; i++){
        document.getElementById('nameList').innerHTML += firstName + " \"" + nameList[i] + "\" " + lastName + ",\n ";
    }
}

// Generates random numbers
function randomDec(low, high) {
    return Math.random()*(high - low) + low;
}

function randomInt(low, high) {
    return Math.floor(randomDec(low, high));
}