import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    return (
        <div className="registration-wrapper">
            
            <div className="registration-container">
                <h2>Please,Register</h2>
                <form action="" className="register-form">
                        <input type="text" name="" id="" placeholder="your name" />
                        <input type="email" name="" id="" placeholder="your email" />
                        <input type="password" name="" id="" placeholder="your password" />
                        <p className="go-login">Already have an account? <Link to='/login'>login</Link></p>
                        <input type="submit" value="Register" />
                </form>

            </div>

        </div>
    );
};

export default Registration;