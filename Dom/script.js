// how to select Element
// const h1 =  document.querySelector("h1");
// h1.textContent = "How are You Hamza";

// // how to set attribute
// const a = document.querySelector("a");
// console.log(a);
// a.href = "https//:www.google.com";

// const img = document.querySelector("img");
// img.setAttribute("alt","broken img")

// // how to get attribute
// console.log(a.getAttribute("href"))

// a.removeAttribute("href")

// // how to create Element using js dom

// const h2 = document.createElement("h2");
// h2.textContent = "Hey I am Khanzada";

// document.body.append(h2);
// h1.remove()
// // how to add styling using js

// h2.classList.add("h2-styling");
// h2.classList.toggle("href");

// const lis = document.querySelectorAll("li");
// lis.forEach((val)=>{
//     console.log(val.textContent)
// })

// const ul = document.querySelector("ul")
// const newLi = document.createElement("li");

// newLi.textContent = "New Task";

// ul.appendChild(newLi);


// const img1 = document.createElement("img");
// img1.setAttribute("src","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADEQAQACAQIDBwIDCQAAAAAAAAABAgMEESExUQUSIjJBYXEjUhMUwRUzYoGRoaKx0f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APoIDo5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9232z/QGAAAAAAAAAAAAAAAAAAAAASdHpLam2/lxxzt/wABqw4cme/dx13n/SywdmY67Tmnvz0jhCZixUw0imOu1Ye2dakeaY6Y42x0rX4jZ73YEV4yYseSPqUrb5hEzdmYr7zimaT05wnAKDUaXNp/PXw/dHGGl0s8Y2nkr9X2bW299P4bfZ6T8NSs2KoZtE0tNbRMTHOJFRgAAABmtbXtFaxMzPpEMLzQaeuHBWdvHaN7T+iWrIq/yOp23/Bnb5homJrMxaJiY5xLpEPtPT1yYZyxHjpG+/WDVxTAKyAAA94cVs2WuOnOf7A26PTW1OTblSPNK8pSuOkUpG1Y5Q84MVcGKMdOUevV7ZtakAEUAAAAAA2iecQwyA5oBtgAAdDp7xkwUvXlNXPJGk1l9NO0R3qTzrKWLKvWjXXimkyzPrXux/NG/auPb91ffpwQdVqsmptE34VjlWPRJFtaAGmQABd9n6b8vi3tH1Lc/b2Q+y9N37/jXjw1nw+8rZm1qQARQAAAAAAAAAFVbsrJHky1n5jZFzaXPh43xzt1jjC/F1Mc0LvUaDDm3msdy/WsfoqtRpsunttkrw9LRyldTGkBUAAAAG3TYbZ80Y6+vOekNS80Gm/L4vFH1Lcbe3slqyJFKVx0ilI2rEbQyDLQAAAAAAAAAAAAAAxatb1mt4iazziWQFRrOz7Yt74d7U9Y9YQXSq/XaCL75MEbW9a9fhZUsVQTG07TwkaZAS9Bo51Fu/eNsUf5ewN3Zel70xnyRwjyR191oREREREbRHKBhuAAAAAAAAAAAAAAAAAAAAIur0VNR4qz3MnXr8oE9m6iJ2iKz7xZci6mK7T9mRExbPaLfw15LGIiIiIiIiOUQCKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z");

// const div = document.querySelector("div");
// div.prepend(img1)

// img1.classList.add("img")


// const h1 = document.querySelector("h1");
// h1.textContent = "Dom Seekh Liya";

// const btn = document.querySelector("button");
// btn.style.backgroundColor = "Red";


// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// li.textContent = "Grapes"

// ul.appendChild(li);

// const list = document.querySelectorAll("li");

// list.forEach(e => {
//     console.log(e.textContent)
// });

// const input = document.querySelector("input");
// input.value = "Hamza";

const h1 = document.querySelector("h1");
const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const resetBtn = document.querySelector("#resetBtn");

let count = 0
incrementBtn.addEventListener("click",function () {
    count ++;
    h1.textContent = count
})

decrementBtn.addEventListener('click',function () {
    count --
    h1.textContent = count
})

resetBtn.addEventListener("click",function () {
    count = 0;
    h1.textContent = count
})


const input = document.querySelector("input");
const p = document.querySelector("p")
input.addEventListener("input",function (e) {
    p.textContent = input.value
})

