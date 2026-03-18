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