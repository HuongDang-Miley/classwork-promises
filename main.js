// 1.

myFirstPromise = new Promise((resolve, reject) => {
  // Create a boolean variable check and set it to true
  check = true;
  // Create a variable rand and it should calculate a random number between 1 and 10
  rand = Math.floor(Math.random() * 10 + 1)
  // If the check boolean is true it should resolve with the result of a random number between one and ten
  if (check) {
    setTimeout(() => {
      resolve(rand)
    }, 2000)
  }
  // if the check boolean is false, it should reject with a string that says: Cannot computer random number
  else {
    setTimeout(() => {
      reject('Cannot computer random number')
    }, 2000)
  }
})

myFirstPromise
  .then((data) => {
    console.log(`I have my random number ${data} and I will multiply it by 5`)
    return data
  })
  .then((newData) => {
    console.log(`Here is the result of my random number multiplied by 5: ${newData * 5}`)
  })


// // JD solution

// let myFirstPromise = new Promise((resolve, reject) => {
//   let check = false
//   let rand = Math.floor(Math.random() * 10 + 1)
//   setTimeout(() => {
//     if (!check) {
//       reject('Cannot computer random number')
//     }
//     else {
//       resolve(rand)
//     }
//   }, 2000)
// });

// myFirstPromise
//   .then((randomNumber) => {
//     console.log(`I have my random number ${data} and I will multiply it by 5`)
//     let newNumber = randomNumber * 5
//     return newNumber
//   })
//   .then((nextNumber) => {
//     console.log(`Here is the result of my random number multiplied by 5: ${nextNumber * 5}`)
//   })
//   .catch((err) => { console.log(err) })




// 2.
// create a function called getDataPromise that returns a promise
// inside the function create an error variable and set it to boolean false
// create a conditional that handles the rejection if there is an error with a message 'Something went wrong'
// Create a set timeout function that after 4 seconds returns the data (we are mimicking a 3rd party API call)

// consume your promise
// take the result and log the data
// take data and output 'Hello Joe Peters' for each object
// This should be 3 separate steps
// Handle the error in case there is one
// Test by setting your error variable to false then true

let data = [
  { firstName: 'Joe', lastName: 'Peters' },
  { firstName: 'Doug', lastName: 'Lawson' },
  { firstName: 'Sandra', lastName: 'Mathers' },
];

const getDataPromise = function (arr) {
  return new Promise((resolve, reject) => {
    const error = false
    setTimeout(() => {
      if (error) {
        reject('Something went wrong')
      }
      else {
        resolve(arr)
      }
    }, 4000)
  })
}

getDataPromise(data)
  .then((data) => {
    for (const obj of data) {
      console.log(`Hello ${obj.firstName} ${obj.lastName}`)
    }
  })
  .catch((err) => {
    console.log(`${err}: There's an error`)
  })

