
        let stateSaber = true;

AFRAME.registerComponent('open-saber', {

	init: function () {

        let button = document.getElementById('button-saber');
        let laser = document.getElementById('laserOfSaber');

        button.addEventListener('click', {

            if (stateSaber) {

                laser.setAttribute('geometry', {
                    height: 0.6,
                    radius: 0.01
                });

            } else {

                laser.setAttribute('geometry', {
                    height: 0,
                    radius:0
                });

            }

        })


    }

})