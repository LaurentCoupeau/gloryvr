

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


// interaction pour les tiroirs du bureau
let bureau = [];
let tiroir1 = document.getElementById('tiroir1');
let tiroir2 = document.getElementById('tiroir2');
let tiroir3 = document.getElementById('tiroir3');
let tiroir4 = document.getElementById('tiroir4');
let tiroir5 = document.getElementById('tiroir5');
let tiroir6 = document.getElementById('tiroir6');

bureau.push(tiroir1, tiroir2, tiroir3, tiroir4, tiroir5, tiroir6);

bureau.forEach(element => {
    element.addEventListener('mouseenter', function(){
        element.setAttribute('material', 'color', '#025698');
		console.log('ok')

    })
    element.addEventListener('mouseleave', function(){
        element.removeAttribute('material', 'color');

    })
    
});
// AFRAME.registerComponent('open-close',  {
// 	init: function () {
// 		let parent= this.el.parentNode;
// 		parent.setAttribute('position', {z: 0.6}, true);
//   }
// });