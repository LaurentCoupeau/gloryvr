
let stateSaber = false;
let stateLaser = false;

AFRAME.registerComponent('open-saber', {


	init: function () {

        let button = document.getElementById('button-saber');
        let laser = document.getElementById('laserOfSaber');
        let sabOn = document.getElementById('sabon');
        let sabOff = document.getElementById('saboff');

        let speed = 0.01;
        let yPosClose= 0;
        let yPosOpen= 0.6;
        let yHeightClose=0;
        let yHeightOpen= 0.3;


        button.addEventListener('click', function() {

                if (stateSaber) {

                        sabOff.play();

                        laser.setAttribute('geometry', 'height', 0);
                        laser.setAttribute('position', {
                                x:0,
                                y:0,
                                z:0
                        });

                        stateSaber = false;
                        
                } else {

                        sabOn.play();


                                let timing =  setInterval(() => {

                                        if (stateLaser == false) {
                                        
                                        laser.setAttribute('geometry', 'height', yHeightClose += speed);
                                        laser.setAttribute('position', {
                                                x:0,
                                                y:0.3,
                                                z:0
                                        });

                                        } else {

                                                clearInterval(timing);
                                        }
                                }, 60);
                         


                        stateSaber = true;

                }

        })


    }

})