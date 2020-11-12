const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  switch(userInput) {
    case 'rock':
      return 'rock';
      break;
    case 'paper':
      return 'paper';
      break;
    case 'scissors':
      return 'scissors';
      break;
    case 'bomb':
      return 'bomb';
      break;
    default:
      return 'Error, check the input';
      break;
  }
}

// console.log(getUserChoice('shhds'))

const getComputerChoice = () => {
  let num = Math.ceil(Math.random() * 3)
  let output = ['rock', 'paper', 'scissors', 'bomb']
  return output[num]
}

// console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice ) => {
  if (userChoice === computerChoice) {
    return `Computer chose: ${computerChoice}, user : ${userChoice}. It is a tie`
  } else if (userChoice === 'bomb') {
    return `Computer chose: ${computerChoice}, user : ${userChoice}. User won!`
  } else if (computerChoice === 'bomb') {
    return `Computer chose: ${computerChoice}, user : ${userChoice}. Computer won!`
  }
  else {
    if (userChoice === 'scissors' && computerChoice === 'paper' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors'){
      return `Computer chose: ${computerChoice}, user : ${userChoice}. User won!`
    } else if (computerChoice === 'scissors' && userChoice === 'paper' || computerChoice === 'paper' && userChoice === 'rock' || computerChoice === 'rock' && userChoice === 'scissors'){
      return `Computer chose: ${computerChoice}, user : ${userChoice}. Computer won!`
    }
  }
}

// let computerChoice = getComputerChoice();
// console.log(determineWinner('rock', computerChoice))

function playGame() {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  // console.log(userChoice, computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
  }

  playGame()

  