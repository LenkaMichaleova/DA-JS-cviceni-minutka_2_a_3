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


// const nastartujMinutku = (e) => {
//     e.preventDefault();
//     let minutes = Number(document.querySelector('.time-input').value);
//     let seconds = 0;
  
//     const minutyElm = document.querySelector('.alarm__minutes');
//     const sekundyElm = document.querySelector('.alarm__seconds');
//     const alarmElm = document.querySelector('.alarm');
  
//     // pro opakované použití
//     alarmElm.classList.remove('alarm--ring');
  
//     minutyElm.textContent = String(minutes) + ':';
//     sekundyElm.textContent = String(seconds).padStart(2, '0');
  
//     const odpocet = () => {
//       if (minutes >= 0) {
//         if (seconds > 0) {
//           seconds -= 1;
//         } else {
//           minutes -= 1;
//           seconds = 59;
//         }
//         minutyElm.textContent = String(minutes) + ':';
//         sekundyElm.textContent = String(seconds).padStart(2, '0');
//       }
//       if (minutes <= 0 && seconds <= 0) {
//         clearInterval(casovac);
//         alarmElm.classList.add('alarm--ring');
//         document.querySelector('audio').play();
//       }
//     };
  
//     const casovac = setInterval(odpocet, 1000);
//   };
  
//   const formularElm = document.querySelector('.controls');
//   formularElm.addEventListener('submit', nastartujMinutku);