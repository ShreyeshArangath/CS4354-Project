
import { useForm } from "react-hook-form";
import React from "react";


export default function LocationInput({saveData, title1, title2}) {

    const { register, handleSubmit } = useForm();
    //TODO: make this so you cant submit this with nothing in here
    return (
        <form onSubmit={handleSubmit((data) => saveData(data))}>
            <div className='divLoc w3-boarder-rad-10 w3-padding-16'>
                <h2>{title1}</h2>
                <label>Address:</label>
                <input id="from" 
                {...register('from')} />
            </div>
            <br></br>
            <div className='divLoc w3-boarder-rad-10 w3-padding-16'>
                <h2>{title2}</h2>
                <label>Address:</label>
                <input id="to" 
                {...register('to')} />
            </div>
            <label>Number of Passengers</label>
            <input id="numPassengers" 
            {...register('numPassengers')} />
            <label>Email</label>
            <input id="passengerID" 
            {...register('passengerID')} />
            <br></br>
            <input type="submit" className="submitButton" />
        </form>
      );
}
