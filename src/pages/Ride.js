import Header from '../components/Header'
import Location_Input from '../components/Location_Input';
import Button from '../components/Button'

import React from 'react';


function Ride() {

  return (
    <div className="Unter">
      <Header />
      <div>
        <h2>
        Find A Ride
        </h2>

        <Location_Input  title="Starting Location"/>
      </div>
    </div>
  );
}

export default Ride;