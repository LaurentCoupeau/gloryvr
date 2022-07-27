let stateTv = false;
// video pub de glorydev
AFRAME.registerComponent('play-pause', {
	init: function () {
        let tv = document.querySelector('#tv');
        let screen = document.querySelector('#screen');
        let buttonTv = document.querySelector('#buttonTv')
        let video = document.createElement('a-video');

        video.setAttribute('geometry' ,{
          width: 1.28,
          height: 0.72
        });

        video.setAttribute('src', 'assets/video/pub-glorydev.mp4');
        buttonTv.addEventListener('click', function() {
          if (stateTv == false){
            tv.remove(screen);
            tv.append(video);
            video.play();
            stateTv = true;

          } else {
            video.pause();
            video.currentTime=0;
            tv.remove(video);
            tv.append(screen);
            stateTv = false;
            console.log(screen)
          }
        
        })
		
	}
});