function playRockPaperScissors() {
  // Prompt the user to enter rock, paper, or scissors
  const userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

  // Check if the user clicked "Cancel" or entered an empty string
  if (!userChoice) {
      alert("Invalid input. Please enter rock, paper, or scissors.");
      return;
  }

  // Check if the user's choice is valid
  const validChoices = ['rock', 'paper', 'scissors'];
  if (!validChoices.includes(userChoice)) {
      alert("Invalid choice. Please enter rock, paper, or scissors.");
      return;
  }

  // Generate a random choice for the computer
  const computerChoices = ['rock', 'paper', 'scissors'];
  const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Determine the winner
  let result;
  if (userChoice === computerChoice) {
      result = "It's a tie!";
  } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')
  ) {
      result = "You win!";
  } else {
      result = "You lose!";
  }

  // Display the result
  alert(`Your choice: ${userChoice}\nComputer's choice: ${computerChoice}\nResult: ${result}`);
}

// Call the function to play the game
playRockPaperScissors();
playRockPaperScissors();
playRockPaperScissors();
playRockPaperScissors();
playRockPaperScissors();


