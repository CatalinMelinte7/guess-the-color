var heading = document.getElementById('color-value');
var buttons = document.getElementsByClassName("color-button");
var colors = [];
var winnerIndex;
var maxWins = 0;
var currentWins = 0;
var currentWinsElement = document.getElementById("current-wins");
var img = document.getElementsByTagName("img")[0];
var firstArrow = 7.4;

randomizeColors();

function randomizeColors() {
    img.setAttribute('style', 'visibility: hidden;');
    for (var i = 0; i < buttons.length; i++) {
        var red = getRandomInt(255);
        var green = getRandomInt(255);
        var blue = getRandomInt(255);

        colors[i] = { 'red': red, 'green': green, 'blue': blue };

        buttons[i].setAttribute('style',
            'background-color: rgb(' + red + ',' + green + ',' + blue + ');');
    }
    winnerIndex = getRandomInt(buttons.length);
    winnerColor = colors[winnerIndex];
    heading.innerHTML = 'RGB code: (' + winnerColor.red + ', ' + winnerColor.green + ', ' + winnerColor.blue + ')';
}

function getRandomInt(nr) {
    return Math.floor(Math.random() * nr);
}

function checkWinner(index) {
    if (winnerIndex == index) {
        currentWins++;
        document.getElementById("current-wins").innerHTML = currentWins;
        checkForMax();
        randomizeColors();
    } else {
        currentWins = -1;
        currentWinsElement.innerHTML = 0;
        var arrow = 16.5 * winnerIndex + firstArrow;
        img.setAttribute('style', 'visibility:visible;left: ' + arrow + '%;');
    }
}

function checkForMax() {
    if (currentWins > maxWins) {
        maxWins = currentWins;
        document.getElementById("max-wins").innerHTML = currentWins;
    }
}

function resetGame() {
    currentWins = 0;
    currentWinsElement.innerHTML = 0;
    randomizeColors();
}