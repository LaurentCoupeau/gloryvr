let screenHeure = document.getElementById('heure');

function showDate() {
    setInterval(() => {
        let laDate = new Date();
        let heure = laDate.getHours();
        let minute = laDate.getMinutes();
        let seconde = laDate.getSeconds();
        if (seconde < 10){
            seconde = "0" + laDate.getSeconds();
        }
    
        let showDate = heure + ":" + minute + ":" + seconde;
        screenHeure.setAttribute ('value' , showDate);
    }, 60);

}

showDate();