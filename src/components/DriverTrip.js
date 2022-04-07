import Button from "./Button";
import { useNavigate } from 'react-router-dom';

//TODO: Link GO button to a new page

const DriverTrip = ({ trip, onTripSelect }) => {

    const navigate = useNavigate();

    return (
        <tr key={trip.id}> 
            <td>{trip.id}</td>
            <td>{trip.distance}</td>
            <td>{trip.user_fname} {trip.user_lname} - {trip.user_rating}*</td>
            <td>${trip.payout}</td>
            <td>
                <Button text="GO"  onClick={() => navigate('/Trip', {state: {tripID: trip.id, status: 'Drive'}} )}/>
            </td>
        </tr>

    )

}

export default DriverTrip;