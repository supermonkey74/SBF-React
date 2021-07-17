import React from 'react';
import '../Styles/css/card.css';
import Arena from '../Assets/arena.jpg'


function ArenaCards() {
  

  return (

    
<div className="card bg-dark shadow-lg p-3 mb-5 bg-white rounded" >

<img src={Arena} className="card-img-top" alt="Arena"></img>

  <div className="card-body">
    <p className="card-text"> <ul> 
    
      <li> Large 135 X 250 covered and screened arena</li>
      <li> Custom Kiser footing</li>
      <li>LED lighting</li>
      <li> MacroAir Fans</li>
</ul>
</p>
    
  </div>
</div>




  );
}

export default ArenaCards ;

