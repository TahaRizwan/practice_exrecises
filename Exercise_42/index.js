// 42. Great Magicians: Start with a copy of your program from Exercise 39.
//     Write a function called make_great() that modifies the array of magicians by adding
//     the phrase the Great to each magician’s name. Call show_magicians() to
//     see that the list has actually been modified.

const magicians = [
  'Penn and Teller',
  'Jerry Sadowitz',
  'Dynamo',
  'Apollo Robbins',
  'Derren Brown',
  'Lafayette',
]

function make_great(magicians) {
  magicians = magicians.map((element) => {
    return `The Great ${element}`
  })

  show_magicians(magicians)
}

make_great(magicians)

function show_magicians(magicians) {
  magicians.forEach((element) => {
    console.log(element)
  })
}
