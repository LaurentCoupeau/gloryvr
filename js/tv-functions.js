
let buttonTv = document.querySelector('#buttonTv');
let videoPub = document.querySelector('#video');
let stateTv;

if (scene.hasLoaded) {
  stateTv = false;

} 
// video pub de glorydev
AFRAME.registerComponent('play-pause', {

	init: function () {
        video.setAttribute('geometry', {
          width:1.28,
          height:0.72
        })

        buttonTv.setAttribute('material', 'src', 'assets/icones/play.png');
        
        buttonTv.addEventListener('click', function() {

          if (stateTv == false){
            console.log(stateTv)

            buttonTv.setAttribute('material', 'src', 'assets/icones/pause.png');
            videoPub.play();

            stateTv = true;

          } else {
            let curent = video.currentTime;
            console.log(stateTv)

            buttonTv.setAttribute('material', 'src', 'assets/icones/play.png');
            videoPub.currentTime=curent;
            videoPub.pause();
            stateTv = false;

          }
        
        })
		
	}
});