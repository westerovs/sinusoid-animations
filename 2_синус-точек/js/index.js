// функция y = sin(x), для любого значения x, возвращает значения, находящиеся в диапазоне от -1 до 1.
// В результате, значения, которые мы назначаем cy, будут находиться в диапазоне от 1 до 1
// Операция умножения функции на константу называют масштабированием.
let currentAnimationTime = 0;

function runAnimate() {
    let circles = document.querySelectorAll('.circle')
    const amplitude = 50;
    currentAnimationTime += 0.05;

    circles.forEach((circle, index) => {

        circle.style.transform = `
            translateY(${Math.cos(currentAnimationTime - index) * amplitude}px)`


        // для прыжков по кругу
        // circle.style.transform = `
        //     translate(${Math.cos(currentAnimationTime - index) * amplitude}px,
        //               ${Math.sin(currentAnimationTime - index) * amplitude}px
        //     )
        //      scale(${Math.sin(currentAnimationTime - index) * 1.5})
        //     `

        circle.style.boxShadow = `
            ${Math.sin(currentAnimationTime - index) * amplitude / 2}px
            ${Math.sin(currentAnimationTime - index) * amplitude / 2}px
            ${Math.sin(currentAnimationTime - index) * amplitude / 2}px
            black`
    })

    requestAnimationFrame(runAnimate);
}

runAnimate();
