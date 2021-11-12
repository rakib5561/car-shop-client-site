import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import './Dasboard.css';
import { useForm } from "react-hook-form";
import axios from 'axios';


const Dasboard = () => {

     const {user} = useAuth();
     const { register, handleSubmit,reset } = useForm();
     const onSubmit = data => {
        axios.post('http://localhost:5000/review', data)
            .then(res =>{
               if(res.data.insertedId){
                   alert("added successfully.");
                   reset();
               }
               else{
                   alert("package don't added.");
               }
            })
    }
    
    return (
        <div className="dasboard-wrap">
            <div className="dasboard-container">
                <div className="side-bar">  
                   <div className="side-bar-content">
                       <img className="side-bar-img" src={user.photoURL} alt="" />
                        <h5 className="side-bar-title">{user.displayName}</h5>
                        <nav className="side-nav">
                            <ul>
                                 <li><a href="#">My Order</a></li> 
                                <li><a href="#">Payment</a></li>
                                <li><a href="#review">Review</a></li>
                            </ul>
                        </nav>
                   </div>
                </div>
                <div className="dasboard-content">
                    <h1>Welcome to you Dasboard</h1>



                   <section>
                   <div id="#review">
                        <div className="review-form">
                        <h2>Send Us your Feedback</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="your name"/>
                        <textarea name="" id="" cols="20" rows="8" {...register("feedback", { required: true, maxLength: 1000 })}  placeholder="send your feedback"></textarea>
                        <input type="submit" />
                        </form>
                        </div>
                    </div>
                   </section>
                </div>
            </div>

        </div>
    );
};

export default Dasboard;