import React, {Component} from 'react';
import { connect } from 'react-redux';

class CheckInButton extends Component {
  //Checking in
  handleCheckIn = () => {
    console.log('Current status', this.props.checked_in)
    const status = (this.props.checked_in === 'true');
    //Sends dispatch to 
    this.props.dispatch({type: 'PUT_CHECK_IN', payload: {pet_id: this.props.pet_id, checked_in: !status}});
  }

  //Conditional Render for whether or not the Pet is checked in based on check_in field
  checkInOrOut = () => { 
      const status = (this.props.checked_in === 'true');
      if(status) {
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