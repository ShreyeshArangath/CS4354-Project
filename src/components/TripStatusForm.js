import React from 'react';


class TripStatusForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: props.tripState};

        this.redirectTo = props.redirectTo;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.redirectTo('Admin/'+this.state.value, {state: {tripState: this.state.value}})
    }
  
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="InQueue">In Queue</option>
              <option value="InProgress">In Progress</option>
              <option value="Completed">Completed</option>
              
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

export default TripStatusForm;