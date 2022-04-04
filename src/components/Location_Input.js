import PropTypes from 'prop-types'
import { useState } from 'react'


const Location_Input = ({title}) => {
    const [tasks, setTasks] = useState([
        {
            id: 'addr_line_1',
            text: 'Address Line 1'
        },
        {
            id: 'addr_line_2',
            text: 'Address Line 1'
        },
        {
            id: 'city',
            text: 'City'
        },
        {
            id: 'state',
            text: 'State'
        },
        {
            id: 'zip_code',
            text: 'Zip Code'
        },
        {
            id: 'country',
            text: 'Country'
        }
    ])

    return(
        <div 
        className="w3-boarder-rad-10 w3-padding-16"> 
            <h3>{title}</h3>
            <form onSubmit={this.handleSubmit}>
            <label>
                Field:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                {tasks.map((tasks) => (
                    <h3 key={tasks.id}>{tasks.text}</h3>
                ))}
            </label>
            </form>
            
        </div>
    )
}

Location_Input.defaultProps = {
    color: 'grey'
}


Location_Input.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.array,
}

export default Location_Input