// TV GLORYDEV
AFRAME.registerComponent('play-pause', {
	init: function () {
    let buttonTv = document.querySelector('#buttonTv');
    let pub = document.getElementById('video');
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

// TV EKLEIPSI
AFRAME.registerComponent('play-ekleipsi', {
	init: function () {
    let buttonTvRoom = document.querySelector('#buttonTvRoom');
    let pubEkleipsi = document.getElementById('video-ekleipsi');
    let stateTv = false;
    buttonTvRoom.setAttribute('material', 'src', 'assets/icones/play.png');

    buttonTvRoom.addEventListener('click', function() {
      if (stateTv == false){
        buttonTvRoom.setAttribute('material', 'src', 'assets/icones/pause.png');      
        pubEkleipsi.volume='0.4';  
        pubEkleipsi.play();
        stateTv = true;
      } else {        
        let curent = pubEkleipsi.currentTime;
        buttonTvRoom.setAttribute('material', 'src', 'assets/icones/play.png');
        pubEkleipsi.currentTime=curent;
        pubEkleipsi.pause();
        stateTv = false;
      } 
    });
	}
});