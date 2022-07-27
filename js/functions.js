

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
		

    })
    element.addEventListener('mouseleave', function(){
        element.removeAttribute('material', 'color');

    })
    
});


// fonction d'affichage console.log sous controller gauche

let leftHand = document.getElementById('left-hand');
let plan = document.createElement('a-plane');
let textValue = "hello !!!";
let text = document.createElement('a-text');
text.setAttribute('value', textValue);

plan.setAttribute('geometry', {
  width:0.1,
  height:0.15
})
plan.setAttribute('position', {
  x:0.1,
  y:-0.05,
  z:0
})
plan.setAttribute('rotation', {
  x:45,
  y:180,
  z:0
})

text.setAttribute('width', 0.5);
text.setAttribute('anchor', 'left')

text.setAttribute('position', {
  x:-0.05,
  y:0.05,
  z:0
})
plan.setAttribute('material','color', 'black');
plan.append(text)

leftHand.append(plan)

// hover clickables object functions
let clickableObjects = document.querySelectorAll('.clickable');
for (let i=0; i<clickableObjects.length; i++){
  clickableObjects[i].addEventListener('mouseenter', function(){
    clickableObjects[i].setAttribute('material', 'color', 'lime');
  });

  clickableObjects[i].addEventListener('mouseleave', function() {
    clickableObjects[i].setAttribute('material', 'color', 'aqua')
  });
}