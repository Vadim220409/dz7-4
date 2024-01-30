// home work


// ex 1

// let minutes = 60
// let seconds = 0
// const minutesHtml = document.querySelector('.minutes')
// const secondsHtml = document.querySelector('.seconds')

// function Timer(){
//     if(minutes > 0 || seconds > 0){
//         if (seconds === 0){
//             minutes--
//             seconds = 59
//         }
//         else {
//             seconds--
//         }
//         minutesHtml.textContent = minutes
//         secondsHtml.textContent = seconds
//     }
//     if(minutes === 30 && seconds === 0){
//         alert("Залишилося менше половини часу")
//     }

// }

// setInterval(Timer, 1000)





// ex 2


let time = 30
const timer = document.querySelector('.timer')
const btn = document.querySelector('.btn')
const img = document.querySelector('.img')

function Timer(){
    const a = setInterval(() => {
        time--
        timer.textContent = time

        if(time === 10){
            img.classList.add('animated')
        }
        if(time === 0){
            clearInterval(a)
            btn.disabled = false
            timer.textContent = 'Time up'
        }
    }, 1000)
}

btn.addEventListener('click', () => {
    timer.textContent = time
    btn.disabled = true
    img.classList.remove('animated')
    Timer()
})

Timer()