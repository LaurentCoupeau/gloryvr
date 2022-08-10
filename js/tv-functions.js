
let buttonTv = document.querySelector('#buttonTv');
let tv = document.getElementById('tv');
let screen = document.getElementById('screen');
let stateTv = false;
// let video = document.getElementById('video');
let videoPub = document.createElement('a-video');



videoPub.setAttribute('src',  'assets/video/pub-glorydev.mp4');

videoPub.setAttribute('geometry', {
  width:1.28,
  height:0.72
})
if (scene.hasLoaded) { stateTv = false; } 

// video pub de glorydev
AFRAME.registerComponent('play-pause', {

	init: function () {

    // buttonTv.setAttribute('material', 'src', 'assets/icones/play.png');
    
    buttonTv.addEventListener('click', function() {

      if (stateTv == false){

        buttonTv.setAttribute('material', 'src', 'assets/icones/pause.png');
        tv.append(videoPub);
        tv.remove(screen);
        console.log(tv)
        
        videoPub.play();
        stateTv = true;


      } else {
        
        let curent = videoPub.currentTime;
        buttonTv.setAttribute('material', 'src', 'assets/icones/play.png');
        videoPub.currentTime=curent;
        videoPub.pause();
        stateTv = false;

      } 
    });
	}
});