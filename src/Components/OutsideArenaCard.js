import React from 'react';
import './card.css';
import Arena from '../Assets/driveway-smaller.jpg'


function OutsideArenaCards() {
  

  return (

    
<div className="card bg-dark shadow-lg p-3 mb-5 bg-white rounded" >

<img src={Arena} className="card-img-top" alt="Arena"></img>

  <div className="card-body">
    <p className="card-text"> Large 135 X 250 outdoor arena
      

</p>
    
  </div>
</div>




  );
}

export default OutsideArenaCards ;

