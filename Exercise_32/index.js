// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

const current_users = ['ali', 'taha', 'aslam', 'abu bakar', 'Khalid']

const new_users = ['Ali', 'bilal', 'asif', 'hamza', 'Taha']

const current_users_lowercase = current_users.map((element) => {
  return element.toLowerCase()
})

console.log(current_users)

new_users.forEach((element) => {
  console.log(element)
  if (current_users_lowercase.includes(element.toLowerCase())) {
    console.log('User needs to enter a new username')
  } else {
    console.log('username available')
  }
})
