import Button from "./Button";


//TODO: Link GO button to a new page

const DriverTrip = ({ trip }) => {
    return (
        <tr key={trip.id}> 
            <td>{trip.id}</td>
            <td>{trip.distance}</td>
            <td>{trip.user_fname} {trip.user_lname} - {trip.user_rating}*</td>
            <td>${trip.payout}</td>
            <td>
                <Button text="GO"  />
            </td>
        </tr>

    )

}

export default DriverTrip;