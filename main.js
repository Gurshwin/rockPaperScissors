const choices = document.querySelectorAll('.choice');
const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('comp-score');
const resultText = document.getElementById('result');

let userScore = 0;
let compScore = 0;

choices.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.dataset.choice;
    playGame(userChoice);
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randIndex = Math.floor(Math.random() * 3);
  return choices[randIndex];
}
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = "You win!";
    userScore++;
  } else {
    result = "You lose!";
    compScore++;
  }

  userScoreSpan.textContent = userScore;
  compScoreSpan.textContent = compScore;
  resultText.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;
}
