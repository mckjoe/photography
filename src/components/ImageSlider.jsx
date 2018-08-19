import React from 'react';
import cloudyDay from './../assets/images/clouds1.JPG';
import cannon from './../assets/images/cannon.JPG';
import trillium from './../assets/images/trillium.JPG';
import redcar from './../assets/images/redcar.JPG';
import shake from './../assets/images/shake23.JPG';

function ImageSlclassNameer() {

  return(
    <div>
      <div className="slider">
        <figure>
          <img src={trillium} alt="office space" />
          <img src={redcar} alt="office space" />
          <img src={shake} alt="Hamilton Mountain" />
          <img src={cannon} alt="officespace" />
          <img src={cloudyDay} alt="office space" />
        </figure>
      </div>
    </div>
  );
}

export default ImageSlclassNameer;
