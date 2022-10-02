// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
//     variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)

const alien_color = 'green'
const prompt = require('prompt-sync')({ sigint: true })
console.log(
  'Guess Alien Color from the following? \n 1.Red \n 2.Yellow \n 3.Green\n'
)
const guess = prompt('Answer: ')
console.log(`Hey there you're guess is ${guess}!\n`)
if (guess.toLowerCase().trim() == alien_color) {
  console.log('You got 5 points')
}
if (guess.toLowerCase().trim() != alien_color) {
}
