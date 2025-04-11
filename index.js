'use strict';

const time = document.querySelector(".time-input")

// document.querySelector(".controls").addEventListener("submit", () => {
document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault()    
    document.querySelector(".alarm__seconds").textContent = time.value.padStart(2, "0")

    const timerId = setInterval(() =>{
        time.value -= 1
        document.querySelector(".alarm__seconds").textContent = time.value.padStart(2, "0")
    },1000)

    const clearTimer = () => {
        clearInterval(timerId)
        new Audio("assets/alarm.mp3").play()
    }

    setTimeout(clearTimer, time.value * 1000)
})