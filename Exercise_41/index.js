// 41. Magicians: Make a array of magician’s names. Pass the array to a function
//     called show_magicians(), which prints the name of each magician in the array.

const magicians = [
  'Penn and Teller',
  'Jerry Sadowitz',
  'Dynamo',
  'Apollo Robbins',
  'Derren Brown',
  'The Great Lafayette',
]

function show_magicians(magicians) {
  magicians.forEach((element) => {
    console.log(element)
  })
}

show_magicians(magicians)
