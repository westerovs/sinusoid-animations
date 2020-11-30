const box = document.querySelector('.box')
const titles = document.querySelectorAll('.title')

let posX = 0
let posY = 0
let radius = 150
let time = 0

function animate() {
    time += 0.009
    posX = Math.sin(time)
    posY = Math.cos(time)

    box.style.transform = `translate(${posX * radius}px, ${posY * radius}px)`
    box.style.boxShadow = `
        ${Math.sin(time) * 5}px
        ${Math.cos(time) * 5}px
        10px tomato`

    box.style.backgroundImage = `linear-gradient(
        ${-posY * -radius}deg, black, gray 1%, black
    )`

    titles.forEach(item => {
        item.style.transform = `translate(${-posX * radius}px, ${-posY * radius}px)`
    })

    requestAnimationFrame(animate)
}

animate()















