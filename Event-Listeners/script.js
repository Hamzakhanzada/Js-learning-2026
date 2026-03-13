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