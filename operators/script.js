// Operators
// Arthmetic,

// +, -, *, /, **, %  Arthmetic Operators


//  Logical,
//  &&, ||, !

 12>15 && 12>2 //= false because both condition are true then the answers is true and if one condtion is false the answers is false

12 > 16 || 12 > 1 // so in this case one condition is true the answers is true 

 !12  // not operators how it works basically it works value is true it converts to the false and value is false the convert true

//  Comparison,
// =
// ==  not strict comparsion Operator
// === strict comparsion Operator
// !=  not strict comparsion Operator
// !== strict comparsion Operator
// >=
// <=
// >
// <

//  = means value assing karna Assignment operator hota ha = 

 12 == 13; // false
 "12" == 13 // true yeh type check nhi krta ha 

 "12" === 13 // false yeh strict operator hota h yeh type bhi check krta h

 12 != 13  // yeh operator dheak ta ha ka dono values barabar nhi honi chai ha agar hoi to yeh false return kar dega agar barabar nhi hoi like 12 or 13 ek dosra ka barabar nh ha to yeh true return kar dega 

//  Assignment,
let a = 12;
a += 5 // update the value and store again to the a
//  unary,

// single value like + , - , typeof, ++ , --

// how to convert a string to a number short trick method just add starting +"18" opertor its convert to a number

let a6 = 3;
++a6 //preincrement first value add
a6++ //postincrement before value add

//  ternary
//?:

"hamza" == 19 ? console.log("true") : console.log("false")

let temp = 35;

if (!(temp < 30)) {
    console.log("Hot") // true
} else {
    console.log("pleasant")
}


let score = 70;

let grade = score >= 90 ? console.log("A") : score >= 65 ? console.log("B") : score>=50 ? console.log("c"): "fail"

let points = 120;

let status1 = points > 100 ? "Gole" : points > 50 ? "Silver" : "Bronze"
console.log(status1)

let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log(access)