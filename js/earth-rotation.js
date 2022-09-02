let positionOfRotation = 

AFRAME.registerComponent('day', {

    let speed = 1;
    let rotatePos = earth.getAttribute('rotation');

    init: function () {

        let earth= document.getElementById('earth');
    },


    tick: function() {
        console.log('ok')
        
        console.log(rotatePos)
        speed -= 0.1;
        earth.setAttribute('rotation', {
            x:0,
            y:0,
            z: speed
        })

    }


})