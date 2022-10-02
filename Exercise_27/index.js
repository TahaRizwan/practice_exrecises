// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

const alien_color = 'green'
const prompt = require('prompt-sync')({ sigint: true })
console.log(
  'Guess Alien Color from the following? \n 1.Red \n 2.Yellow \n 3.Green\n'
)
const guess = prompt('Answer: ')
console.log(`Hey there you're guess is ${guess}!\n`)
if (guess.toLowerCase().trim() == alien_color) {
  console.log('You got 5 points')
} else if (guess.toLowerCase().trim() == 'yellow') {
  console.log('You got 10 points')
} else if (guess.toLowerCase().trim() == 'red') {
  console.log('You got 15 points')
}
