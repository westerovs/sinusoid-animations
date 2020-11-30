// функция y = sin(x), для любого значения x, возвращает значения, находящиеся в диапазоне от -1 до 1.
// В результате, значения, которые мы назначаем cy, будут находиться в диапазоне от 1 до 1
// Операция умножения функции на константу называют масштабированием.
let time = 0;

function runAnimate() {
    const sun = document.querySelector('.sun')
    const sunSize = sun.offsetHeight
    const amplitude = -sunSize * 3;
    time += 0.005;

    sun.style.transform = `translate(
        ${time * 150}px,
        ${Math.sin(time) * amplitude}px
        
        )`


    requestAnimationFrame(runAnimate);
}

runAnimate();
