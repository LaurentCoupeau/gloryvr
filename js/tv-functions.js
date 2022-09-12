// TV GLORYDEV
AFRAME.registerComponent('play-pause', {
	init: function () {
    let buttonTv = document.querySelector('#buttonTv');
    let pub = document.getElementById('video1');
    let stateTv = false;
    buttonTv.setAttribute('material', 'src', 'assets/icones/play.png');
    buttonTv.addEventListener('click', function() {
      if (stateTv == false){
        buttonTv.setAttribute('material', 'src', 'assets/icones/pause.png');     
        pub.volume='0.4';   
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

// TV ROOM
AFRAME.registerComponent('play-room', {
	init: function () {
    let buttonTvRoom = document.querySelector('#buttonTvRoom');
    let pubGlory = document.getElementById('video2');
    let stateTv = false;
    buttonTvRoom.setAttribute('material', 'src', 'assets/icones/play.png');

    buttonTvRoom.addEventListener('click', function() {
      if (stateTv == false){
        buttonTvRoom.setAttribute('material', 'src', 'assets/icones/pause.png');      
        pubGlory.volume='0.4';  
        pubGlory.play();
        stateTv = true;
      } else {        
        let curent = pubGlory.currentTime;
        buttonTvRoom.setAttribute('material', 'src', 'assets/icones/play.png');
        pubGlory.currentTime=curent;
        pubGlory.pause();
        stateTv = false;
      } 
    });
	}
});