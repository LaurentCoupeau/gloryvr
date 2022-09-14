let pointsOfTeleportations = document.querySelectorAll('.teleport');
let cam = document.querySelector('#cam-rig');

for (let i=0; i<pointsOfTeleportations.length; i++) {

    pointsOfTeleportations[i].addEventListener('click', function() {
        let positionCamera= cam.object3D.position;
        let position = pointsOfTeleportations[i].object3D.position;
        cam.setAttribute('position', position);
        console.log(position, positionCamera);

    })

}