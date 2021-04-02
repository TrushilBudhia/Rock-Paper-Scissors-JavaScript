// VARIABLES
var body = document.body;
var mainSelect = document.querySelector('main');
var headingSelect = document.querySelector('h1');

var numberWins = 0;
var numberDraws = 0;
var numberLosses = 0;
var winValue = false;

// Creating elements
var gameHeading = document.createElement('h2');
var buttonContainer = document.createElement('section');
var rockButton = document.createElement('button');
var paperButton = document.createElement('button');
var scissorsButton = document.createElement('button');
var horizontalLine = document.createElement('hr');
var gameResultContainer = document.createElement('section');
var playerChoiceResult = document.createElement('article');
var scoreSection = document.createElement('section');
var scoreArticleContainer = document.createElement('article');
var footerSection = document.createElement('footer');

var scriptSection = document.querySelector('script');

// Adding id's to the buttons
rockButton.setAttribute('id', 'rock-button');
paperButton.setAttribute('id', 'paper-button');
scissorsButton.setAttribute('id', 'scissors-button');
rockButton.setAttribute('data-type', 'Rock');
paperButton.setAttribute('data-type', 'Paper');
scissorsButton.setAttribute('data-type', 'Scissors');

// Adding styles to the elements
body.setAttribute('style', 'background: #e7e7e7; margin: 0; padding: 0;');
mainSelect.setAttribute('style', 'height: 67vh;');
headingSelect.setAttribute('style', 'font-size: 3rem; text-align: center;');
gameHeading.setAttribute('style', 'font-size: 1.8rem; text-align: center;');
buttonContainer.setAttribute('style', 'display: flex; justify-content: center; margin: 20px 0;');
gameResultContainer.setAttribute('style', 'font-size: 130%; text-align: center;');
footerSection.setAttribute('style', 'background: #313131; color: #fff; margin: 0 auto; padding: 20px; text-align: center;');
horizontalLine.setAttribute('style', 'max-width: 600px;');

// Adding text to the elements
gameHeading.textContent = 'Choose an option:';
rockButton.textContent = 'ROCK';
paperButton.textContent = 'PAPER';
scissorsButton.textContent = 'SCISSORS';
footerSection.textContent = '© Created by Trushil';

// Appending the elements to the html
mainSelect.appendChild(gameHeading);
buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);
mainSelect.appendChild(buttonContainer);
mainSelect.appendChild(horizontalLine);
body.insertBefore(footerSection, scriptSection);

/*************************************************************************************************/
/******************************************* FUNCTIONS *******************************************/
/*************************************************************************************************/
var buttonSelect = document.querySelectorAll('button');
var buttonColor = '#ff6666'; 
var buttonHoverColor = '#f63333';
var buttonActiveColor = '#20ba1a'; 

// Function to style the buttons
function buttonStyling() {
    for(i = 0; i < buttonSelect.length; i++) {
        buttonSelect[i].setAttribute('style', `background: ${buttonColor}; border: 1px solid #a8a8a8; border-radius: 10px; color: #fff; font-size: 0.9rem; margin: 10px; outline: none; padding: 20px 40px;`);
    }
}

// Invoking function
buttonStyling();

// Function to activate when the button the user has chosen has been clicked
function buttonSelection() {
    playerChoiceResult.innerHTML = " ";
    var buttonChoice = this.getAttribute('data-type');
    renderUserSelection(buttonChoice);
    computerSelection();
    gameResult();
}

// Function to append the elements to the main element
function appendGameResults(choice, paragraphChoice) {
    var spanChoice = document.createElement('span');
    spanChoice.setAttribute('style', 'font-weight: 800;')
    spanChoice.textContent = choice;
    paragraphChoice.append(spanChoice);
    playerChoiceResult.append(paragraphChoice);
    gameResultContainer.append(playerChoiceResult);
    mainSelect.append(gameResultContainer);
}

// Function to display the users selection
function renderUserSelection(userChoice) {
    var paragraphUserChoice = document.createElement('p');
    paragraphUserChoice.setAttribute('id', 'user-selection');
    paragraphUserChoice.textContent = 'You have chosen ';
    appendGameResults(userChoice, paragraphUserChoice); 
}

// Function to display the computers selection
function computerSelection() {
    var options = ["Rock", "Paper", "Scissors"];
    var randomChoice = Math.floor(Math.random() * options.length);
    var computerChoice = options[randomChoice];

    var paragraphComputerChoice = document.createElement('p');
    paragraphComputerChoice.setAttribute('id', 'computer-selection');
    paragraphComputerChoice.textContent = 'The computer has chosen ';
    appendGameResults(computerChoice, paragraphComputerChoice);
}

// Function to display the game result
function gameResult() {
    var userSpanSelect = document.getElementById('user-selection');
    var computerSpanSelect = document.getElementById('computer-selection');
    // Assigning the selection from the user and the computer to variables
    var userChoiceValue = userSpanSelect.children[0].textContent;
    var computerChoiceValue = computerSpanSelect.children[0].textContent;
    // Creating a paragraph element to hold the result message
    var paragraphResult = document.createElement('p');
    paragraphResult.setAttribute('style', 'font-weight: 800;');
    var gameWin = "You have won!";
    var gameDraw = "The game has ended in a draw!";
    var gameLose = "Sorry. You have lost!";
    var winRock = userChoiceValue === 'Rock' && computerChoiceValue === 'Scissors';
    var winPaper = userChoiceValue === 'Paper' && computerChoiceValue === 'Rock';
    var winScissors = userChoiceValue === 'Scissors' && computerChoiceValue === 'Paper';
    var loseRock = userChoiceValue === 'Rock' && computerChoiceValue === 'Paper';
    var losePaper = userChoiceValue === 'Paper' && computerChoiceValue === 'Scissors';
    var loseScissors = userChoiceValue === 'Scissors' && computerChoiceValue === 'Rock';

    // Determining whether the player has won, lost or tied and displaying a message conveying such
    if(winRock || winPaper || winScissors) {
        paragraphResult.textContent = gameWin;
        numberWins++;
        setWins();
    } 
    else if(loseRock || losePaper || loseScissors) {
        paragraphResult.textContent = gameLose;
        numberLosses++;
        setLosses();
    }
    else {
        paragraphResult.textContent = gameDraw;
        numberDraws++;
        setDraws();
    }
    // Appending the paragraphResult to the html
    playerChoiceResult.append(paragraphResult);
    gameResultContainer.append(playerChoiceResult);
    mainSelect.append(gameResultContainer);
}

// Functions relating to the score board
// A function to render the scoreboard
function renderScoreBoard() {
    var winCounter = document.createElement('p');
    var drawCounter = document.createElement('p');
    var loseCounter = document.createElement('p');
    var resetScoreButton = document.createElement('button');
    winCounter.setAttribute('id', 'win');
    drawCounter.setAttribute('id', 'draw');
    loseCounter.setAttribute('id', 'lose');
    resetScoreButton.setAttribute('id', 'reset-score');

    winCounter.textContent = numberWins;
    drawCounter.textContent = numberDraws;
    loseCounter.textContent = numberLosses;
    resetScoreButton.textContent = "Reset Score";
    resetScoreButton.setAttribute('style', 'border: 1px solid #a8a8a8; border-radius: 4px; font-size: 1.2rem; outline: none; margin: 0 auto; padding: 20px 40px; width: 50%;');
    scoreArticleContainer.append(winCounter);
    scoreArticleContainer.append(drawCounter);
    scoreArticleContainer.append(loseCounter);
    scoreArticleContainer.setAttribute('style', 'display: flex; flex-direction: row; font-size: 1.4rem; justify-content: space-between;');
    scoreSection.append(scoreArticleContainer);
    scoreSection.append(resetScoreButton);
    scoreSection.setAttribute('style', 'display: flex; flex-direction: column; justify-content: center; margin: 0 auto; max-width: 600px; position: relative; bottom: 20vh;');
    body.insertBefore(scoreSection, footerSection);
}

// Invoking the renderScoreBoard function
renderScoreBoard();

// A function to load the scores
function loadScores() {
    getWins();
    getDraws();
    getLosses();
}

var win = document.querySelector("#win");
var draw = document.querySelector("#draw");
var lose = document.querySelector("#lose");

function setWins() {
    win.textContent = "Wins: " + numberWins;
    localStorage.setItem("numberWins", numberWins);
}

function setDraws() {
    draw.textContent = "Draws: " + numberDraws;
    localStorage.setItem("numberDraws", numberDraws);
}

function setLosses() {
    lose.textContent = "Losses: " + numberLosses;
    localStorage.setItem("numberLosses", numberLosses);
}

function getWins() {
    var storedWins = localStorage.getItem("numberWins");
    if (storedWins !== null) {
        numberWins = storedWins;
    } else {
        numberWins = 0;
    }
    win.textContent = "Wins: " + numberWins;
}

function getDraws() {
    var storedDraws = localStorage.getItem("numberDraws");
    if (storedDraws !== null) {
        numberDraws = storedDraws;
    } else {
        numberDraws = 0;
    }
    draw.textContent = "Draws: " + numberDraws;
}

function getLosses() {
    var storedLosses = localStorage.getItem("numberLosses");
    if (storedLosses !== null) {
        numberLosses = storedLosses;
    } else {
        numberLosses = 0;
    }
    lose.textContent = "Losses: " + numberLosses;
}

function resetScore() {
    numberWins = 0;
    numberDraws = 0;
    numberLosses = 0;
    setWins();
    setDraws();
    setLosses();
}

/*************************************************************************************************/
/**************************************** EVENT LISTENERS ****************************************/
/*************************************************************************************************/

for(i = 0; i < buttonSelect.length; i++) {
    buttonSelect[i].addEventListener('mouseover', function(event) {
        event.target.style.background = buttonHoverColor;
    });  
    buttonSelect[i].addEventListener('mouseleave', function(event) {
        event.target.style.background = buttonColor;
    });  
}

for(i = 0; i < buttonSelect.length; i++) {
    buttonSelect[i].addEventListener('mousedown', function(event) {
        event.target.style.background = buttonActiveColor;
    });  
    buttonSelect[i].addEventListener('mouseup', function(event) {
        event.target.style.background = buttonColor;
    });  
}

rockButton.addEventListener('click', buttonSelection);
paperButton.addEventListener('click', buttonSelection);
scissorsButton.addEventListener('click', buttonSelection);

var resetScores = document.querySelector('#reset-score');
var resetButtonColor = '#fff'; 
var resetButtonHoverColor = '#f0b23d';
var resetButtonActiveColor = '#f6682a';

resetScores.addEventListener('mouseover', function(event) {
    event.target.style.background = resetButtonHoverColor;
});  
resetScores.addEventListener('mouseleave', function(event) {
    event.target.style.background = resetButtonColor;
});  

resetScores.addEventListener('mousedown', function(event) {
    event.target.style.background = resetButtonActiveColor;
});  
resetScores.addEventListener('mouseup', function(event) {
    event.target.style.background = resetButtonColor;
});  

resetScores.addEventListener('click', resetScore);

// Invoking the function to load the scores to the webpage
loadScores();





