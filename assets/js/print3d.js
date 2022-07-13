let text=document.getElementById('texte');
let plateau = document.getElementById('plateau');
let suspention="";
let xValue = 0.01;

// animation du texte sur l'écran de l'imprimante
setInterval(() => {
    suspention += "."
    if (suspention == "....") {
        suspention = "";
    }

    text.setAttribute('value', 'impression ' + suspention)
}, 500);
