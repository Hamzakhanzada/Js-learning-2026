
// Function Declaration
function myName(name) {
    console.log(`My name is ${name}`)
}
// myName("Hamza")


// function expression

// let myName = function () {
//     console.log("Hamza")
// }

// myName()

// fat arrow function

let fnc = ()=> {
console.log("Fat arrow function")
}

fnc()


function sayHello() {
    console.log("hello")
}
sayHello()

function printName(name) {
    console.log(`Hello ${name}`)
}

printName("Hamza")


function totalSum(num1,num2) {
    console.log(num1+num2)
}
totalSum(1,5)

totalSum();


function square(num1) {
    console.log(num1*num1)
}

square(4)


function printNumbers(val1,val2) {
    for (let i = val1; i < val2;  i++) {
        console.log(i)        
    }
}

printNumbers(1,11)


function printTable(num1,num2,num3) {
    for (let i = num1; i < num2; i++) {
    console.log(`${num3} X ${i} = ${i*num3}`)        
    }
}

printTable(1,11,5)
printTable(1,11,7)

function checkEvenOrOdd(num1) {
    if (num1 % 2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
}

checkEvenOrOdd(4)

// function sumTillN(n) {
//     for (let i = 1; i < n; i++) {
//         n = n + i

//     }
// }
// sumTillN(4)


// rest operator

function abc(a,b,c,...val) {
    console.log(a,b,c,val)
}

abc(1,2,3,4,5,6,7)

// return statement 
// jaha sa ay value ai ha wapis wahi bhaj denga


// first class fnc => functions ko value ki tarha treat kar sakta hn


function abc(val) {
    val()
}


abc(function () {
    console.log("hey")
})


// high order function => hof wo function hota h jo ka return kara ek function yeh phir accept kara ek function apna parameter ma


// pure vs impure funcitons
// aisa function jo bahar ki value ko badal da wo impure funciton ha


// closures => ek function jo return kara ek or function or return hona wala fnc hameshah use kara ga parent fnc ka koi variable

function ab() {
    let a = 13
    return function () {
        console.log(a)
    }
}


// lexical scoping 

function abc() {
    let a = 23
    function def() {
        let b = 34
        function ghi() {
            let c = 45
        }
    }
}


// iffe 

(function () {
    
})()


// hoisting difference b/w declartion and experisson
 
