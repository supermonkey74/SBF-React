import React from 'react';
import  './Events.css';
// import Logo from '../Assets/Spellbound2.jpg'

export default function Events() {

    return(
        <>
        <div className="event-outer-container">
            
            <div className="spellbound-events">
                <h3 className="sbf-events-title">Events at Spellbound Farm</h3>
                    <div className="underline-large"></div>                                                    
                    {/* <img src={Logo} alt="" className="" /> */}

                <ul className="5">
                    <div className="sbf-show-list">
                    <li className="show-list-item-date">Date</li> <li className="show-list-desc">Description</li>
                    </div>
                    <div className="sbf-show-list">
                    <li className="show-list-item-date">Date</li> <li className="show-list-desc">Description</li>
                    </div>
                    <div className="sbf-show-list">
                    <li className="show-list-item-date">Date</li> <li className="show-list-desc">Description</li>
                    </div>
                </ul>
            </div>    
                    <div className="clubs-container">

                        <div className="club-sites">
                            <h3 className="sbf-events-title">Proud members of:</h3>
                            
                            <ul className="">
                                <li> <a href="https://www.nthjc.com/" target="none">North Texas Hunter Jumper Club</a>  </li>
                                <li> <a href="https://dallashunterjumperscholarship.org/" target="none">Dallas Hunter Jumper Scholarship</a> </li>
                                <li> <a href="https://www.ushja.org/" target="none">USHJA</a> </li>
                                <li> <a href="https://www.usef.org/" target="none">USEF</a></li>
                                <li><a href="https://www.thja.org/" target="none">Texas Hunter Jumper Association</a> </li>
                                <li><a href="https://apha.com/" target="none">American Paint Horse Association</a></li>

                            </ul>
                        </div>    
                    
                        <div className="sbf-events">
                            <h3 className="sbf-events-title">Show calendar</h3>
                            <div className="underline-large"></div>
                            <ul className="">
                            <div className="sbf-show-list">
                    <li className="show-list-item-date">Date</li> <li className="show-list-desc">Description</li>
                    </div>
                    <div className="sbf-show-list">
                    <li className="show-list-item-date">Date</li> <li className="show-list-desc">Description</li>
                    </div>
                    <div className="sbf-show-list">
                    <li className="show-list-item-date">Date</li> <li className="show-list-desc">Description</li>
                    </div>
                            </ul>
                        </div> 
                    </div>  
            
            
        </div>
        </>
    )
}