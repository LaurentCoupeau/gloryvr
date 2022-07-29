// video pub de glorydev




AFRAME.registerComponent('open-sas', {

	init: function () {

        let yState = -1;
        let zState = 0;

        let stateSas = false;
        let countUp = 0;
        let countDown = 20;

        let sas = document.querySelector('#sas');
        let controlSas = document.querySelector('#control-sas');

        let sasSound = document.createElement('audio');
        sasSound.src='assets/sounds/sas.mp3';

        function moveDoor(){
            sasSound.play();

            if (stateSas) {                    
                
                let myInterval = setInterval(() => {
                    if ( countDown < 20 ) {
                        yState -= 0.1;
                        zState = -0.02;
                        sas.setAttribute('position', {
                            x: 0,
                            y:yState,
                            z:zState
                        });
                        countUp -= 1;
                        countDown +=1;
                        console.log('ça descend') ;
                        
                    } else {
                        clearInterval(myInterval);
                        sas.setAttribute('position', {
                            x: 0,
                            y:-1,
                            z:0
                        });
                        console.log('ça a fini de descendre');
                    }
                }, 60);                    

            } else {

                let myInterval = setInterval(() => {

                    if (countUp < 20) {

                        yState += 0.1;
                        zState = -0.02;
                        sas.setAttribute('position', {
                            x: 0,
                            y:yState,
                            z:zState
                        });
                        countUp += 1;
                        countDown -=1;
                        console.log('ça monte') ;

                    }else {

                        clearInterval(myInterval);
                        sas.setAttribute('position', {
                            x: 0,
                            y:1,
                            z:-0.02
                        });
                        console.log('ça a fini de monter')  
                    }
                                        
                    }, 60);

                }

        }

        controlSas.addEventListener('click', function() {

            if (stateSas) {
                moveDoor();
                stateSas = false;
            } else {
                moveDoor();
                stateSas = true;
            }

            
        });

    }    
	
})