import React, { useEffect, useState } from 'react';
import './Purchase.css';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Purchase = () => {

    const {objectId} = useParams();
    const [purchaseCar, setPurchaseCar] = useState([]);
    useEffect(()=>{
        fetch(`/purchase/${objectId}`)
            .then(res=>res.json())
            .then(data => setPurchaseCar(data))
    },[]);



    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="booking-wrape">

            <div className="booking-container">

            <div className="booking-details">
                <img src={purchaseCar.image} alt="" />
                <h5>{purchaseCar.name}</h5>
            </div>
            
            <div className="booking">
                <h4 className="purchase-tilte"> Purchase Your Dream</h4>
                <form className="purchase-form" onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("carName", { required: true, maxLength: 25 })} placeholder="Car Name" />
                    <input {...register("name", { required: true, maxLength: 25 })} placeholder="Your Name" />
                    <input {...register("email")} placeholder="Your Email" />
                    <input type="number" {...register("phone")} placeholder="Your Mobile" />
                    <input type="date" {...register("date")} />
                    
                    <textarea rows="8"  type="text" {...register("massage")} placeholder="Your massage" />
                    
                    <input className="btn-style" type="Book" />
                </form>
            </div>
            </div>

        </div>
    );
};

export default Purchase;