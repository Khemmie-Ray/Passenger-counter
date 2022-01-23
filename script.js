//Declaring variables
let countDisplay = document.getElementById('count-dis');

let savedEntries = document.getElementById("saved-entries");

let count = 0;

function increment() {
    count += 1;
    countDisplay.innerHTML = count;
}

function save() {
    let entries = count + " - ";
   savedEntries.innerHTML += entries;
   //Resetting count to 0
   countDisplay.innerHTML = 0;
   count = 0;
}
