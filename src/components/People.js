import Button from "./Button";
import { useNavigate } from 'react-router-dom';

//TODO: Link GO button to a new page

const People = ({ people }) => {

    const navigate = useNavigate();


    return (
        <tr key={people.userID}> 
            <td>{people.userID}</td>
            <td>{people.fname} {people.lname}</td>
            <td>{people.dob}</td>
        </tr>

    )

}

export default People;