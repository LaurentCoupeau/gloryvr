
		AFRAME.registerComponent('play-pause', {
			init: function () {
				var myVideo = document.getElementById('pub-glorydev');
				var videoControls = document.getElementById('videoControls');
				this.el.addEventListener('click', function () {
					if (myVideo.paused) {
						myVideo.play();
						videoControls.setAttribute('src', '#pause');
					} else {
						myVideo.pause();
						videoControls.setAttribute('src', '#play');
					}
				});
			}
		});