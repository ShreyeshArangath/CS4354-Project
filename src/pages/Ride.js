import Header from '../components/Header'
import LocationInput from '../components/LocationInput';
import {useState} from 'react'

import React from 'react';
import TripConfirmationForm from '../components/TripConfirmationForm';
import { useNavigate } from 'react-router-dom';


function Ride() {

  //Get/set this from api request
  const [tripInfo, setTripInfo] = useState('N/A')
  const [cardInfo, setCardInfo] = useState('N/A')

  //Get this from api request
  const confTrip = {
    charge: 20.0,
    wait: 3,
    distance: 20
  }

  const navigate = useNavigate();

  function onUpdate(dat){
    setTripInfo(dat);
    alert(dat.fromCountry);
  }

  function confirmTrip(dat){
    setCardInfo(dat);
    alert(dat.cardZip);
  }

  function createTrip(){
    //Add API to create trip
    
    const tripID = Math.floor(100000 + Math.random() * 900000)// TODO: will get this upon trip creation
    navigate('/Trip', {state: {tripID: tripID, status: 'Ride'}} )
    
  }

  return (
    <div className="Unter">
      <Header />
      <div>
        <h2>
        Find A Ride
        </h2>

        <LocationInput  saveData={onUpdate} title1="Starting Location" title2="Destination Location"/>
        <TripConfirmationForm saveData={confirmTrip} tripInfo={confTrip} onSubmit={createTrip}/>
      </div>
    </div>
  );
}

export default Ride;