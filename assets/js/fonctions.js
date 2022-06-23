AFRAME.registerComponent('play-pause', {
	init: function () {
		var myVideo = document.querySelector('#pub-glorydev');
		var videoControls = document.querySelector('#videoControls');
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

AFRAME.registerComponent('raycaster-listen', {
	init: function () {
    // Use events to figure out what raycaster is listening so we don't have to
    // hardcode the raycaster.
    this.el.addEventListener('raycaster-intersected', evt => {
      this.raycaster = evt.detail.el;
    });
    this.el.addEventListener('raycaster-intersected-cleared', evt => {
      this.raycaster = null;
    });
  },

  tick: function () {
    if (!this.raycaster) { return; }  // Not intersecting.

    let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
    if (!intersection) { return; }
    console.log(intersection.point);
  }
});