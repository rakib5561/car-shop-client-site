import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Registration.css';

const Registration = () => {

    const {RegisterNewUser, handleEmail, handlePassword, handleName} =  useAuth();

    return (

        <div className="registration-wrapper">
            
            <div className="registration-container">
                <h2>Please,Register</h2>
                <form onSubmit={RegisterNewUser} className="register-form">
                        <input onBlur={handleName} type="text" placeholder="your name" />
                        <input onBlur={handleEmail} type="email"  placeholder="your email" />
                        <input onBlur={handlePassword} type="password" placeholder="your password" />
                        <p className="go-login">Already have an account? <Link to='/login'>login</Link></p>
                        <input type="submit" value="Register" />
                </form>

            </div>

        </div>
    );
};

export default Registration;