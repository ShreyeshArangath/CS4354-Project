import Header from '../components/Header'
import {useState} from 'react'

import React from 'react';
import { useLocation } from 'react-router-dom';



function Trip() {

  const location = useLocation();
  const tripID = location.state?.tripID;
  const tripSent = location.state?.status; //the page this state came from

  //Get this from API request
  const [trip, setTrip] = useState(
    {
        id: 23023,
        tag: "In Queue",
        distance: 21.2,
        pass_fname: "John",
        pass_lname: "Smith",
        pass_raiting: 4.2,
        cost: 49.20,
        payout: 10.02,
        fromAddr: '42 Wallaby Lane',
        fromCity: 'Sydney',
        fromState: '',
        fromCountry: 'Australia',
        fromZip: '74229',
        toAddr: '221B Baker St',
        toCity: 'London NW1 6XE',
        toState: '',
        toCountry: 'United Kingdom',
        toZip: '88302',
        numPassenger: 4,
        estWait: 3,
        driver_fname: 'Woski',
        driver_lname: "McKane",
        driver_raiting: 2.0
    }
  )

  function showButtons() {
    if (tripSent === 'Drive'){// If this page is generated for Passenger
      return(
        <button onClick={()=>alert('Canceling Trip') }>CANCEL</button> //TODO: Add logic to do DELETE api call here
      );
    } else if (tripSent === 'Ride'){// If this page is generated for a Driver
      return(
        <button onClick={()=>alert('Taking Trip') }>TAKE TRIP</button> //TODO: Add logic to do trip update out of queue
      );
    } else if (tripSent === 'Admin'){// If this page is generated for a Driver
      return(//TODO: somehow edit trip and DELETE
        <>
        <button onClick={()=>alert('Edit Trip Functionality') }>EDIT</button> 
        <button onClick={()=>alert('DELETE TRIP') }>DELETE</button>
        </>
      );
    }
  }


  function driver() {
    return (trip.tag !== 'In Queue' ? <p>{trip.driver_fname} {trip.driver_lname} - {trip.driver_raiting}*</p>: <p>Searching...</p>)
  }

  return (
    <div className="Unter">
      <Header />
      <h2>
        Trip - ID: {tripID}<br></br>
        {trip.tag}
      </h2>
      <h3>Starting Location</h3>
      <p>{trip.fromAddr}<br></br>
      {trip.fromCity}, {trip.fromState} {trip.fromZip}<br></br>
      {trip.fromCountry}
      </p>

      <h3>Destination Location</h3>
      <p>{trip.toAddr}<br></br>
      {trip.toCity}, {trip.toState} {trip.toZip}<br></br>
      {trip.toCountry}
      </p>

      <h3>Passenger</h3> 
      <p>{trip.pass_fname} {trip.pass_lname} - {trip.pass_raiting}*<br></br>
      Number of Passengers: {trip.numPassenger}
      </p>
      
      <h3>Driver</h3> 
      {driver()}

      <h3>Info</h3> 
      <p>Est. Wait: {trip.estWait} min <br></br>
      Trip Distance: {trip.distance} mi <br></br>
      Cost: ${trip.cost.toFixed(2)}<br></br>
      Driver Payout:  ${trip.payout.toFixed(2)}
      </p>

      {showButtons()}<br></br>
      <button onClick={()=>alert("Trip ID of trip taken from last page: " +tripID) }>dumb</button>
    </div>
  );
}

export default Trip;