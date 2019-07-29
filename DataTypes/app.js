//HOISTING
//COERTION

//data types
//string
//number
//boolean
//undefined
//null
//object -> array, function
//Symbol
/**
 * var a; //undefined
 * 
 * 
 * 
 * 
 * 
 */

// css engine
// html DOM
// js engine //chrome: v8, microsoft: chakra, mozilla: spider monkey
//web apis

// print('235235')
// console.log(a)
// a = 45;
// console.log(a)
// var a = 56;

// function print(arg){
//     console.log('arg', arg)
// }



// const test = [1, 2, 3, 4];
// // let test2 = 4;

// function scope() {
//     return test2
// }
// let test2 = 67;
// console.log(scope())

//OBJECT


// const obj1 = {}
// obj1.name = 'santosh'
// obj1.sing = function sing(voice) {
//     return 'lalala'
// }
// obj1.child = {
//     test: 'asfjhasl'
// }
// obj1.arr = [124,124 ,14,142,1,24,1]

// console.log(obj1)

//Coerting ===, ==

console.log([] == '')


//FUNTCTIONS
function name() { }
() => { }

function addTwo(num, i, arr, x) {
    // console.log(num, i, arr, x)
    return num + 2
}
const addTwo2 = (num) => num + 2
const arr = [2, 3, 5, 7, 8]

const newArr = arr.map((num) => addTwo(num + 2))
// console.log(newArr)
function test(a, b = 6, c, d) {
    console.log(a, b)
}
test(1)

const heros = [
    { firstName: 'tom', lastName: 'Holand', age: 23, gender: 'male' },
    { firstName: 'tony', lastName: 'Stark', age: 34, gender: 'male' },
    { firstName: 'captain', age: 45, gender: 'female' },
    { firstName: 'doctor', lastName: 'strange', age: 56, gender: 'female' },
]
const newArr2 = heros.filter(({ age, gender }) => age >= 33 && gender === 'female')
.map(({firstName, lastName, age, gender}) => ({
    FullName: firstName +' '+ lastName,
    age: age,
    gender: gender
}))

console.log(newArr2)
//[{fullName: 'tom hollana', age: 23, gender: 'ale' }]

