import React from 'react';
const Imsys = () =>{
  return (
    <div className = "main">
      
      <img src={require('../images/imsys1.png')}/>
      <p>Imsys is a spectral spatialization tool.</p>
      <br></br>
      <p>Working on getting this on github.</p>
      <br></br>
      <a href="https://ccrma.stanford.edu/events/imsys-spectral-panning-flocking-algorithms-in-multichannel-sound-environment" target="_blank">CCRMA Presentation </a>
      <br></br>
      <a href="https://www.youtube.com/watch?v=evg-l_ZhKA8&ab_channel=ccrmalite1" target="_blank">CCRMA Video</a>
      <br></br>
      <a href="https://cnmat.berkeley.edu/events/imsys-spectral-panning-flocking-algorithms-multi-channel-sound-environment-tommy-martinez?fbclid=IwAR2DXKfMArZxRFnE8FyFEzjAkakWzurgZtDDuLlFust4fkqf2W7TC03lPws" target="_blank">CNMAT Presentation</a>
    </div>
  );
}
export default Imsys;
