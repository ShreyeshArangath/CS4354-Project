import DriverTrip from './DriverTrip'


const DriverTrips = ({ trips, onDelete }) => {

    return (
        <table >
            <thead>
                <tr>
                    <th>Trip ID</th>
                    <th>Distance</th>
                    <th>Passenger Name</th>
                    <th>Expected Payout</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {trips.map((trip)=>(
                    <DriverTrip key={trip.id} trip={trip}/>
                ))}
            </tbody>
        </table>
    )
}

export default DriverTrips;