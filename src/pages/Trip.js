import Header from '../components/Header'
import {useState, useEffect} from 'react'

import React from 'react';
import { useLocation } from 'react-router-dom';



function Trip() {

  

  const location = useLocation();
  const tripID = location.state?.tripID;
  const tripSent = location.state?.status; //the page this state came from

  //Get this from API request
  const [trip, setTrip] = useState(0)
  const [driverPay, setDriverPay] = useState(0)
  const [passenger, setPassenger] = useState(0)

    //TODO: TestDelete Trip for Admin / Cancel trip
    //      Add Take Trip Functionality
    //      Add functonality to take you here from make a Trip
  const makeAPICall = async () => {
    try {
      const responseTrip = await fetch('http://localhost:9000/api/driver/trips/'+tripID, {mode:'cors'});
      const dataTrip = await responseTrip.json();
      console.log("We got trip");
      console.log({ dataTrip })
      setTrip(dataTrip[0]);

      const responseDP = await fetch('http://localhost:9000/api/driver/trips/payment/'+tripID, {mode:'cors'});
      const dataDP = await responseDP.json();
      console.log("We got driver Payment");
      console.log({ dataDP })
      setDriverPay(dataDP);
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])

  const deleteTrip = async () => {
    alert('Deleting Trip')
    try {
      const response = await fetch('http://localhost:9000/api/admin/trips/'+tripID, {mode:'cors'});
      const data = await response.json();
      console.log("Deleting Trip");
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }


  function showButtons() {
    if (tripSent === 'Drive' && trip.state == 'IN_QUEUE'){// If this page is generated for Passenger
      return(
        <button onClick={deleteTrip}>CANCEL</button> //TODO: Add logic to do DELETE api call here
      );
    } else if (tripSent === 'Ride' && trip.state == 'IN_QUEUE' ){// If this page is generated for a Driver
      return(
        <button onClick={()=>alert('Taking Trip') }>TAKE TRIP</button> //TODO: Add logic to do trip update out of queue
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
    return (trip.state !== 'IN_QUEUE' ? <p>{trip.driver_fname} {trip.driver_lname} - {trip.driver_raiting}*</p>: <p>Searching...</p>)
  }

  return (
    <div className="Unter">
      <Header />
      <h2>
        Trip - ID: {tripID}<br></br>
        {trip.tag}
      </h2>
      <h3>Starting Location</h3>
      <p>{trip.fromAddress}</p>

      <h3>Destination Location</h3>
      <p>{trip.toAddress}</p>

      <h3>Passenger</h3> 
      <p>{trip.pass_fname} {trip.pass_lname} - {trip.pass_raiting}*<br></br>
      Number of Passengers: {trip.numPassengers}
      </p>
      
      <h3>Driver</h3> 
      {driver()}

      <h3>Info</h3> 
      <p>
      Price: ${(trip.price+0.0).toFixed(2)}<br></br>
      Driver Payout:  ${(driverPay.driverPaymentAmount+0.0).toFixed(2)} 
      </p>

      {showButtons()}<br></br>
    </div>
  );
}

export default Trip;