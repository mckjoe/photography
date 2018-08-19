import React from 'react';
import cloudyDay from './../assets/images/clouds1.JPG';
import shake from './../assets/images/shake23.JPG';
import redcar from './../assets/images/redcar.JPG';
import trillium from './../assets/images/trillium.JPG';
import cannon from './../assets/images/cannon.JPG';
import img from './../assets/images/08.JPG';

function ImageFade() {
  window.addEventListener("DOMContentLoaded", function(e) {

  var stage = document.getElementsByClassName("stage");

  var fadeComplete = function(e) {
    stage.appendChild(arr[0]);
  };

  var arr = document.getElementsByClassName("fader-image");

  for(var i=0; i < arr.length; i++) {
    arr[i].addEventListener("animationend", fadeComplete, false);
  }

  }, false);
  return(
    <div className="stage">
      <a href={cloudyDay}><img className="fader-image" src={cloudyDay} /></a>
      <a href={cannon}><img className="fader-image" src={cannon} /></a>
      <a href={shake}><img className="fader-image" src={shake} /></a>

    </div>
  );
}
export default ImageFade;
