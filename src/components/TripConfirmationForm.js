import { useForm } from "react-hook-form";
import React from "react";


export default function TripConfirmationForm({saveData, tripInfo, onSubmit}) {

    const { register, handleSubmit } = useForm();
    //TODO: make this so you cant submit this with nothing in here
    return (
        <form onSubmit={handleSubmit((data) => saveData(data))}>
            <div className='divLoc w3-boarder-rad-10 w3-padding-16'>
                <h2>Payment Info</h2>
                <label>Card Number</label>
                <input id="cardNo" 
                {...register('cardNo')} />
                <label>Exp Date</label>
                <input id="cardExpDate" 
                {...register('cardExpDate')} />
                <label>CVV</label>
                <input id="cardcvv" 
                {...register('cardcvv')} />
                <label>Zip</label>
                <input id="cardZip" 
                {...register('cardZip')} />
            </div>
            <br></br>
            <div className='divLoc w3-boarder-rad-10 w3-padding-16'>
                <h2>Trip Info</h2>
                <label>Charge</label>
                <label className='textbox'>${tripInfo.charge}</label>
                <label>Est Wait</label>
                <label className='textbox'>{tripInfo.wait} min</label>
                <label>Distance</label>
                <label className='textbox'>{tripInfo.distance} km</label>
            </div>
            <br></br>
            <input type="submit" className="submitButton"  onClick={onSubmit} />
        </form>
      );
}


