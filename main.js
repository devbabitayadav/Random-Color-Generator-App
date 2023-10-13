let button = document.getElementById("btn")
let colorCode = document.getElementById("color-code")
let body = document.querySelector("body")


const getcolor = () => {

    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomNumber, randomCode)
    body.style.backgroundColor = randomCode;
    colorCode.innerText = randomCode;
    navigator.clipboard.writeText(randomCode)


}


// eventcall
button.addEventListener("click", getcolor)

// // initial call
// getcolor();