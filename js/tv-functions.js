let stateTv = false;
// video pub de glorydev
AFRAME.registerComponent('play-pause', {

	init: function () {
        let buttonTv = document.querySelector('#buttonTv');
        let videoPub = document.querySelector('#video');

        video.setAttribute('geometry', {
          width:1.28,
          height:0.72
        })

        buttonTv.setAttribute('material', 'src', 'assets/icones/play.png');
        
        buttonTv.addEventListener('click', function() {

          if (stateTv == false){

            buttonTv.setAttribute('material', 'src', 'assets/icones/pause.png');
            videoPub.play();

            stateTv = true;

          } else {

            buttonTv.setAttribute('material', 'src', 'assets/icones/play.png');
            videoPub.currentTime=0;
            videoPub.pause();
            stateTv = false;

          }
        
        })
		
	}
});