import React from 'react';
import './MakeEasy.css';
import easyImg from '../../../img/img-parallax02-img02.jpg'

const MakeEasy = () => {
    return (
        <div className="make-easy-wrap">
            <div className="easy-container">
                <h2>We Make It Easy</h2>
                <div className="easy-content">
                    <div className="box-container">
                        <div className="box">
                            <h3>View Our Inventory</h3>
                            <p>Our car database has over 9,500 new an used vehicles</p>
                        </div>
                        <div className="box">
                            <h3>Get Easy Financing</h3>
                            <p>We offer a variety of loan programs for our clients</p>
                        </div>
                        <div className="box">
                            <h3>Value Your Trade-In</h3>
                            <p>here are many advantages to trading in your car here</p>
                        </div>
                        <div className="box">
                            <h3>Make A Payment</h3>
                            <p>You make a payment and leave us on your own car</p>
                        </div>
                    </div>
                    <div className="easy-img">
                        <img src={easyImg} alt="" />
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default MakeEasy;