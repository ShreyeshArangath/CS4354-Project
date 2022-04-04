import Header from '../components/Header'
import DriverTrips from '../components/DriverTrips'
import {useState} from 'react'

import React from 'react';


function Drive() {

  //Get this from API request
  const [trips, setTrips] = useState([
    {
        id: 23023,
        distance: 21.2,
        user_fname: "John",
        user_lname: "Smith",
        user_rating: 4.2,
        payout: 19.20
      },
      {
        id: 13233,
        distance: 10.2,
        user_fname: "Frederika",
        user_lname: "Erdmann",
        user_rating: 2.0,
        payout: 50.20
      }
  ])

const totalItems = 2; //Get this from API request 

const itemsPerPage = 10;
const [page, setPage] = useState(1);

function changePage(amt){
  setPage(page+amt >= 1 && page+amt <= Math.ceil((totalItems)/itemsPerPage)? page+amt : page);
}
  return (
    <div className="Unter">
      <Header />
      <h2>
        Drive - Select A Trip
      </h2>

      <DriverTrips trips={trips} />
      Need to hook this up properly when we get API requests
      <p> 
        <button onClick={() => changePage(-1)}>{"<"}</button>
        {page}
        <button onClick={() => changePage(1)}>{">"}</button>
      </p>
    </div>
  );
}

export default Drive;