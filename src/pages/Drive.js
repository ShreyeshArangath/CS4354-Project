import Header from '../components/Header'
import DriverTrips from '../components/DriverTrips'
import {useState, useEffect} from 'react'
import React from 'react';


function Drive() {

  const [trips, setTrips] = useState([]);

  //Get this from API request
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/driver/trips', {mode:'cors'});
      const data = await response.json();
      console.log("We Got The Drive Trips")
      console.log({ data })
      setTrips(data);
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])

  const totalItems = trips.length; //Get this from API request 

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

      <DriverTrips trips={trips}/>
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