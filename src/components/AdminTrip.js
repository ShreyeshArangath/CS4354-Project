import Button from "./Button";
import { useNavigate } from 'react-router-dom';

//TODO: Link GO button to a new page

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
                <Button text="View" onClick={() => navigate('/Trip', {state: {tripID: trip.tripID, status: 'Admin'}} )}/>
            </td>
        </tr>

    )

}

export default AdminTrip;