import React, { Component } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import './OwnerForm.css';

class OwnerForm extends Component {
  state = {
    name: '',
  }

  handleChange = (event) => {
    // console.log( 'Got change on name', event.target.value );

    this.setState({
      ...this.state,
      name: event.target.value,
    })
  }

  handleSubmit = (event) => {
    console.log('Got a submit', this.state)
    this.props.dispatch({ type: 'ADD_OWNER', payload: this.state });
    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <div id="add-owner" className="offEdge">
        <form>
          <h3>Add Owner</h3>
          <input
            type="text"
            placeholder="Owner Name"
            onChange={(event) => this.handleChange(event)}
            value={this.state.name}
          ></input>
          <button
            className="button"
            onClick={(event) => this.handleSubmit(event)}>
            Submit
            </button>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(OwnerForm);