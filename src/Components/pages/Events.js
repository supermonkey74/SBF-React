import React from 'react';
import  './Events.css';
// import Logo from '../Assets/Spellbound2.jpg'

export default function Events() {

    return(
        <>
        <div className="event-outer-container">
            
            <div className="spellbound-events">
                <h3 className="sbf-events-title">Spellbound Events</h3>

                    {/* <img src={Logo} alt="" className="" /> */}

                <ul className="">
                    <li>Show 1</li>
                    <li>Show 1</li>
                    <li>Show 1</li>
                </ul>
            </div>    
                    <div className="clubs-container">

                        <div className="club-events">
                            <h3 className="sbf-events-title">Clubs</h3>
                            <ul className="">
                                <li>Club 1</li>
                                <li>Club 2</li>
                                <li>Club 3</li>
                                <li>Club 4</li>
                                <li>Club 5</li>
                                <li>Club 6</li>

                            </ul>
                        </div>    
                    
                        <div className="sbf-events">
                            <h3 className="sbf-events-title">Spellbound away Events</h3>
                            <ul className="">
                                <li>Show 1</li>
                                <li>Show 2</li>
                                <li>Show 3</li>
                                <li>Show 4</li>
                                <li>Show 5</li>
                                <li>Show 6</li>
                                <li>Show 7</li>
                                <li>Show 8</li>
                                <li>Show 9</li>
                                <li>Show 10</li>
                                <li>Show 11</li>
                            </ul>
                        </div> 
                    </div>  
            
            
        </div>
        </>
    )
}