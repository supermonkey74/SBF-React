import React from 'react';
import { Link } from 'react-router-dom';
import { Button2 } from '../Button2';

export default function Home() {

    return(
        <div className="home">

           <div className="inside-home">
                <p>Welcome to Spellbound Farm</p> 
                    <div className="inside-inside-home">
                      <p>Hunters / Jumpers and Equitation</p>
                    </div>   
                    <div className="hs-information">
                    <ul >    
                    <li>
            <Link
              to='/events'
              className='events-mobile'
              
            >
              Horse Show information
            </Link>
          </li>
          
        </ul>
        <Button2 />
        </div>
            </div>
        </div>
    )
}