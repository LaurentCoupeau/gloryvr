// video pub de glorydev
AFRAME.registerComponent('open-sas', {
	init: function () {
        let sas = document.querySelector('#sas');
        let controlSas = document.querySelector('#control-sas');

        controlSas.addEventListener('click', function() {
            console.log('ok')
            sas.setAttribute('material', { opacity:0 });
        });
    }	
	
});