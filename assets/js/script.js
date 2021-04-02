// VARIABLES
var body = document.body;

var numberWins = 0;
var numberDraws = 0;
var numberLosses = 0;

// Creating elements
var mainSection = document.createElement('main');
var headerSection = document.createElement('header');
var headingSelect = document.createElement('h1');
var gameHeading = document.createElement('h2');
var buttonContainer = document.createElement('section');
var rockButton = document.createElement('button');
var paperButton = document.createElement('button');
var scissorsButton = document.createElement('button');
var gameResultContainer = document.createElement('section');
var playerChoiceResult = document.createElement('article');
var scoreSection = document.createElement('section');
var scoreArticleContainer = document.createElement('article');
var footerSection = document.createElement('footer');
var footerParagraph = document.createElement('p');
var scriptSection = document.querySelector('script');

// Adding id's to the buttons
rockButton.setAttribute('id', 'rock-button');
paperButton.setAttribute('id', 'paper-button');
scissorsButton.setAttribute('id', 'scissors-button');
rockButton.setAttribute('data-type', 'Rock');
paperButton.setAttribute('data-type', 'Paper');
scissorsButton.setAttribute('data-type', 'Scissors');

// Adding styles to the elements
body.setAttribute('style', 'background: #ff9b68; font-family: Noto Sans, sans-serif; margin: 0; padding: 0;');
mainSection.setAttribute('style', 'background: #fff; border-radius: 7px; box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%); height: 61vh; padding: 20px 0px; margin: 0 auto; max-width: 600px;');
headingSelect.setAttribute('style', 'background: #fff; box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%), 0 4px 4px 0 rgb(0 0 0 / 19%); color: #4e4e4e; font-size: 3rem; margin: 0 auto; margin-bottom: 40px; padding: 10px 0; text-align: center;');
gameHeading.setAttribute('style', 'font-size: 1.8rem; text-align: center;');
buttonContainer.setAttribute('style', 'box-shadow: 0px 3px 5px 1px rgb(0 0 0 / 10%); display: flex; flex-wrap: wrap; justify-content: space-around; margin: 0 auto; margin-bottom: 20px; padding-bottom: 20px; width: 100%;');
gameResultContainer.setAttribute('style', 'font-size: 130%; text-align: center;');
footerSection.setAttribute('style', 'background: #313131; color: #fff; margin: 0 auto; padding: 5px 0; text-align: center;');

// Adding text to the elements
headingSelect.textContent = 'Rock, Paper, Scissors';
gameHeading.textContent = 'Choose an option:';
rockButton.textContent = 'ROCK';
paperButton.textContent = 'PAPER';
scissorsButton.textContent = 'SCISSORS';
footerParagraph.textContent = '© Created by Trushil';

// Appending the elements to the html
body.insertBefore(headerSection, scriptSection);
headerSection.appendChild(headingSelect);
body.insertBefore(mainSection, scriptSection);
mainSection.appendChild(gameHeading);
buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);
mainSection.appendChild(buttonContainer);
body.insertBefore(footerSection, scriptSection);
footerSection.appendChild(footerParagraph);

/*************************************************************************************************/
/******************************************* FUNCTIONS *******************************************/
/*************************************************************************************************/
var buttonSelect = document.querySelectorAll('button');
var buttonColor = '#ff6666'; 
var buttonHoverColor = '#f63333';
var buttonActiveColor = '#f87f42'; 
var winColor = '#1dba1f';
var drawColor = '#337cb2';
var loseColor = '#ff2e2e';

// Function to style the buttons
function buttonStyling() {
    for(i = 0; i < buttonSelect.length; i++) {   
        buttonSelect[i].setAttribute('style', `background: ${buttonColor}; border: 1px solid #a8a8a8; border-radius: 10px; color: #fff; display: flex; font-size: 0.9rem; outline: none; padding: 20px 40px;`);
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
    mainSection.append(gameResultContainer);
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
    win.setAttribute('style', 'color: #000;');
    draw.setAttribute('style', 'color: #000;');
    lose.setAttribute('style', 'color: #000;');
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
        paragraphResult.setAttribute('style', `color: ${winColor};`);
        numberWins++;
        setWins();
    } 
    else if(loseRock || losePaper || loseScissors) {
        paragraphResult.textContent = gameLose;
        paragraphResult.setAttribute('style', `color: ${loseColor};`);
        numberLosses++;
        setLosses();
    }
    else {
        paragraphResult.textContent = gameDraw;
        paragraphResult.setAttribute('style', `color: ${drawColor};`);
        numberDraws++;
        setDraws();
    }
    // Appending the paragraphResult to the html
    playerChoiceResult.append(paragraphResult);
    gameResultContainer.append(playerChoiceResult);
    mainSection.append(gameResultContainer);
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
    scoreArticleContainer.setAttribute('style', 'display: flex; flex-direction: row; font-size: 1.4rem; justify-content: space-between; padding: 0 20px;');
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
    win.setAttribute('style', `color: ${winColor};`);
    localStorage.setItem("numberWins", numberWins);
}

function setDraws() {
    draw.textContent = "Draws: " + numberDraws;
    draw.setAttribute('style', `color: ${drawColor};`);
    localStorage.setItem("numberDraws", numberDraws);
}

function setLosses() {
    lose.textContent = "Losses: " + numberLosses;
    lose.setAttribute('style', `color: ${loseColor};`);
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
var resetButtonHoverColor = '#f6682a';
var resetButtonActiveColor = '#ff9b68';
resetScores.addEventListener('mouseover', function(event) {
    event.target.style.background = resetButtonHoverColor;
    event.target.style.color = '#fff';
});  
resetScores.addEventListener('mouseleave', function(event) {
    event.target.style.background = resetButtonColor;
    event.target.style.color = '#000';
});  

resetScores.addEventListener('mousedown', function(event) {
    event.target.style.background = resetButtonActiveColor;
    event.target.style.color = '#fff';
});  
resetScores.addEventListener('mouseup', function(event) {
    event.target.style.background = resetButtonColor;
    event.target.style.color = '#000';
});  
resetScores.addEventListener('click', resetScore);
// Invoking the function to load the scores to the webpage
loadScores();





