import AdminTrip from './AdminTrip'


const AdminTrips = ({ trips }) => {

    return (
        <table >
            <thead>
                <tr>
                    <th>Trip ID</th>
                    <th>Trip Requested Time</th>
                    <th>Passenger ID</th>
                    <th>Driver ID</th>
                    <th>Total Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {trips.map((trip)=>(
                    <AdminTrip key={trip.tripID} trip={trip} />
                ))}
            </tbody>
        </table>
    )
}

export default AdminTrips;