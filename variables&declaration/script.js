// var , let , const  line-by-line comparison


// There are different kinds of ways to create a variables 

// var a;
// var a = 12;
// let a;
// let a = 12;
// const a = 132;

// decalartions and initilizations

var a; //declare karna
var a = 13; //declare and initilize

var a = 12;

// jab bhi variable var sa bana ga wo apna ap ko window ma add kara ga
// or yeh var function scope hota ha mtlb yeh var apna ap ko function ma use kar sakta ha
// phir sa redeclare kar sakta ho or same name sa  error nhi aiga let example
 
var a = 14
var a = 15



let a1 = 12; //Uncaught SyntaxError: Identifier 'a' has already been declared
// let a1 = 12;

// agar hum let ma variable same name sa banai ga to hama yeh error mila ga Uncaught SyntaxError: Identifier 'a' has already been declared;

const discount = 10;

// discount = 13; // This thing is not possible to const they give error is :Assignment to constant variable.
console.log(discount)



let num1 = 15;

let num2 = 25;


let totalSum = num1 + num2;
console.log(totalSum);


const firstName = "Hamza ";

const lastName = " Khalid";

const fullName = firstName + lastName;
console.log(fullName);


let marks = 80;

marks += 5

marks -= 10

console.log(marks)


// phala andar wala a print hoga 10 yani block scope wala 

// phir bahar wala a print hoga 5 yani global scope wala 



// is ka jawab hoga 50 because var redeclared ho sakta ha is liya 

const pi = 3.14;
// pi = 22;  // yeh constant ha pi ki value kabhi change nhi hogi that gives error 
console.log(pi); 


{
  let message = "Hello JS";
  console.log(message);

}



let score = 10;

score += 10;

console.log(score)



// tdz temporal dead zone

console.log(g);





let g = 10;


// hoisting impact per type

// hoisting jab variable ko js ma bana ta hn to wo do hiso ma tot jata ha us ka declare part upar chala jata ha or initilization part necha chala jata ha 







 







