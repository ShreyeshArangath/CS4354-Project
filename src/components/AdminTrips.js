import AdminTrip from './AdminTrip'


const AdminTrips = ({ trips, isQueue }) => {

    return (
        <table >
            <thead>
                <tr>
                    <th>Trip ID</th>
                    <th>Distance</th>
                    <th>Passenger ID</th>
                    <th>Driver ID</th>
                    <th>Total Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {trips.map((trip)=>(
                    <AdminTrip key={trip.id} trip={trip} isQueue={isQueue}/>
                ))}
            </tbody>
        </table>
    )
}

export default AdminTrips;