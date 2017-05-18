var randomLoc = Math.floor(Math.random() * 5);
var location2 = randomLoc + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var MIN_VALUE = 0;
var MAX_VALUE = 6;

while (isSunk == false) {
    guess = prompt('Ready, aim, fire! (enter a number 0-6):');
    if (guess < MIN_VALUE || guess > MAX_VALUE) {
        alert ('Please enter a valid cell number!');
    } else {
        guesses = guesses + 1;
        if (guess == randomLoc || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert('Hit');
            if (hits == 3) {
                isSunk = true;
                alert('You sank my battleship!');
            }
        } else {
            alert('Miss');
        }
    }
}

var stats = 'You took ' + guesses + ' guesses to sink the battleship, ' 
            + 'which means your shooting accuracy was ' + (3 / guesses);
alert(stats);