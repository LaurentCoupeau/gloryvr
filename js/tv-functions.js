let buttonTv = document.querySelector('#buttonTv');
let pub = document.getElementById('video');
let stateTv = false;
buttonTv.setAttribute('material', 'src', 'assets/icones/play.png');
// video pub de glorydev
AFRAME.registerComponent('play-pause', {
	init: function () {
    buttonTv.addEventListener('click', function() {
      if (stateTv == false){
        buttonTv.setAttribute('material', 'src', 'assets/icones/pause.png');        
        pub.play();
        stateTv = true;
      } else {        
        let curent = pub.currentTime;
        buttonTv.setAttribute('material', 'src', 'assets/icones/play.png');
        pub.currentTime=curent;
        pub.pause();
        stateTv = false;
      } 
    });
	}
});