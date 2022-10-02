// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
//     of people you are inviting to dinner.

const guest = ['Rizwan', 'Kunza', 'Khursheed']

guest.forEach((element, index) => {
  index
    ? console.log(
        'I would like to invite you to dinner. Will you accept my offer? Ms.' +
          element
      )
    : console.log(
        'I would like to invite you to dinner. Will you accept my offer? Mr.' +
          element
      )
})

console.log('I am inviting ' + guest.length + ' people to Dinner')
