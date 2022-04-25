import People from './People'


const PeopleTable = ({ peoples }) => {
    return (
        <table >
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                {peoples.map((people)=>(
                    <People key={people.userID} people={people} />
                ))}
            </tbody>
        </table>
    )
}

export default PeopleTable;