import {Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';

//TODO: Link GO button to a new page

const DriverTrip = ({ trip, onTripSelect }) => {

    const navigate = useNavigate();

    return (
        <tr key={trip.tripID}> 
            <td>{trip.tripID}</td>
            <td>{trip.price/20}</td>
            <td>{trip.fname} {trip.lname} - {trip.passengerRating}* - {trip.numPassengers} Person</td>
            <td>${trip.price}</td>
            <td>
                <Button  variant="outlined" onClick={() => navigate('/Trip', {state: {tripID: trip.tripID, status: 'Drive'}} )}> GO </Button> 
            </td>
        </tr>

    )

}

export default DriverTrip;