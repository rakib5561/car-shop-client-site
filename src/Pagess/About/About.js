import React from 'react';
import './About.css';
import aboutImg from '../../img/img-parallax03-img01.jpg'

const About = () => {
    return (
        <div className="about-wrape">
            <div className="about-container">

                <div className="about-desc">
                     <h1>Our Reputation Speaks <br />
                    for Itself</h1>
                    <div className="line"></div>
                    <br />
                    <p>CaLeader has been raising the standard of used car retailing with one of the most 
                        innovative and reliable used vehicle programmes ever created. A comprehensive range of benefits as standard has evolved over time and, today,
                         drivers can leave the forecourt with total reassurance and peace of mind.
                        <br /> <br />
                For used vehicles, we calculate a fair retail price based on a detailed 
                analysis of comparable current and previous car listings in a given market.</p>

                    <ul>
                        <li>Guaranteed lien-free vehicles</li>
                        <li>Contribute to a compensation fund for your protection</li>
                        <li>30-day dealer warranty</li>
                        <li>All vehicles serviced</li>
                    </ul> 

                </div>

                <div className="about-img">
                    <img src={aboutImg} alt="" />
                </div>

            </div>
        </div>
    );
};

export default About;