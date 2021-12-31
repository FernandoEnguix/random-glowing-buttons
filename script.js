function tryNumbers() {
    var tryR = document.getElementById("guessedRed").value;
    var tryG = document.getElementById("guessedGreen").value;
    var tryB = document.getElementById("guessedBlue").value;
    document.getElementById("xColorBtn").style.background = "rgb(" + tryR + "," + tryG + "," + tryB + ")";
}

function getHint() {
    document.getElementById('hintText').innerHTML = "The total sum is " + totalSum + "."
}


function getResults() {
    document.getElementById('results').innerHTML = "The secret RGB was " + rndR + ", " + rndG + ", " + rndB
}


var rndR = Math.floor(Math.random() * 256);
var rndG = Math.floor(Math.random() * 256);
var rndB = Math.floor(Math.random() * 256);
var totalSum = rndR + rndG + rndB;
document.getElementById("rndColorBtn").style.background = "rgb(" + rndR + "," + rndG + "," + rndB + ")";


document.getElementById("tryBtn").addEventListener("click", tryNumbers);
document.getElementById("hint").addEventListener("click", getHint);
document.getElementById("solution").addEventListener("click", getResults);