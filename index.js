const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

start();

async function start() {
  console.log("Choose your game!!");
  let game = "false";

  function ask(questionText) {
    return new Promise((resolve, reject) => {
      rl.question(questionText, resolve);
    });
  }

  game = await ask("reverse or guess? ");
  if (game === "guess") {
    let minNumber = 1;
//Original Start
    let minCurrent = 0;
    ("yes");
    while (playAgain === "yes") {
      console.log(
        "Welcome to the game, please pick a max number for me to guess!"
      );
      let maxNumber = await ask(" What do you choose for your max number?");
      let medianChange = maxNumber / 2;
      let maxCurrent = maxNumber;

      // High and Low Function
      let Guess = await ask("Is " + medianChange + " your number?");

      if (Guess === "yes") {
        console.log("Congrats, I won!");
        playAgain = await ask("Would you like to play again?");
      } else {
        while (Guess !== "yes") {
          // let me know I'm in loop 
          //console.log("im in" )
          let currentGuess = await ask("higher or lower?");
          console.log("\ncurrent guess is " + medianChange);
         
          if (currentGuess === "h" || currentGuess === "higher") {
            //Debugger viewing current variable values
            // console.log("This is maxnumber" + maxNumber);
            // console.log("This is current" + maxCurrent);
            // console.log("This is median" + medianChange);
            // console.log("im high");
            medianChange = Math.round((+maxCurrent + medianChange) / 2);
          } else if (currentGuess === "l" || currentGuess === "lower") {
            //Debugger 2
            // console.log("This is min number" + minNumber);
            // console.log("This is current" + minCurrent);
            // console.log("This is median" + medianChange);
            // console.log("im low");
            medianChange = Math.round((+minCurrent + medianChange) / 2);
          }

          await ask("Is " + medianChange + " your number?");
          
          if (Guess === "yes") {
            console.log("I won!");
            playAgain = await ask("Would you like to play again?");
            break;
          }
        }
      }
    }

    console.log("GAME OVER");
    process.exit();
  }
//Reverse game we guess computers number
  if (game === "reverse") {
    let randomNum = Math.round(Math.random() * 101);
    let correct = "no";
    //Debugging
    console.log(randomNum);
    //Main Reverse Game Code
    let guess = await ask("Please enter a number between 1 and 100:");
    while (correct === "no") {
      if (guess < randomNum) {
        console.log(guess);
        console.log(randomNum);
        console.log("in Lower");
        guess = await ask("Your guess is too low guess again:");
      } else if (guess > randomNum) {
        console.log("in higher");
        guess = await ask("Your guess is too high guess again:");
      } else if (guess == randomNum) {
        console.log("You guessed correct!");
        break;
      } else {
        console.log("ERROR!! FORCED CLOSE!!");
      }
    }
    process.exit();
  } else {
    console.log("No game selected!");
    process.exit;
  }
}
