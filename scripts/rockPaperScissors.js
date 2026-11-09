// scripts/rockPaperScissors.js — yours to write.
//
// The markers below name requirements from README.md, so the brief, your
// Issues, the agent and this file all use the same words. Nothing reads them.

// FR005 — Rock Paper Scissors.
// Read the player's move from process.argv, generate a random move for the
// computer, decide the winner (or a draw) by the rules of the game, and print
// the result to the console.
//
// node scripts/rockPaperScissors.js rock
// # You chose rock. Computer chose scissors. You win!

// FR008 — Reject an invalid or missing move.
// If no move is given, or it isn't one of rock, paper or scissors, print a
// usage message instead of letting the program crash or silently guess.
const playersTurn = process.argv[2] 
console.log('Dein Zug war: ' + playersTurn)


if (playersTurn !== 'rock' && playersTurn !== 'scissors' && playersTurn !== 'paper') {
    console.log('Das war leider ein ungültiger Zug. Bitte versuche es erneut mit rock, scissors or paper')
    process.exit(1)
}

const moves = ['rock', 'scissors', 'paper'];
const randomMove = Math.floor(Math.random() * 3);
const computersTurn = moves[randomMove]


console.log('Der Computer wählte: ' + computersTurn)

if (playersTurn === computersTurn) {
    console.log('Das war ein unentschieden, versuch es nochmal!')
} else if ((playersTurn === 'rock' && computersTurn === 'scissors') || (playersTurn === 'scissors' && computersTurn === 'paper') || (playersTurn === 'paper' && computersTurn === 'rock')) {
    console.log('Herzlichen Glückwunsch! du hast gewonnen')
} else {
    console.log('Schade du hast verloren! Versuch es nochmal!')
}
