// How to create a Array
let arr = [1,2,3,4,5];

// how to access a value form array
 arr[0]; // array indexing start from zero;

//  how to change the value from array 

arr [3] = 19;


// Push Method add a value in the array from the end
// push kia karta ha end ma value add kar deta ha 

arr.push(800);

// Pop Method remove a value from array in the end
// pop end ma sa value hata deta ha

arr.pop();

// shift Method remove a value from array in the starting
// shift kia karta ha starting sa value hata deta ha array ma sa

arr.shift()

// unshift kia karta ha wo value add kar deta ha starting ma

arr.unshift(79)

// splice method yeh bech sa vlaue ko remove krta ha mtlb kaha sa kaha tak hata ni ha is ma hum do values ko pass krta ha like konsi index sa kitna number hata na h


arr.splice(3,2);

// slice kia karta ha wo hamara real array ko change nhi krta ha balka ek copy bana kr deta ha jis ko hum ek new variable m store kr sakta hn or is ma do value pass hoti hn kaha sa hata na ha like agar hum na is ko bola ka 0 5 tak hatao to 1234 jawab aiga hamara pass

arr.slice(0,4);

// reverse mehtod yeh array ko ulta kr deta ha 

arr.reverse()

// sort method yeh kia karta ha yeh array ko arrange karta ha like aagar arrya ma value sahi nhi h like khai choti vlaues hn or khai bari values hn or us ka sath sath yeh ek function bhi accept karta ha 


const array = [89,14,7,99,5,30];

array.sort(function (a,b) {
    // return a - b  // ab kia hoga jitni bhi choti values hn wo ai gi line by line phir end ma sab sa bari value hogi
    // agar ma is ko b - a kardo ga to ab bari values sa start hoga or end ma sab sa choti values hogi
    return b-a
})


let studentsRollNum = [10,20,30,40,50];
// foreach kia karta ha array ka har Element ka liya chal ta h line by line
// yani for each ka andar agar kuch code likha howa ha to wo 10 ka liya aalag chala ga 20 ka liya alag chala ga 
studentsRollNum.forEach(function (val) {
    console.log(val+5)
})


// map jab use karna ha jab ap ko ek new array banana ha or us ma utna hi elements ai ga jitna purana ma ha or map dhikta hi mind ma ek blank array create kar liya karo


let newArr = studentsRollNum.map(function () {
    return 12 // to kia hoga ek new array ban jai ga jis ma 12 hoga 5 bar because hamara purana arrya ma 5 elements hn  or is ka result dheak na k liya hama is ko ek new variable ma store karna hoga 
})

console.log(newArr);

// filter kia karta ha filter bhi ek new array bana ta h but purana arrays ma sa kuch ko lata h or kuch ko chor deta h arrays ma

let array1 = [1,2,3,4,5,6,7,8];

let newarray1 = array1.filter(function (val) {

    if (val > 4)  return true;
    
});

console.log(newarray1);


// reduce array sa ek value banana ni ha jab reduce laga ga

let arrRedcue = [1,2,3,4,5];

let ans = arrRedcue.reduce(function (acc,val) {
    return acc + val;
},0);


// Destructuring and speard operator
let deStructuring = [1,2,3,4,5];

let [a,b,,d] = deStructuring;

let ar1 = [1,2,3,4,5,6,7,8,9];

let ar2 = [...ar1];

let fruites = ["Apple", "Banana","Peach"];

fruites[1];

fruites.push("Mango");
fruites.unshift("Pinapple");

fruites[2] = "kiwi";
fruites.pop();