// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
//     should be the same, but each message should be personalized with the person’s name.
// Sol.


const names = ['Ali', 'Hamza', 'Abu Bakar', 'Adul Wahab', 'Ahsan']

names.forEach((element) => {
  console.log('Hello, How are you '+element + '!\n')
})