// Timing Events Exercise
// 1.
setTimeout(() => {
    const div1 = document.querySelector('#first')
    const p1 = document.createElement('p')
    p1.innerText = 'Hi'
    div1.append(p1)
}, 1000);

// 2.
setTimeout(() => {
    const div2 = document.querySelector('#timeout-nesting')
    const p2 = document.createElement('p')
    p2.innerText = `One`
    div2.append(p2)
    // Nested setTimeout
    setTimeout(() => {
        const p3= document.createElement('p')
        p3.innerText = 'Two'
        div2.append(p3)
    }, 1000);
}, 2000);

 // 3a.
 let count = 0;
 let time = setInterval(() => {
         console.log(count);
         count++;
      }, 1000);

// 3b.
const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    clearInterval(time)
})

// Bonus
// 4.
const countdown = document.querySelector('#countdown')
function startTimer(duration, display){
    let timer = duration,minutes,secomds
    minutes = parseInt(timer/60, 10)
    seconds = parseInt(timer%60, 10)
}

const div3 = document.querySelector('#countdown')
const p3 = document.querySelector('p')
let num = 120
const count2 = setInterval(() => {
    if (num > 0){
        let minutes = Math.floor(num/60)
        let seconds = num - minutes*60
        if (seconds == 0) {
            p3.innerText = `${minutes}:${seconds}0`
        } else if (seconds > 10) {
            p3.innerText = `${minutes}:0${seconds}`

        } else {
            p3.innerText = `${minutes}:${seconds}`
        }
        div3.append(p3)
    } else {
        clearInterval(count2)
        p3.innerText = `Time is Up!!`
        div3.append(p3)
    }
    num--
}, 1000);