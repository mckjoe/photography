import React from 'react';
import cloudyDay from './../assets/images/clouds1.JPG';
import shake from './../assets/images/shake23.JPG';
import redcar from './../assets/images/redcar.JPG';
import img from './../assets/images/08.JPG';


function Galleries() {
  return(
    <div>
      <div className="gallery-thumbs">
        <img src={cloudyDay} />
        <p>Landscapes</p>
      </div>
      <div className="gallery-thumbs">
        <img src={img} />
        <p>Cityscapes</p>
      </div>
      <div className="gallery-thumbs">
        <img src={shake} />
        <p>People/Weddings/Family</p>
      </div>
      <div className="gallery-thumbs">
        <img src={redcar} />
        <p>Arts/Funs</p>
      </div>

    </div>
  );
}

export default Galleries;
