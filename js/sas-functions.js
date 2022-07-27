// video pub de glorydev


AFRAME.registerComponent('open-sas', {
	init: function () {
        let yState = -1;
        let zState = 0;
        let stateSas = false;
        let sas = document.querySelector('#sas');
        let controlSas = document.querySelector('#control-sas');
        let sasSound = document.createElement('audio');
        sasSound.src='assets/sounds/sas.mp3';

        controlSas.addEventListener('click', function() {
            sasSound.play();

            switch(stateSas) {

                case false:

                    setInterval(() => {

                        if (yState <= 1) {

                            yState += 0.1;
                            zState = -0.05;
                            sas.setAttribute('position', {
                                x: 0,
                                y:yState,
                                z:zState
                            });

                        } else {

                            yState = 1;
                            sas.setAttribute('position', {
                                x:0,
                                y:yState,
                                z:zState
                            });
                            stateSas = true
                        };

                    }, 60);
                    break;
                
                case true:

                    setInterval(() => {

                        if (yState >= -1) {

                            yState -= 0.1;
                            sas.setAttribute('position', {
                                x: 0,
                                y:yState,
                                z:-0.05
                            });

                        } else {

                            yState = -1;
                            sas.setAttribute('position', {
                                x: 0,
                                y:yState,
                                z:0
                            });
                            stateSas = false
                        };

                    }, 60);
                    break;

            }          

        });
    }	
	
})