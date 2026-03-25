const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const form = document.querySelector("form");

form.addEventListener("submit",function (dets) {
    dets.preventDefault()

    document.querySelector("#emailerror").textContent = "";
    document.querySelector("#passerror").textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    const emailans =  emailRegex.test(email.value);
    const passans =  passwordRegex.test(pass.value);
let isValid = true;
    if (!emailans) {
        document.querySelector("#emailerror").textContent = "Email was incorrect";
        document.querySelector("#emailerror").style.display = "initial";  
        isValid = false
    } 

    if (!passans) {
        document.querySelector("#passerror").textContent = "Password was incorrect";
        document.querySelector("#passerror").style.display = "initial";
        isValid = false

    }

    if (isValid) {
        document.querySelector(".errorMessage").textContent = "everyThing Is Correct"
        document.querySelector(".errorMessage").style.display = "initial"
    }
})