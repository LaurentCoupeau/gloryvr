let panel = document.getElementById('panels');
let borders = document.getElementById('borders');
let speed = 0.05;

setInterval(() => {

    let rotPanel = panel.getAttribute('rotation');
    console.log(rotPanel)
    let rotBorders = borders.getAttribute('rotation');

    panel.setAttribute('rotation', {
        x:0,
        y:rotPanel['y'] - speed,
        z: 0
    })
    borders.setAttribute('rotation', {
        x:0,
        y:rotBorders['y'] + speed,
        z: 0
    })
    
}, 6);