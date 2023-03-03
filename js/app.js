const hex = 123456789
const rando = Math.random(1, 1000)
const randoStr = Math.random(1, hex)
const decrease = document.querySelector(".decrease")
const increase = document.querySelector(".increase")
const calculator = document.querySelector("span")
let output = 1
const hello = document.querySelector("[data-action='greet']")
const message = document.querySelector(".message")
const app = document.querySelector("body")
const changer = document.querySelector(".changer")
const discoCurrent = document.querySelector(".disco-current")
const reviewCode = document.querySelector("code")

function componentDidMount(){
    message.innerHTML = "Hello, world!"
    app.style.backgroundColor = genRandomHex()
    discoCurrent.innerHTML = genRandomHex()
    whatIsTheCode()
}

componentDidMount()

hello.addEventListener("click", (e) => {
    console.log("hello")
    if(message.innerHTML.includes("Hello")){
        message.innerHTML = "Thanks for your attention."
    } else {
        message.innerHTML = "Hello, world!"
    }
})

increase.addEventListener("click", (event) => {
    console.log(output)
    calculator.innerHTML = output++
})

decrease.addEventListener("click", (event) => {
    console.log(output)
    calculator.innerHTML = output--
})

function genRandomHex(){
    let hex = (Math.random() * 0xfffff * 1000000).toString(16)
    return `#${hex.slice(0, 6)}`
}

function changeBackground(){
    app.style.backgroundColor = genRandomHex()
    discoCurrent.innerHTML = genRandomHex()
}

changer.addEventListener("click", changeBackground)

function whatIsTheCode(){
    reviewCode.innerHTML = `
        <pre>function changeBackground(){</pre>
                    <pre>app.style.backgroundColor = genRandomHex()</pre>
                    <pre>discoCurrent.innerHTML = genRandomHex()</pre>
        <pre>}</pre>
    `;
}

function randint(){
    let rand = Math.floor((Math.random() * 10000)) + 1
    console.log(rand)
}

randint()
