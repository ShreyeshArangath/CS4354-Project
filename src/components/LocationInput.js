
import { useForm } from "react-hook-form";
import React from "react";


export default function LocationInput({saveData, title1, title2}) {

    const { register, handleSubmit } = useForm();
    //TODO: make this so you cant submit this with nothing in here
    return (
        <form onSubmit={handleSubmit((data) => saveData(data))}>
            <div className='divLoc w3-boarder-rad-10 w3-padding-16'>
                <h2>{title1}</h2>
                <label>Address Line 1</label>
                <input id="fromAddrLine1" 
                {...register('fromAddrLine1')} />
                <label>Address Line 2</label>
                <input id="fromAddrLine2" 
                {...register('fromAddrLine2')} />
                <label>City</label>
                <input id="fromCity" 
                {...register('fromCity')} />
                <label>State</label>
                <input id="fromState" 
                {...register('fromState')} />
                <label>Zip Code</label>
                <input id="fromZipCode" 
                {...register('fromZipCode')} />
                <label>Country</label>
                <input id="fromCountry" 
                {...register('fromCountry')} />
            </div>
            <br></br>
            <div className='divLoc w3-boarder-rad-10 w3-padding-16'>
                <h2>{title2}</h2>
                <label>Address Line 1</label>
                <input id="toAddrLine1" 
                {...register('toAddrLine1')} />
                <label>Address Line 2</label>
                <input id="toAddrLine2" 
                {...register('toAddrLine2')} />
                <label>City</label>
                <input id="toCity" 
                {...register('toCity')} />
                <label>State</label>
                <input id="toState" 
                {...register('toState')} />
                <label>Zip Code</label>
                <input id="toZipCode" 
                {...register('toZipCode')} />
                <label>Country</label>
                <input id="toCountry" 
                {...register('toCountry')} />
            </div>
            <label>Number of Passengers</label>
            <input id="numPass" 
            {...register('numPass')} />
            <label>Email</label>
            <input id="usrEmail" 
            {...register('usrEmail')} />
            <br></br>
            fyi theres no data validation so gl backend
            <input type="submit" className="submitButton" />
        </form>
      );
}
