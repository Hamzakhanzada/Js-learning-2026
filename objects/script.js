let obj = {
    name: "Hamza",
    age: 19,
    caste: "Khanzada",
    isMarried: false,
}

for (const key in obj) {
    console.log(key,obj[key])
    
    
}

// const product = {
//   id: 101,
//   name: "Nike Shoes",
//   price: 5000,
//   details: {
//     color: "Black",
//     size: 42,
//     inStock: true
//   },
//   greet: function () {
//     console.log(`${this.name} color is  ${this.details.color} inStock ${this.details.inStock}`)
//   }
// };
// const {name,price} = product;

// console.log(name);
// console.log(price)

// const {color,inStock} = product.details

// console.log(color);
// console.log(inStock)

// product.greet()



const orders = [
  { id: 1, item: "Pizza",   price: 800,  qty: 2 },
  { id: 2, item: "Burger",  price: 400,  qty: 3 },
  { id: 3, item: "Fries",   price: 200,  qty: 5 },
];

const caluculateTotal = (price,qty) => {
const total =  price * qty
return total
}

let finalTotal = orders.map((order)=>{
return caluculateTotal(order.price,order.qty)
})

console.log(finalTotal)

const user = {
  name: "Hamza",
  age: 20,
  isLoggedIn: true,
  balance: 5000
};

const cartTotal = 3000;


// Yeh karo — ternary use karo:

// Check karo — user logged in hai? Print karo "Welcome Hamza" ya "Please Login"
// Check karo — balance cartTotal se zyada hai? Print karo "Order Place!" ya "Balance kam hai!"
// Check karo — age 18 se upar hai aur loggedIn bhi hai? Print karo "Access Granted" ya "Access Denied"

 console.log(user.isLoggedIn?"Welcome !" : "Please Login");
 console.log(user.balance > cartTotal? "Order Place !": "Balance kam hai!");
 console.log(user.age > 18 && user.isLoggedIn?"Access Granted":"Access Denied");


 const product = {
  name: "Nike Shoes",
  price: 5000,
  inStock: true,
  userLoggedIn: true,
  userBalance: 3000
};

// Yeh karo:

// Agar inStock nahi hai → "Out of Stock"
// Agar userLoggedIn nahi hai → "Please Login"
// Agar userBalance kam hai price se → "Balance Kam Hai"
// Yeh sab theek hai toh → "Order Place Ho Gaya!"

if (product.inStock) {
    console.log("Out of Stock")
} else if (product.userLoggedIn) {
    console.log("please Login")
} else if (product.userBalance <= product.price) {
console.log("Balance Kam Hai!")
} else {
    console.log("Order Place Ho Gaya!")
} 
// const students = [
//   { name: "Hamza", marks: 85 },
//   { name: "Ali",   marks: 45 },
//   { name: "Sara",  marks: 72 },
//   { name: "Umar",  marks: 30 },
// ];

// for (const student of students) {
//     if (student.marks > 60) {
//         console.log(`${student.name} Pass`)
//     } else {
//         console.log(`${student.name} Fail`)
//     }
// }



const students = [
  { id: 1, name: "Hamza", marks: 85, fee: 5000, paid: true },
  { id: 2, name: "Ali",   marks: 45, fee: 8000, paid: false },
  { id: 3, name: "Sara",  marks: 72, fee: 5000, paid: true },
  { id: 4, name: "Umar",  marks: 30, fee: 6000, paid: false },
  { id: 5, name: "Zara",  marks: 91, fee: 5000, paid: true },
];

const allStudentPass = students.filter((val)=> {
    if (val.marks > 60) {
        return val
    }
})

console.log(allStudentPass);


const allStudent = students.map((name)=>{
if (name.marks > 60)   return name.name


})

console.log(allStudent)


const allStudentId = students.find((f)=>{
 if (f.id === 3) return f.id
 
})

console.log(allStudentId)


const paidAllStudentsFee = students.reduce((acc,val)=>{
    if (val.paid) {
        return acc + val.fee
    }
    return acc
},0)

console.log(paidAllStudentsFee)

const anyStudent = students.some((any)=>{
if (any.marks > 90)  return any.name

})
console.log(anyStudent)