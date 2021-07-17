import React from 'react';
import '../Styles/css/card.css';
import Arena from '../Assets/arena.jpg'
import {ArenaCardData } from './Arena-card-data';
import {ArenaCardData2 } from './Arena-card-data';
import {ArenaCardData3 } from './Arena-card-data';
import {ArenaCardData4 } from './Arena-card-data';


function ArenaCards() {
  

  return (
<>
    
<div className="card bg-dark shadow-lg p-3 mb-5 bg-white rounded" >


<img src={Arena} className="card-img-top" alt="Arena"></img>


  <div className="card-body">
  {ArenaCardData.map((item, index) => {
          return (

           
              <div key={index}>
              
                {item.title}
              
            </div>
          );
        })}
    
  </div>
</div>

<div className="card bg-dark shadow-lg p-3 mb-5 bg-white rounded" >

<img src={Arena} className="card-img-top" alt="Arena"></img>



  <div className="card-body">
  {ArenaCardData2.map((item, index) => {
    return (

           
<div key={index}>

  {item.title}

</div>
);
})}
    
  </div>
</div>

<div className="card bg-dark shadow-lg p-3 mb-5 bg-white rounded" >

<img src={Arena} className="card-img-top" alt="Arena"></img>



  <div className="card-body">
  {ArenaCardData3.map((item, index) => {
    return (

           
<div key={index}>

  {item.title}

</div>
);
})}
    
  </div>
</div>

<div className="card bg-dark shadow-lg p-3 mb-5 bg-white rounded" >

<img src={Arena} className="card-img-top" alt="Arena"></img>



  <div className="card-body">
  {ArenaCardData4.map((item, index) => {
    return (

           
<div key={index}>

  {item.title}

</div>
);
})}
    
  </div>
</div>



</>
  );
}

export default ArenaCards ;

