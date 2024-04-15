console.log("I'm ready!");
let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// these two variables will be changed to test the conditional
let firstPlayerChoice;
let secondPlayerChoice;

let firstPossibility;
let secondPossibility;
let thirdPossibility;

let fourthPossibility;
let fifthPossibility;
let sixthPossibility;

let seventhPossibility;

firstPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;

secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
thirdPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
fourthPossibility = secondPlayerChoice === rock && firstPlayerChoice === scissors;
fifthPossibility = secondPlayerChoice === scissors && firstPlayerChoice === paper;
sixthPossibility = secondPlayerChoice === paper && firstPlayerChoice === rock;

seventhPossibility = firstPlayerChoice === secondPlayerChoice;

if (firstPossibility || secondPossibility || thirdPossibility) {
  console.log(`first player won!`);
} else if (fourthPossibility || fifthPossibility || sixthPossibility) {
  console.log(`second player won!`);
} else if (seventhPossibility) {
  console.log('there is a tie! pick again');
} else {
  console.log('something went wrong!');
}