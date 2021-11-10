import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-wrap">
            
            <div className="contact-container">
                <div className="contact-info">
                    <h4>Contact Info</h4>
                    <p>CaLeader has a strong 
                    and committed sales staff with many years of experience satisfying our customers’ needs.</p>
                    
                    <h5>Office Address:</h5>
                    <p>3261 Anmoore Road Brooklyn, NY 11230</p>

                    <h5>Service Department Address:</h5>
                    <p>3261 Anmoore Road Brooklyn, NY 11230</p>

                    <h5>Call Center:</h5>
                    <p>800-123-4567</p>

                    <h5>E-mail:</h5>
                    <p>information@youremal.com</p>

                    <h5>Operating Hours</h5>
                    <p>Mon-Sat: 8:00am - 5:00pm <br />
                    Sunday is closed</p>

                </div>
                
                
                <div className="get-touch">
                    <h1>Get in touch</h1>
                    <div className="line"></div>
                    <p>Feel free to browse our massive
                     inventory online, set up a test drive with a sales associate, or inquire about financing!</p>

                    <div >

                        <form className="contact-form">
                               <input type="text"  placeholder="Your Name"/>
                               <input type="number"  placeholder="Your Phone"/>
                               <textarea name="" id="" cols="80" rows="10" placeholder="send your massage"></textarea>
                               <input type="submit" value="send massage" />
                        </form>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default Contact;