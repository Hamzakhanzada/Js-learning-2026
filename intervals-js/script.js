// setTimeout run one time
let st = setTimeout(function () {
    console.log("Hello World")
}, 2000);

clearTimeout(st)

// setInterval run again and again
let cl = setInterval(function () {
    console.log("Hello World")
}, 2000)


clearInterval(cl)




