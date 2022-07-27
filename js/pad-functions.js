let pads = document.getElementsByClassName('pad');

//les bruitages
let soundPad = document.createElement('audio');
soundPad.src='assets/sounds/sound-pad.mp3';

//les pads tactiles
let tactilPad = document.getElementById('tactil-pad');
// ecran de la surface de controle
let screenPad = document.createElement('a-image');
//mise en forme de l'ecran de la surface de controle
screenPad.setAttribute('geometry', {
    width:2.56,
    height:1.48
})
screenPad.setAttribute('position', {
    x: 0,y:1,z:-0.5
})
screenPad.setAttribute('material', {
    visible: false
})

tactilPad.append(screenPad);

// ecouteur d'évènement
for (let i=0; i<pads.length; i++) {
    
    pads[i].addEventListener ('click', function() {
        soundPad.volume="0.5";
        soundPad.play();

        switch (i) {

            case 0:
                screenPad.setAttribute('material', 'visible', 'true')
                screenPad.setAttribute('material' , 'src', 'assets/img/fiches/presentation.png');
                break;
            case 1:
                screenPad.setAttribute('material', 'visible', 'true')
                screenPad.setAttribute('material' , 'src', 'assets/img/fiches/engagements.png');
                break;
            case 2:
                screenPad.setAttribute('material', 'visible', 'true')
                screenPad.setAttribute('material' , 'src', 'assets/img/fiches/formations.png');
                break;
            case 3:
                screenPad.setAttribute('material', 'visible', 'true')
                screenPad.setAttribute('material' , 'src', 'assets/img/fiches/prestations.png');
                break;
            case 4:
                screenPad.setAttribute('material', 'visible', 'true')
                screenPad.setAttribute('material' , 'src', 'assets/img/fiches/partenaires.png');
                break;
            case 5:
                screenPad.setAttribute('material', 'visible', 'true')
                screenPad.setAttribute('material' , 'src', 'assets/img/fiches/infos.png');
                break;

        }
    })
}