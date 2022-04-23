import Header from '../components/Header'
import ReactStars from 'react-stars'
import {useState, useEffect} from 'react'

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



function Trip() {

  const navigate = useNavigate();

  const location = useLocation();
  const tripSent = location.state?.status; //the page this state came from
  const initTripID = location.state?.tripID // The trip id (sent from previous page)
  const [trip, setTrip] = useState("")
  const [driverPay, setDriverPay] = useState(0)
  const [driverEmail, setDriverEmail] = useState("")
  const [rating, setRating] = useState(5)

  const makeAPICall = async () => { 
    const tripCallStr = 'http://localhost:9000/api/driver/trip/'+initTripID // Get the trip
    console.log(tripCallStr)
    try{
      
      const responseTR= await fetch(tripCallStr, {method: 'GET'});
      const dataTR = await responseTR.json();
      console.log("We got trip with ID "+ initTripID);
      console.log({ dataTR })
      setTrip(dataTR[0]); // dataTR should return only one object, the trip, not all the trips
    }
    catch (e) {
      console.log(e)
    }

    try {
      const paymentCallStr = 'http://localhost:9000/api/driver/trips/payment/'+initTripID // Get the driver payment Info
      const responseDP = await fetch(paymentCallStr, {mode:'cors'});
      const dataDP = await responseDP.json();
      console.log("We got driver Payment"); // Payment info does not generate for new trips
      console.log({ dataDP })
      setDriverPay(dataDP);
    }
    catch (e) {
      console.log("Trip Payments: " + e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])

  const deleteTrip = async () => {
    alert('Deleting Trip')
    try {
      const response = await fetch('http://localhost:9000/api/admin/trips/'+trip.tripID, {method: 'DELETE', mode:'cors'});
      const data = await response.json();
      console.log("Deleting Trip");
      console.log({ data })
      navigate('/Admin')
    }
    catch (e) {
      console.log(e)
    }
  }

  const takeTrip = async () => {
    alert('Taking Trip. Do not lose page.')
    try {
      const response = await fetch('http://localhost:9000/api/driver/trips/accept/'+trip.tripID+'&'+driverEmail["nativeEvent"]["data"],
       {method: 'POST', mode:'cors'});
      const data = await response.json();
      console.log("Taking Trip");
      console.log({ data })
      makeAPICall()
    }
    catch (e) {
      console.log(e)
    }
  }

  const completeTrip = async () => {
    alert('Completing Trip')
    try {
      const response = await fetch('http://localhost:9000/api/driver/trips/completed/'+trip.tripID,
       {method: 'POST', mode:'cors'});
      const data = await response.json();
      console.log("Completing Trip");
      console.log({ data })
      makeAPICall()
    }
    catch (e) {
      console.log(e)
    }
  }
  const rateUser = async () => {
    try {
      console.log("Trying to rate a Trip w/ rating:" + rating);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "rating": rating } ) };
      
      if (tripSent === "Drive"){// Then we are rating a passenger
        const response = await fetch('http://localhost:9000/api/driver/trips/rating/'+trip.tripID,
        requestOptions);
        const data = await response.json();
        console.log({ data })
      } else{ // Then we are rating a driver
        const response = await fetch('http://localhost:9000/api/passenger/trips/rating/'+trip.tripID,
        requestOptions);
        const data = await response.json();
        console.log({ data })
      }
      console.log("Rated a Trip");
      navigate('/') // Navigate back home to make sure they cant submit this twice
    }
    catch (e) {
      console.log(e)
    }
  }


  function showButtons() {
    if (tripSent === 'Ride' && trip.state === 'IN_QUEUE'){
      return(
        <button onClick={deleteTrip}>CANCEL</button> 
      );
    } else if (tripSent === 'Drive' && trip.state === 'IN_QUEUE' ){
      return(
        <button onClick={takeTrip}>TAKE TRIP</button> 
      );
    } else if ((tripSent === 'Drive' && trip.state === 'IN_PROGRESS') || (tripSent === 'Admin' && trip.state === 'IN_PROGRESS')){
      return(
        <button onClick={completeTrip}>COMPLETE</button> 
      );
    } else if (tripSent === 'Admin'){
      return(
        <>
        <button onClick={deleteTrip}>DELETE</button> 
        </>
      );
    } // On Trip Completion
    else if (trip.state === 'COMPLETED' && (tripSent === 'Drive' || tripSent === 'Ride') ){//
      return(
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'}}>
          <ReactStars
            count={5}
            onChange={(rat) => setRating(rat)}
            size={24}
            color2={'#ffd700'} />
            <br></br>
            <br></br>
            <button onClick={rateUser}>Submit Rating</button> 
          </div>
      );
   }
  }

  function driver() {
    if (trip.state !== 'IN_QUEUE') {
      return (
        <p>
        Driver Name: {trip.driver_fname} {trip.driver_lname}<br></br>
        Driver Raiting: {trip.driverRating}*<br></br>
        </p>
      )
      }else if (trip.state === 'IN_QUEUE' && tripSent === 'Drive'){
        return (
          <form>
            <label>Enter your Driver Email:
              <input type="text" onChange={(e) => {setDriverEmail(e)}} />
            </label>
          </form>
        )
      }else if (trip.state === 'IN_QUEUE'){
      return (
        <p>Searching...</p>
      )
    }
  }

  

  return (
    <div className="Unter">
      <Header />
      <h2>
        Trip - ID: {trip.tripID}<br></br>
        {trip.tag}
      </h2>
      <h3> {trip.state} </h3>
      <h3>Starting Location</h3>
      <p>{trip.fromAddress}</p>

      <h3>Destination Location</h3>
      <p>{trip.toAddress}</p>

      <h3>Passenger</h3> 
      <p>
      Passenger Name: {trip.fname || trip.passenger_fname} {trip.lname || trip.passenger_lname} <br></br>
      Passenger Raiting: {trip.passengerRating}*<br></br>
      Number of Passengers: {trip.numPassengers}
      </p>
      
      <h3>Driver</h3> 
      {driver()}

      <h3>Info</h3> 
      <p>
      Requested At: {trip.tripRequestedTime}<br></br>
      Price: ${(trip.price+0.0).toFixed(2)}<br></br>
      Driver Payout:  ${(driverPay.driverPaymentAmount+0.0).toFixed(2)} 
      </p>

      {showButtons()}<br></br>
    </div>
  );
}

export default Trip;