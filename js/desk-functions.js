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

    let stateTiroir = false;

    element.addEventListener('click', function(){
        let pos = element.getAttribute('position');
        let posX = pos['x'];
        let posY = pos['y'];
        let posZ= pos['z'];

        if (stateTiroir) {    

            element.setAttribute('position', {

                x: posX,
                y: posY,
                z: posZ - 0.3

            })
            stateTiroir = false;

        } else {
            element.setAttribute('position', {

                x: posX,
                y: posY,
                z: posZ + 0.3
    
            })
            stateTiroir = true;
        }


        


		

    })
    
});
