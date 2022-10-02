// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
//     function make_great() with a copy of the array of magicians’ names. Because the
//     original array will be unchanged, return the new array and store it in a separate array.
//     Call show_magicians() with each array to show that you have one array of the original
//     names and one array with the Great added to each magician’s name.

const magicians = [
  'Penn and Teller',
  'Jerry Sadowitz',
  'Dynamo',
  'Apollo Robbins',
  'Derren Brown',
  'Lafayette',
]

let greatMagicians = []

function make_great(magicians) {
  greatMagicians = magicians.map((element) => {
    return `The Great ${element}`
  })
}

make_great(magicians)

function show_magicians(magicians) {
  magicians.forEach((element) => {
    console.log(element)
  })
}

show_magicians(magicians)

console.log('\n\n')

show_magicians(greatMagicians)
