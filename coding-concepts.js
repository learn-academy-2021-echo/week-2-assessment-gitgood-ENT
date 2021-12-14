// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
console.log(cohort.split(""))

// a) Your answer:

// This will log the string "Echo 2021" in the form of an array with each letter being an item(string) in the array
//['E', 'c', 'h', 'o', ' ', '2', '0', '2', '1']


// b) Verify and explain: 

// Verified; it does this because .split is splitting the string at each item in the string because it is splitting at every "", and there is nothing between the quote marks so it splits after every item


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:

// undefined; there is no return in the function

// b) Verify and explain:

// Verified; functions that have no return will return undefined because no value was selected to be output

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer:

// it will log the array of [8, 10, 12, 14, 16]

// b) Verify and explain:

// Verified; .map calls the function for each of the input array values and returns it as an array

// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:

// it will log the array [11, 13, 15]

// b) Verify and explain:

// Verified; .filter calls the function for each item in the input array and returns the items from the function that return true in an array

// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:

// it will log "JavaScript"

// b) Verify and explain:

// Verified; It is logging the value at index 0 in the array that is assigned to the key languages, in the object of myCodingSkills

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:

// it will log Learn [student: 'George', cohort: 'Delta', year: 2021]

// b) Verify and explain:

// Verified(mostly); I thought it would return it as an array, but it returns it as an object, but not an array object. It is creating a new instance of the object class 'Learn' and assigning the student name to "George". The class already has default values for cohort and year so no argument needed to be passed in for those.
