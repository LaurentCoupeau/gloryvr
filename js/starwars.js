

// declanchement de starwars
AFRAME.registerComponent('starwars', {

	init: function () {
        
        let button = document.getElementById('button-starwars');
        let trajectory = document.getElementById('ship-trajectory');
        let gun = document.getElementById('gunShipOne');
        let posInit = -200;
        let posFinal = 400;
        let speed = 0.5;
        let stateWars = false;

        function shipsMove() {

            if (stateWars == false) {


                let time = setInterval(() => {
                    
                    trajectory.setAttribute('position', {
                        x:trajectory.object3D.position.x,
                        y:trajectory.object3D.position.y,
                        z:trajectory.object3D.position.z + speed
                    })

                    if (trajectory.object3D.position.z > posFinal) {
                        speed = 0;
                        trajectory.setAttribute('position', {
                            x:trajectory.object3D.position.x,
                            y:trajectory.object3D.position.y,
                            z: posInit
                        });
                        stateWars = true;
                        clearInterval(time)
                    }    

                    stateWars = true;
                    

                }, 6);
                        
            } else {
                console.log('attend')
            }
                    
        }

        function shot() {

            if (! stateWars) {
                
                setInterval(() => {

                    //on instancie un tir (cylindre)
                    let shot = document.createElement('a-cylinder');
                    // taille du tir
                    shot.setAttribute('geometry', {
                        height:0.5,
                        radius: 0.09
                    });
                    // position du tir
                    shot.setAttribute('position', {
                        x: 0,
                        y: 0,
                        z: 0
                    })
                    // couleur du tir
                    shot.setAttribute('emissive', 'red');
                    shot.setAttribute('emissive-intensity', 1);
                    //les lasers sortent du gun
                    gun.append(shot);
                    // bruit du son        
                    gun.components.sound.playSound();


                    moveShot(shot);

                    console.log(gun.childNodes.length)
                    clearShots()
                    
                }, 120);
            } else {
                gun.pop();
            }

        }

        
        
        //faire bouger les projectiles
        function moveShot(el) {

            setInterval(() => { 

                    el.object3D.position.y += 2;
            
            }, 200); 
        }

        function clearShots() {
             for (let i=0;i<gun.childNodes.length; i++) {
                if (gun.childNodes.length > 12) {
                    gun.removeChild(gun.childNodes[i]);
                }
             }
        }

     
        button.addEventListener('click', function() {
            shipsMove();
            shot()


	    })
}
})