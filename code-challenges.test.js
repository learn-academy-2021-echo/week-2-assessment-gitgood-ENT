// ASSESSMENT 2: Coding Practical Questions with Jest

const { expect } = require("@jest/globals")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED  ---------- also on the expect block of the test
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"


describe("divByThree", () => {
    it("returns whether a number is divisible by three or not", () => {
        //expect the outcome of the function to equal the desired string
        expect(divByThree(num1)).toEqual("15 is divisible by three")
        expect(divByThree(num2)).toEqual("0 is divisible by three")
        expect(divByThree(num3)).toEqual("-7 is not divisible by three")
    })
})

// got "RED"

// b) Create the function that makes the test pass.

// // declare function divByThree that takes a number as an argument
// const divByThree = (num) => {
//     // if the number is divisible by three its remainder will be 0
//     if (num % 3 === 0) {
//         // and it will return that it is divisible by three
//         return `${num} is divisible by three`
//         // otherwise
//     } else {
//         // return that it is not divisble by three
//         return `${num} is not divisible by three`
//     }
// }

// got red saying that  
//      "● Test suite failed to run
//               Your test suite must contain at least one test."
//
// Checked initial repo on github and found a difference in code on lines 4 and 5. The code that is there was not in the github repo and once commented out allowed my test to return green. Am curious as to why it happened.

// Got green
// Don't know how to refactor, actually, I could use a ternary

const divByThree = (num) => {
// if the number is divisible by three return it is divisble by three otherwise that it is not
  return num % 3 === 0 ? `${num} is divisible by three` : `${num} is not divisible by three`
}

// Green again

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("capFirst", () => {
    it("returns the input word with the first letter capitalized", () => {
        //expect the output to equal the array but with all first letters capitalized
        expect(capFirst(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capFirst(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})


// b) Create the function that makes the test pass.

// create a test for the function of capitalizing first letter of a string
describe("firstUpper", () => {
    it("returns the input string but with the first letter capitalized", () => {
        // the output should be the input but wwith the first letter capitalized
        expect(firstUpper("vegan")).toEqual("Vegan")
        expect(firstUpper("random")).toEqual("Random")
    })

})
//Got red

//create a function that capitalizes the first letter of a string using .toUpperCase
const firstUpper = (string) => {
    //Return the lettter at index(0) capitalized and the rest of the string concatenated 
    return string.charAt(0).toUpperCase() + string.slice(1)
}
//Got Green

// declare the function capFirst that capitalizes the first letter of each string in an array
const capFirst = (array) => {
    // return the input array using .map to iterate over the array and return a new array
    return array.map(firstUpper)
}
//Got green, moving to refactor => is it possible to combine the two functions into one?
//Declare function that takes the array in and then uses map combined with the return from firstUpper to output expected array.
//I think anything I doto combine them will make it longer or harder to read



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

describe ("vowelTester", () => {
    it ("logs the index of the first vowel in a string", () => {
        //expect the argument to result in a number
        expect(vowelTester(vowelTester1)).toEqual(1)
        expect(vowelTester(vowelTester2)).toEqual(0)
        expect(vowelTester(vowelTester3)).toEqual(2)
    })
})
//ReD

// b) Create the function that makes the test pass.

// create a function that determines if a letter is a vowel using a switch statement
//if the input string is a vowel, return true, otherwise return false
const isVowel = (string) => {
    switch (string) {
        case "a":
            return true
            break;
        case "e":
            return true
            break;
        case "i":
            return true
            break;
        case "o":
            return true
            break;
        case "u":
            return true
            break;
        default:
            false
            break;
    }
}

//Declare function vowelTester that takes in a string 
const vowelTester = (string) => {
    //use a for loop to iterate through the string and return the index of the first vowel
    for (let i = 0; i < string.length; i++) {
        //Use an if statement combined with isVowel to determine if the letter at the current index is a Vowel, and if it is log it/return it
        if ((isVowel(string[i]))) {
            console.log(i)
            return i
        }
        
    }
}