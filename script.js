// Function to handle the user's choice
function userChoice(choice) {
    // Display user choice
    document.getElementById("user-choice").innerText = "You chose: " + choice.charAt(0).toUpperCase() + choice.slice(1);
   
    // Computer randomly chooses Rock, Paper, or Scissors
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[Math.floor(Math.random() * 3)];
   
    // Display computer choice
    document.getElementById("computer-choice").innerText = "Computer chose: " + compChoice.charAt(0).toUpperCase() + compChoice.slice(1);
   
    // Determine the winner
    let result;
    if (choice === compChoice) {
        result = "It's a draw!";
    } else if ((choice === 'rock' && compChoice === 'scissors') ||
               (choice === 'scissors' && compChoice === 'paper') ||
               (choice === 'paper' && compChoice === 'rock')) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }
   
    // Display result
    document.getElementById("result").innerText = result;
   
    // Show play again button
    document.getElementById("play-again").style.display = "block";
}

// Function to reload the game
function playAgain() {
    // Clear previous choices and result
    document.getElementById("user-choice").innerText = "";
    document.getElementById("computer-choice").innerText = "";
    document.getElementById("result").innerText = "";
   
    // Hide play again button
    document.getElementById("play-again").style.display = "none";
}
