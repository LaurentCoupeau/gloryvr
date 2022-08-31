let earth= document.getElementById('earth');
let speed = 0.1;
setInterval(() => {
    
    let rotatePos = earth.getAttribute('rotation');
    console.log(rotatePos)
    speed -= 1;
    earth.setAttribute('rotation', {
        x:0,
        y:0,
        z: speed
    })

}, 60);