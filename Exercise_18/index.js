// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Sol.

const location = ['London', 'Paris', 'New York', 'France', 'Germany']

console.log('Original Location: ', location)

const sortedLocation = [...location]

// for (i = 0; i < sortedLocation.length; i++) {
//   for (j = i; j < sortedLocation.length; j++) {
//     if (sortedLocation[i][0] > sortedLocation[j][0]) {
//       let temp = sortedLocation[i]
//       sortedLocation[i] = sortedLocation[j]
//       sortedLocation[j] = temp
//     }
//   }
// }

sortedLocation.sort()

console.log('Sorted Location: ', sortedLocation)

console.log('Original Location: ', location)

const reverseSorted = [...sortedLocation]

// for (i = 0; i < reverseSorted.length; i++) {
//   for (j = i; j < reverseSorted.length; j++) {
//     if (reverseSorted[i][0] < reverseSorted[j][0]) {
//       let temp = reverseSorted[i]
//       reverseSorted[i] = reverseSorted[j]
//       reverseSorted[j] = temp
//     }
//   }
// }

reverseSorted.reverse()

console.log('Reversed Sorted: ', reverseSorted)

console.log('Original Location: ', location)

const reverseLocation = [...location]

// for (i = 0; i < reverseLocation.length; i++) {
//   for (j = i; j < reverseLocation.length; j++) {
//     if (reverseLocation[i][0] < reverseLocation[j][0]) {
//       let temp = reverseLocation[i]
//       reverseLocation[i] = reverseLocation[j]
//       reverseLocation[j] = temp
//     }
//   }
// }

reverseLocation.reverse()

console.log('Reversed Location: ', reverseLocation)

console.log('Original Location: ', location)

location.reverse()

console.log('Location reverse', location)

location.reverse()

console.log('Location Re-reverse', location)

location.sort()

console.log('Alphabetically Ordered', location)

location.reverse()

console.log('Alphabetically Reverse Ordered', location)
