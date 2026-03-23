// how to add eventListeners 
function click () {
    p.style.color = "green";
} 
const p = document.querySelector("p");
p.addEventListener('click', click);

// how to remove eventListeners
p.removeEventListener('click',click);

const input = document.querySelector("input")
input.addEventListener('input',function (e) {
    if (e.data !== null) {
        console.log(e.data)
    }
})

const sl = document.querySelector("select");
const h1 = document.querySelector("h1")
sl.addEventListener("change",function (det) {
    h1.textContent = `Your Car is ${det.target.value}`
})

const h4 = document.querySelector("h4");
window.addEventListener("keydown",function (dets) {
    if (dets.key === " ") {
        h4.textContent = "SPC"
    } else {
        h4.textContent = dets.key
    }
})

const btn = document.querySelector(".btn");
const inp = document.querySelector(".inp")

btn.addEventListener("click",function () {
    inp.click()
})


inp.addEventListener("change",function (dets) {
    const file = dets.target.files[0];
    if (file) {
        btn.textContent = file.name
    }
})


const abcd = document.querySelector(".abcd");
abcd.addEventListener("mouseover",function () {
    abcd.style.backgroundColor = "Yellow"
})
abcd.addEventListener("mouseout",function () {
    abcd.style.backgroundColor = "red"
})


// events Bubbling 


const ul = document.querySelector("ul");

ul.addEventListener("click",function (dets) {
    dets.target.classList.toggle("lt");
})


