// 15. Changing Guest List: You just heard that one of your guests can’t make the
//     Dinner, so you need to send out a new set of invitations. You’ll have to think of
//     someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.

const guest = ['Rizwan', 'Kunza', 'Khursheed']

guest.forEach((element, index) => {
  index
    ? console.log(
        'I would like to invite you to Dinner. Will you accept my offer? Ms.' +
          element
      )
    : console.log(
        'I would like to invite you to Dinner. Will you accept my offer? Mr.' +
          element
      )
})

console.log(`\nIt's sad to hear. Ms.${guest[2]} can't make to the Dinner.\n`)

guest.pop()

guest.push('Maryam')

guest.forEach((element, index) => {
  index
    ? console.log(
        'I would like to invite you to Dinner. Will you accept my offer? Ms.' +
          element
      )
    : console.log(
        'I would like to invite you to Dinner. Will you accept my offer? Mr.' +
          element
      )
})
