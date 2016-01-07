// do NOT care about global pollution
var slider = document.querySelector('#h2a-ctrls');
var ctrlDiv = document.querySelector('#h2a-w-ctrls');
var firstChildDiv = document.querySelector('#h2a-w-ctrls div:first-child');
var lastChildDiv = document.querySelector('#h2a-w-ctrls div:last-child');

function transformSetRotation (evt) {
  var deg = evt.target.value;
  // how quick two branches closing to trunk
  var childDeg = deg / 4;
  var lenScaleFactor = 1;
  var yTranslateOffset = 0;
  var xTranslateOffset = 0;
  ctrlDiv.style.transform = `rotate(${deg}deg)`;

  
  if (deg > 90) {
    firstChildDiv.style.transformOrigin = 'right 100%';
    lastChildDiv.style.transformOrigin = 'right 0%';    
    lenScaleFactor = 1 - 0.5 * ((deg - 90) / 90);
    // NOTE: number within the parens are manually configured through trial and errors
    yTranslateOffset = 7 + (2)* (deg - 90) / 90;
    xTranslateOffset = (6) * (deg - 90) / 90;
    
    firstChildDiv.style.transform = `
      rotate(${childDeg}deg)
      scale(${lenScaleFactor}, 1) 
      translate(${xTranslateOffset}px, ${yTranslateOffset}px)
    `;
    lastChildDiv.style.transform = `
      rotate(-${childDeg}deg)
      scale(${lenScaleFactor}, 1) 
      translate(${xTranslateOffset}px, -${yTranslateOffset}px)
    `;
  }
  else {
    firstChildDiv.style.transformOrigin = '';
    lastChildDiv.style.transformOrigin = '';    
    firstChildDiv.style.transform = `rotate(${childDeg}deg)`;
    lastChildDiv.style.transform = `rotate(-${childDeg}deg)`;
  }
}

slider.addEventListener('input', transformSetRotation)
