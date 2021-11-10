import React from 'react';
import './Banner.css';
import banner from '../../../img/slide-01.jpg'

const Banner = () => {
    return (
        <div className="banner-part">

            <div className="banner-container">
                    
                    <h1>Accelerating <br /> 
                    the <span>Future</span>
                    </h1>
                    <p>We offer over 9,500 new and used vehicles and if you <br />
                    need help finding nything we have a 24/7 team
                    </p>
                    <button className="btn-style">Explore</button>

            </div>
            
        </div>
    );
};

export default Banner;