import Header from '../components/Header'
import AdminTrips from '../components/AdminTrips'
import React, {useState, useEffect} from 'react'
import {Button} from '@mui/material'

import { useLocation } from 'react-router-dom';


function AdminCompleted() {

  const location = useLocation();
  const tripState = location.state?.tripState;
  const [trips, setTrips] = useState([])

    //Get this from API request
    const makeAPICall = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/admin/trips/'+tripState, {mode:'cors'});
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

  //Get this from API request
  const totalItems = trips.length;

  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  function changePage(amt){
    setPage(page+amt >= 1 && page+amt <= Math.ceil((totalItems)/itemsPerPage)? page+amt : page);
  }

  return (
    <div className="Unter">
      <Header />
      <h2>
      Admin - {tripState}
      </h2>
      <AdminTrips trips={trips} />
      <div> 
        <Button  onClick={() => changePage(-1)}>{"<"}</Button>
        {page}
        <Button  onClick={() => changePage(1)}>{">"}</Button>
      </div>
      
    </div>
  );
}

export default AdminCompleted;