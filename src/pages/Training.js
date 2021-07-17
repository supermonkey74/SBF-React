import React from 'react';
import '../Styles/css/training.css';
import HotelCard from '../Components/HotelCard'

export default function Training() {

    return(
        <div className="training-container">
        <h1 className="training">Training</h1>
        <div className="training-container-inner">
       
                {/* {training.map( ({id, description, img, date},loupe) => (
                    <div className="gallery" key={id}>
                        <img src={loupe} alt="loupe"  className="loupe-img" width="100%" height="100%"/>
                        <img src={img} alt="gallery-img" className="cover"/>
                        <span className='title'>
                            <h4>{description}, {date}</h4>
                        </span>
                    </div>
                ))} */}

                <HotelCard />
                
            </div>   


        </div>
    )
}