import Header from '../components/Header'
import AdminTrips from '../components/AdminTrips'
import PeopleTable from '../components/PeopleTable'
import React, {useState, useEffect} from 'react'

import { useLocation } from 'react-router-dom';


function AdminCompleted() {

  const location = useLocation();
  const tripState = location.state?.tripState;
  const [data, setData] = useState([])

    //Get this from API request
    const makeAPICall = async () => {
      if (tripState === "DRIVERS" || tripState === "PASSENGERS"){
        try {
          const response = await fetch('http://localhost:9000/api/admin/'+tripState, {mode:'cors'});
          const data = await response.json();
          console.log("We Got The People")
          console.log({ data })
          setData(data);
        }
        catch (e) {
          console.log(e)
        }
      }
      else {
        try {
          const response = await fetch('http://localhost:9000/api/admin/trips/'+tripState, {mode:'cors'});
          const data = await response.json();
          console.log("We Got The Trips")
          console.log({ data })
          setData(data);
        }
        catch (e) {
          console.log(e)
        }
      }

    }
    useEffect(() => {
      makeAPICall();
    }, [])

  //Get this from API request
  const totalItems = data.length;

  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  function changePage(amt){
    setPage(page+amt >= 1 && page+amt <= Math.ceil((totalItems)/itemsPerPage)? page+amt : page);
  }

  function tableKind() {
    if (tripState === "DRIVERS" || tripState === "PASSENGERS"){
      return (
        <PeopleTable peoples={data} />
      );
    }
    else {
      return (
        <AdminTrips trips={data} />
        );
    }
  }

  return (
    <div className="Unter">
      <Header />
      <h2>
      Admin - {tripState}
      </h2>
      {tableKind()}
      <p> 
        <button onClick={() => changePage(-1)}>{"<"}</button>
        {page}
        <button onClick={() => changePage(1)}>{">"}</button>
      </p>
      
    </div>
  );
}

export default AdminCompleted;