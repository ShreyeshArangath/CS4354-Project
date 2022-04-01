import PropTypes from 'prop-types'

handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


const Location_Input = ({ color, title, text }) => {


    return(
        <div style={{ backgroundColor: color}}
        className="w3-boarder-rad-10 w3-padding-16"> 
            <h3>{title}</h3>
            <form onSubmit={this.handleSubmit}>
            <label>
                Field:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
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