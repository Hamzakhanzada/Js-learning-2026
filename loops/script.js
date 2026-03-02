// Loops

// kaha sa jana h -> kaha tak jana h -> kaise jana ha
// for this case use for loop
//  1 to 50
// (start end change to pharenthesis)
// for(let i = 1; i < 51; i++) {
//     console.log(i)
// }


// kaha sa jana h -> kab ruk na h -> kaise jana h
// for this case use while loop
// like  hama  pata nhi  hota  wo  cheez  kab  mila  gi  us  case  ma  while  loop  laga  ga

// start
// let i = 1
// while(i < 32) {
//     console.log(i)
//    i++
// }

// do while loop

// for (let i = 0; i < 51; i++) {
// console.log(i);
// if  (i == 40 ) {
//     break
// }    
// }
// for (let i = 0; i < 51; i++) {
// if (i == 40 ) {
//     continue
// }    
// console.log(i);
// }



// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// for (let i = 1; i < 20; i++) {
// if (i % 2 === 0) {
//     console.log(i)
// }    
// }


// let k = 10
//  while (k > 0) {

//     console.log(k)
//     k --
//  }
let h = 1
 while (h < 16) {
   h ++
    if (h % 2 == 1) {
            console.log(h)
    }
 }

 for(let i = 1; i < 11; i++) {
    console.log(`5 x ${i} = ${5*i}`)
 }
let totalSum = 0;
 for (let i = 1; i < 101; i++) {
    totalSum += i
 }
 console.log(totalSum)
 for (let i = 1; i < 51; i++) {
    if (i% 3 == 0) {
        console.log(i)
    }    
 }

for (let i = 1; i < 101; i++) {
if (i % 3 == 0 && i % 5 == 0) {

    console.log(i)
}    
 }


 for  (let i = 1; i < 101; i++) {
    console.log(i);
    if (i % 7 == 0) {
        break;
    }
 }

for (let i = 1; i < 21; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i)
}


let count = 0;
for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) {

     count++;
    }    
}
console.log(count);


for(let i = 1; i < 16; i++) {
    console.log(i)
}

for(let i = 15; i > 0; i--) {
    console.log(i)
}


for (let i = 1; i < 30; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
}

let sum = 0;

for (let i = 1; i < 51; i++) {
    sum += i
}

console.log(sum)

for (let i = 1; i < 11; i++) {
    console.log(`5 x ${i} = ${i*5} `    
)
}

for (let i = 1; i < 101; i++) {
    
if (i % 5 === 0) {
    console.log(i)
}
}

for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 2 === 1) {
        console.log(i)
    }
    
}

    
for (let i = 1; i < 51; i++) {
    if (i === 25) {
        break
    }
        console.log(i)

}

for (let i = 1; i < 21; i++) {
if(i % 4 === 0){
    continue
}    
    console.log(i)

}
