import React from 'react';
import ArenaCards from '../Components/Card';
import OutsideArenaCards from '../Components/OutsideArenaCard';


export default function Facility() {

    return(

        <div className="outside">
        <div className="facility">
                <h1>Our Facility</h1>

                <p className="">Spellbound Farm is a Small Private Hunter/Jumper Training and Show Barn where the horse comes first!</p>
                <p className="">We offer all inclusive training and boarding packages comprised of individualized custom care and training for the horse and rider. </p>
                <p className="">Our brand new state of the art facility is located on 68 rolling acres with private gated access.</p>
                <p className=""> Owners/trainers and caretakers live onsite to ensure hands on care for the horses.</p>
<br />
<h3>We offer the Following Amenities:</h3>
        <div>
                <ul>
                    <li>Unlimited turn-out in pipe and no-climb paddocks (individual or small group)</li>
                    <li>Spacious matted 14x12 airy stalls with large windows (fans and fly misters in the summer)</li>
                    <li>Outdoor wash racks, indoor wash racks (with hot/cold water, pour in rubber flooring, heaters, and LED lighting)</li>
                    <li>Four bay grooming areas</li>
                    <li>Climate controlled client lounge and restroom</li>
                    <li>Climate controlled client tack room with individual private lockers</li>
                    <li>Large 135 X 250 covered and screened arena</li>
                    <li>Custom Kiser footing</li>
                    <li>LED lighting</li>
                    <li>MacroAir Fans</li>
                    <li>Tons of acreage room to hack and ride out</li>
                    <li>Covered 6 horse free walker and additional 60 X 90 covered arena</li>

                </ul>
                </div>   
          </div>
                 <div className="arena-outer-container">
            
                         <div className="arena-inner-container">
                                     <div className="arena-photos">
              

                <ArenaCards />
                {/* <OutsideArenaCards /> */}
                {/* <ArenaCards /> */}
                {/* <OutsideArenaCards /> */}
                
           
                                     </div>
                                     
                         </div>
                 </div>



                 </div>


       
    )
}