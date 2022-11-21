const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = document.querySelector('p')
let colors = ['tomato', 'lime', 'royalblue', 'gold', 'white']
let fontSize = 20
let i = 0;

function textEnlarge () {
    fontSize += 5;
    p.style.fontSize = fontSize + 'px';
}

function textReduce () {
    fontSize -= 5;
    p.style.fontSize = fontSize + 'px';
}

function colorCycle () {
    if (i < colors.length) {
        
        p.style.color = colors[i];
        console.log(colors[i]);
        i++
    } else {
        i = 0;
    }
}

sizeUp.addEventListener('click', textEnlarge)
sizeDown.addEventListener('click', textReduce)
color.addEventListener('click', colorCycle)