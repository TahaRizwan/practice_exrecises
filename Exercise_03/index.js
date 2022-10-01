// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const name = 'Abu Bakar'

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt[0].toUpperCase() + txt.substr(1).toLowerCase()
  })
}

console.log()

console.log(
  `  In Lowercase: "${name.toLowerCase()}"
  In Uppercase: "${name.toUpperCase()}" 
  In Titlecase: "${toTitleCase(name)}"
  `
)
