// 45. Cars: Write a function that stores information about a car in a Object.
//     The function should always receive a manufacturer and a model name. It
//     should then accept an arbitrary number of keyword arguments. Call the function
//     with the required information and two other name-value pairs, such as a
//     color or an optional feature.
//     Print the Object that’s returned to make sure all the information was
//     stored correctly.

function store_info() {
  let car = {}

  let manufacturerAdded = false,
    modelAdded = false,
    keywordAdded = false

  const prompt = require('prompt-sync')({ sigint: true })

  while (!manufacturerAdded) {
    const manufacturer = prompt('Enter Manufacturer Name?')
    if (manufacturer.length) {
      manufacturerAdded = true
    }
    car = { ...car, manufacturer }
  }

  while (!modelAdded) {
    const model = prompt('Enter Model Name?')
    if (model.length) {
      modelAdded = true
    }
    car = { ...car, model }
  }

  while (!keywordAdded) {
    const keyword = prompt('Enter keyword?')
    if (keyword.length) {
      keywordAdded = true
    }
    car = { ...car, keyword }
  }

  const color = prompt('Enter color?')
  const door = prompt('Enter door?')

  car = { ...car, color, door }

  console.log(car)
}

store_info()
