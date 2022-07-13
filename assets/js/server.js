let ledHardDrive = document.getElementsByClassName('led-harddrive');
let ledNetwork = document.getElementsByClassName('led-network');
let neonSlot = document.getElementsByClassName('slot-neon-blue');
let timer = Math.random() * (50 - 10) + 10;
let intensityNeonSlot = 0;
let val=0.02;
setInterval(() => {
    let randomIntensity = Math.random() * (1 - 0) + 0;
    let intensity = Math.round(randomIntensity * 100) / 100;

    for (let i=0; i<ledHardDrive.length; i++) {
        ledHardDrive[i].setAttribute('material', {
            emissiveIntensity: intensity
        });
    }
    for (let j=0; j<ledNetwork.length; j++) {
        ledNetwork[j].setAttribute('material', {
            emissiveIntensity: intensity
        });
    }

    
}, timer);


setInterval(() => {
    
    for(i=0; i<neonSlot.length; i++){
        neonSlot[i].setAttribute('material', {
             emissiveIntensity: intensityNeonSlot
        });
    }
    intensityNeonSlot += val;
    if (Math.round(intensityNeonSlot) == 2) {
        val = -val;
    } else if (intensityNeonSlot <= 0) {
        
        val = -val;
    }

}, 30);