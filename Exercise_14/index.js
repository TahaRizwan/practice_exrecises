// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
//     invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Sol.

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
