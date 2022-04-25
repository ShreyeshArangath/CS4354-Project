import {Button} from'@mui/material'
import { useNavigate } from 'react-router-dom';

//TODO: Link GO button to a new page
const styles = {
    color: "grey"
}

const AdminTrip = ({ trip }) => {

    const navigate = useNavigate();


    return (
        <tr key={trip.tripID}> 
            <td>{trip.tripID}</td>
            <td>{trip.tripRequestedTime}</td>
            <td>{trip.state !== "IN_QUEUE" ? trip.passenger_userID : trip.userID}</td>
            <td>{trip.state !== "IN_QUEUE" ? trip.driver_userID : 'Finding Driver'}</td>
            <td>${trip.price.toFixed(2)}</td>
            <td>
                <Button variant="outlined" onClick={() => navigate('/Trip', {state: {tripID: trip.tripID, status: 'Admin'}} )}> View</Button>
            </td>
        </tr>

    )

}

export default AdminTrip;