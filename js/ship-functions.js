let gun = document.getElementById('gunShipOne');
let ship = document.querySelector('.ship');
let scene = document.querySelector('#scene');
// I think I heard a shot !!!
let orbit = document.querySelector('#orbit');

let salve=[];


let posXInit = 0;
let posYInit = 0;
let posZInit = 0;


let xDir = 0;
let yDir = 0;
let zDir = 0;

let count=0;
let speed = 0.5;

// fonction pour faire avancer un vaisseau
function moveShip (el) {
    setInterval(() => {
            el.object3D.rotation.y += 0.01;
    }, 12);
}

//appuyer pour faire feu
function Shoot(){

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
            x: posXInit,
            y: posYInit,
            z: posZInit
        })
        // couleur du tir
        shot.setAttribute('emissive', 'red');
        shot.setAttribute('emissive-intensity', 1);
        //les lasers sortent du gun
        gun.append(shot);
        // bruit du son        
        gun.components.sound.playSound();
        //les lasers bougent
        moveShot(shot);
        // soundFire.play(); 
        
        setTimeout(() => {
            shot.parentNode.removeChild(shot);
            
        }, 1000);

    }, 200);
  
}


//faire bouger les projectiles
function moveShot(el) {
    setInterval(() => { el.object3D.position.y += 0.5; }, 30); 
}


function update() {    
    moveShip(orbit);
    Shoot();

    
}

update();