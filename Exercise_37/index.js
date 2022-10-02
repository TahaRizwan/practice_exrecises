// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
//     by default with a message that reads I love JavaScript. Make a large shirt and a
//     medium shirt with the default message, and a shirt of any size with a different
//     message.

function make_shirt(size = 'large', text = 'I love javascript') {
  console.log(`The size of shirt is "${size}" & the text written is "${text}"`)
}

make_shirt()

make_shirt('Medium', 'Hello World')
