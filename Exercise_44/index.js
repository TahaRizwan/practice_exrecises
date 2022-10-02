// 44. Sandwiches: Write a function that accepts a array of items a person wants
//     on a sandwich. The function should have one parameter that collects as many
//     items as the function call provides, and it should print a summary of the sandwich
//     that is being ordered. Call the function three times, using a different number
//     of arguments each time.

let items = ['egg', 'chicken tikka', 'cabbage', 'onion', 'mayonnaise']

function make_sandwich(items) {
  console.log('The sandwich consists of ' + items)
}

make_sandwich(items)
items = ['egg', 'chicken tikka', 'mustard paste']

make_sandwich(items)

items = ['egg', 'chicken tikka', 'ketchup']

make_sandwich(items)

