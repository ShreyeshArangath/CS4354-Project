import Header from '../components/Header'
import TripStatusForm from '../components/TripStatusForm'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



function Admin() {

  const [tripState, setTripState] = useState('IN_QUEUE')

  const navigate = useNavigate();

  return (
    <div className="Unter">
      <Header />
      <h2>
      Admin
      </h2>
      <TripStatusForm tripState={tripState} 
      redirectTo={(navTo,stateF) => {navigate('/'+navTo, stateF)}}/>
    </div>
  );
}

export default Admin;