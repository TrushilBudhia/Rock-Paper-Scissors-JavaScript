var body = document.body;
var mainSelect = document.querySelector('main');
var headingSelect = document.querySelector('h1');

var wins = 0;
var draw = 0;
var losses = 0;

// Creating elements
var gameHeading = document.createElement('h2');
var buttonContainer = document.createElement('section');
var rockButton = document.createElement('button');
var paperButton = document.createElement('button');
var scissorsButton = document.createElement('button');
var horizontalLine = document.createElement('hr');
var gameResultContainer = document.createElement('section');
var playerChoiceResult = document.createElement('article');
var footerSection = document.createElement('footer');

// Adding id's to the buttons
rockButton.setAttribute('id', 'rockButton');
paperButton.setAttribute('id', 'paperButton');
scissorsButton.setAttribute('id', 'scissorsButton');
rockButton.setAttribute('data-type', 'Rock');
paperButton.setAttribute('data-type', 'Paper');
scissorsButton.setAttribute('data-type', 'Scissors');

// Adding styles to the elements
body.setAttribute('style', 'margin: 0; padding: 0;');
mainSelect.setAttribute('style', 'height: 86vh;');
headingSelect.setAttribute('style', 'text-align: center;');
gameHeading.setAttribute('style', 'text-align: center;');
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

body.appendChild(footerSection);

// FUNCTIONS
var buttonSelect = document.querySelectorAll('button');

// Function to style the buttons
function buttonStyling() {
    for(i = 0; i < buttonSelect.length; i++) {
        buttonSelect[i].setAttribute('style', 'margin: 10px; padding: 20px 40px;');
    }
}

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
    paragraphUserChoice.setAttribute('id', 'userSelection');
    paragraphUserChoice.textContent = 'You have chosen ';

    appendGameResults(userChoice, paragraphUserChoice); 
    // spanUserChoice.setAttribute('style', 'font-weight: 800;')
    // spanUserChoice.textContent = choice;
    // paragraphUserChoice.append(spanUserChoice);
    // userChoice.append(paragraphUserChoice);
    // gameResultContainer.append(userChoice);
    // mainSelect.append(gameResultContainer);
}

// Function to display the computers selection
function computerSelection() {
    var options = ["Rock", "Paper", "Scissors"];
    var randomChoice = Math.floor(Math.random() * options.length);
    var computerChoice = options[randomChoice];

    var paragraphComputerChoice = document.createElement('p');
    paragraphComputerChoice.setAttribute('id', 'computerSelection');
    paragraphComputerChoice.textContent = 'The computer has chosen ';
    //console.log(choice);

    appendGameResults(computerChoice, paragraphComputerChoice);
    // spanComputerChoice.setAttribute('style', 'font-weight: 800;')
    // spanComputerChoice.textContent = choice;
    // paragraphComputerChoice.append(spanComputerChoice);
    // computerChoice.append(paragraphComputerChoice);
    // gameResultContainer.append(computerChoice);
    // mainSelect.append(gameResultContainer);
}

// Function to display the game result
function gameResult() {
    var userSpanSelect = document.getElementById('userSelection');
    var computerSpanSelect = document.getElementById('computerSelection');
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
    } 
    else if(loseRock || losePaper || loseScissors) {
        paragraphResult.textContent = gameLose;
    }
    else {
        paragraphResult.textContent = gameDraw;
    }
    // Appending the paragraphResult to the html
    playerChoiceResult.append(paragraphResult);
    gameResultContainer.append(playerChoiceResult);
    mainSelect.append(gameResultContainer);
}

// Invoking function
buttonStyling();


// EVENT LISTENERS
rockButton.addEventListener('click', buttonSelection);
paperButton.addEventListener('click', buttonSelection);
scissorsButton.addEventListener('click', buttonSelection);

// TODO: Add a counter for wins, loses and draws




