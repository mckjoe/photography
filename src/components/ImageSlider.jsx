import React from 'react';
import cloudyDay from './../assets/images/clouds1.JPG';
import cannon from './../assets/images/cannon.JPG';
import trillium from './../assets/images/trillium.JPG';
import img from './../assets/images/08.JPG';

function ImageSlclassNameer() {

  return(
    <div>
      <div className="slider">
        <figure>
          <img src={cloudyDay} alt="Hamilton Mountain" />
          <img src={cannon} alt="officespace" />
          <img src={trillium} alt="office space" />
          <img src={img} alt="office space" />
          <img src={cloudyDay} alt="office space" />
        </figure>
      </div>
    </div>
  );
}

export default ImageSlclassNameer;
