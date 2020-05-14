import React, {Component} from 'react';
import { connect } from 'react-redux';

class DeletePetButton extends Component {
  
  //Method for deleting a pet from the history table
  handleDelete = () => {
    //Sends dispatch to deletePetSaga
    this.props.dispatch({type: 'DELETE_PET', payload: {pet_id: this.props.pet_id}});
  }

  render() {
    return (
      <button onClick={this.handleDelete}>Delete</button>
    )
  }
}

export default connect()(DeletePetButton);