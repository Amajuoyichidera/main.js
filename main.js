/**
 * THINGS TO KNOW BEFORE YOU USE REACT
 * Use of functions - function expressions - arrow functions (*)
 * Template Literals (*)
 * Conditional / Logical operators - Ternary operators (*)
 * Array methods
 * Object Tricks: Property Shorthand, Destructuring, Spread Operator
 * Promises + Async/Await Syntax
 * ES Modules + Import / Export syntax
 */

// Functions
// Function Declaration
// function sayMyName () {
//     alert('Micheal')
// }

// // Function Expression 
// const sayMyNameAgain = function () {
//     alert('Micheal')
// }

// // Arrow Functions
// const sayMyNameLastTime = () => {
//     alert('Micheal')
// }


// sayMyName()
// sayMyNameAgain()
// sayMyNameLastTime()

// Parameterized Functions
function square (x) {
    return x * x;
}

function createPerson (fname, lname, gender) {
    let x = new Date()
    return {
        firstName: fname,
        lastName: lname,
        gender: gender,
        time: `${x.getHours()}:${x.getMinutes()}`
    }
}

function split (s) {
    s += ' '
    let word = ''
    let split = []

    for (let index = 0; index <= s.length; index++) {
        if (s[index] === ' ') {
            split.push(word)
            word = ''
        } else {
            word += s[index]
        }
    }

    return split
}

function breakSentence (sentence) {
    // return split(sentence)
    return sentence.split(' ')
}

// let squareOf20 = square(20)
// let squareOf30 = square(30)
// console.log(squareOf20);
// console.log(squareOf30);

// let person1 = createPerson('Micheal', 'Eze')
// let person2 = createPerson('Jon', 'Snow')
// console.log(person1);
// console.log(person2);

// Logical && ternary operators
// let yourName = prompt('Enter Your name')
// let statement = (yourName === 'hancock') ? 'Hancock' : 'Stranger'

// yourName === 'hancock' && (document.querySelector('h1').innerText = 'Hello Hancock')

// if (yourName === 'hancock') {
//     document.querySelector('h1').innerText = 'Hello Hancock'
// }
// console.log();