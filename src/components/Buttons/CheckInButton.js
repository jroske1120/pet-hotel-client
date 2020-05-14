import React, {Component} from 'react';
import { connect } from 'react-redux';

class CheckInButton extends Component {
    state = {
        checked_in: false
    }
  
  //Method for deleting a pet from the history table
  handleCheckIn = () => {
    this.setState({check_in: !this.state.checked_in});
    //Sends dispatch to deletePetSaga
    //this.props.dispatch({type: 'PUT_CHECK_IN', payload: {pet_id: 1, checked_in: this.state.check_in}});
    
  }

  //Conditional Render for whether or not the Pet is checked in based on check_in field
  checkInOrOut = () => {
      if(this.state.check_in === true) {
        return <button onClick={this.handleCheckIn}>Check Out</button>;
      } else if (this.state.checked_in === false){
        return <button onClick={this.handleCheckIn}>Check In</button>;
      }
  }

  render() {
    return (
        <>
            {this.checkInOrOut()}
        </>
    )
  }
}

export default connect()(CheckInButton);