import React from 'react';
import ArenaCards from '../Card';
import OutsideArenaCards from '../OutsideArenaCard';


export default function Facility() {

    return(

        <div className="outside">
        <div className="facility">
                <h1>Our Facility</h1>

                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati libero vitae accusamus, voluptates eum, quis magni pariatur ea vero error similique! Eaque eos, nihil corporis expedita minima aliquam autem culpa, commodi quos consequuntur, quaerat laborum dolores nulla fugit ullam quas itaque architecto totam eum alias harum quam vero placeat. Iste, nam sit laboriosam repellendus perspiciatis dolores dolore eveniet consequuntur porro est quod possimus amet! Molestiae adipisci excepturi similique dolorem quas vitae molestias laborum id dicta magnam aut, unde dolorum tenetur ducimus atque quasi, veritatis doloremque saepe fugiat voluptate repellendus consequuntur? Fuga ipsam adipisci, ab facilis porro a voluptates dicta modi.</p>
                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati libero vitae accusamus, voluptates eum, quis magni pariatur ea vero error similique! Eaque eos, nihil corporis expedita minima aliquam autem culpa, commodi quos consequuntur, quaerat laborum dolores nulla fugit ullam quas itaque architecto totam eum alias harum quam vero placeat. Iste, nam sit laboriosam repellendus perspiciatis dolores dolore eveniet consequuntur porro est quod possimus amet! Molestiae adipisci excepturi similique dolorem quas vitae molestias laborum id dicta magnam aut, unde dolorum tenetur ducimus atque quasi, veritatis doloremque saepe fugiat voluptate repellendus consequuntur? Fuga ipsam adipisci, ab facilis porro a voluptates dicta modi.</p>
          </div>
                 <div className="arena-outer-container">
            
                         <div className="arena-inner-container">
                                     <div className="arena-photos">
              

                <ArenaCards />
                <OutsideArenaCards />
                <ArenaCards />
                <OutsideArenaCards />
                
           
                                     </div>
                                     
                         </div>
                 </div>



                 </div>


       
    )
}