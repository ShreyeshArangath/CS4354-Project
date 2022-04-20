import Header from '../components/Header'
import {useState, useEffect} from 'react'

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



function Trip() {

  const navigate = useNavigate();

  const location = useLocation();
  const tripSent = location.state?.status; //the page this state came from

  //Get this from API request
  const [trip, setTrip] = useState(location.state?.tripI)
  const [driverPay, setDriverPay] = useState(0)
  const [driverEmail, setDriverEmail] = useState("")
  //const [passenger, setPassenger] = useState(0)

    //TODO: TestDelete Trip for Admin / Cancel trip
    //      Add Take Trip Functionality
    //      Add functonality to take you here from make a Trip
    //      New API call for the trip on refresh 
  const makeAPICall = async () => {
    try{
      const responseTR= await fetch('http://localhost:9000/api/driver/trips/'+trip.tripID, {mode:'cors'});
      const dataTR = await responseTR.json();
      console.log("We got trip with ID "+ trip.tripID);
      console.log({ dataTR })
      setTrip(dataTR[0]);
    }
    catch (e) {
      console.log(e)
    }

    try {
      const responseDP = await fetch('http://localhost:9000/api/driver/trips/payment/'+trip.tripID, {mode:'cors'});
      const dataDP = await responseDP.json();
      console.log("We got driver Payment");
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
      navigate('/Trip', {state: {tripI: trip, status: 'Drive'}} )
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
      console.log("Taking Trip");
      console.log({ data })
      navigate('/Trip', {state: {tripI: trip, status: 'Drive'}} )
    }
    catch (e) {
      console.log(e)
    }
  }


  function showButtons() {
    if (tripSent === 'Ride' && trip.state === 'IN_QUEUE'){// If this page is generated for Passenger
      return(
        <button onClick={deleteTrip}>CANCEL</button> //TODO: Add logic to do DELETE api call here
      );
    } else if (tripSent === 'Drive' && trip.state === 'IN_QUEUE' ){// If this page is generated for a Driver
      return(
        <button onClick={takeTrip}>TAKE TRIP</button> //TODO: Add logic to do trip update out of queue
      );
    } else if ((tripSent === 'Drive' && trip.state === 'IN_PROGRESS') || (tripSent === 'Admin' && trip.state === 'IN_PROGRESS')){// If this page is generated for a Driver
      return(
        <button onClick={completeTrip}>COMPLETE</button> //TODO: Add logic to do trip update out of queue
      );
    } else if (tripSent === 'Admin'){// If this page is generated for a Driver
      return(
        <>
        <button onClick={deleteTrip}>DELETE</button> 
        </>
      );
    }
  }

//

//Est. Wait: {trip.estWait} min <br></br>
//Trip Distance: {trip.distance} mi <br></br>
  function driver() {
    
    if (trip.state !== 'IN_QUEUE') {
      return (
        <p>
        Driver Name: {trip.driver_fname} {trip.driver_lname}<br></br>
        Passenger Raiting: {trip.driverRating}*<br></br>
        </p>
      )
    } else if (trip.state === 'IN_QUEUE' && tripSent === 'Ride'){
      return (
        <p>Searching...</p>
      )
    }
    else if (trip.state === 'IN_QUEUE' && tripSent === 'Drive'){
      return (
        <form>
          <label>Enter your Driver Email:
            <input type="text" onChange={(e) => setDriverEmail(e) } />
          </label>
        </form>
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
      Passenger Name: {trip.fname} {trip.lname}<br></br>
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