import Header from '../components/Header'
import AdminTrips from '../components/AdminTrips'
import React, {useState } from 'react'

import { useLocation } from 'react-router-dom';


function AdminCompleted() {

  const location = useLocation();
  const tripState = location.state?.tripState;

  // this needs to be replaced with an api call 
  // like http://localhost:3000/Admin/Completed/10/1 for the first page
  // or http://localhost:3000/Admin/Completed/10/2 for the second page
  const [trips, setTrips] = useState([[ 
    {
        id: 1,
        distance: 21.2,
        pass_id: 12398,
        driver_id: 59823,
        price: 384
      },
      {
        id: 2,
        distance: 10.2,
        pass_id: 878828,
        driver_id: 3202,
        price: 421
      },
      {
        id: 3,
        distance: 21.2,
        pass_id: 12398,
        driver_id: 59823,
        price: 384
      },
      {
        id: 4,
        distance: 10.2,
        pass_id: 878828,
        driver_id: 3202,
        price: 421
      },
      {
        id: 5,
        distance: 21.2,
        pass_id: 12398,
        driver_id: 59823,
        price: 384
      },
      {
        id: 6,
        distance: 10.2,
        pass_id: 878828,
        driver_id: 3202,
        price: 421
      },
      {
        id: 7,
        distance: 21.2,
        pass_id: 12398,
        driver_id: 59823,
        price: 384
      },
      {
        id: 8,
        distance: 10.2,
        pass_id: 878828,
        driver_id: 3202,
        price: 421
      },
      {
        id: 9,
        distance: 21.2,
        pass_id: 12398,
        driver_id: 59823,
        price: 384
      },
      {
        id: 10,
        distance: 10.2,
        pass_id: 878828,
        driver_id: 3202,
        price: 421
      }
  ],
  [{
    id: 11,
    distance: 21.2,
    pass_id: 399398,
    driver_id:599323,
    price: 293992
  },
  {
    id: 12,
    distance: 10.2,
    pass_id: 873132,
    driver_id: 312321,
    price: 5
  }]
  ])

  //Get this from API request
  const totalItems = 12;

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
      <AdminTrips trips={trips[page-1]} isQueue={tripState === 'InQueue'}/>
      Need to hook this up properly when we get API requests
      <p> 
        <button onClick={() => changePage(-1)}>{"<"}</button>
        {page}
        <button onClick={() => changePage(1)}>{">"}</button>
      </p>
      
    </div>
  );
}

export default AdminCompleted;