import React, {Component} from 'react';
import { connect } from 'react-redux';

class CheckInButton extends Component {
  //Checking in
  handleCheckIn = () => {
    const status = !this.props.checked_in;
    //Sends dispatch to 
    this.props.dispatch({type: 'PUT_CHECK_IN', payload: {pet_id: this.props.pet_id, checked_in: status}});
  }

  //Conditional Render for whether or not the Pet is checked in based on check_in field
  checkInOrOut = () => {
      if(this.props.checked_in) {
        return <button onClick={this.handleCheckIn}>Check Out</button>;
      } else {
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