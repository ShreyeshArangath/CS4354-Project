import Button from "./Button";


//TODO: Link GO button to a new page

const AdminTrip = ({ trip, isQueue=false }) => {


    return (
        <tr key={trip.id}> 
            <td>{trip.id}</td>
            <td>{trip.distance}</td>
            <td>{trip.pass_id}</td>
            <td>{!isQueue ? trip.driver_id : 'Finding Driver'}</td>
            <td>${trip.price.toFixed(2)}</td>
            <td>
                <Button text="View" />
            </td>
        </tr>

    )

}

export default AdminTrip;