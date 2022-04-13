import Header from '../components/Header'
import TripStatusForm from '../components/TripStatusForm'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



function Admin() {

  const [tripState, setTripState] = useState('InQueue')

  const navigate = useNavigate();

  return (
    <div className="Unter">
      <Header />
      <h2>
      Admin
      </h2>
      Add Credentials or something
      <TripStatusForm tripState={tripState} 
      redirectTo={(navTo,stateF) => {navigate('/'+navTo, stateF)}}/>
    </div>
  );
}

export default Admin;