
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
          tv.remove(screen);
          tv.append(video);
          video.play()
        
        })
		
	}
});