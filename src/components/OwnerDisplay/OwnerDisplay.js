import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OwnerDisplay.css';

class OwnerDisplay extends Component {

  render() {
    return (
        <table id="owner-table">
            <tr>
                <th colSpan="3" id="table-title">
                    Owner's
                </th>
            </tr>
            <tr>
                <th>Name</th>
                <th>Number of Pets</th>
                <th>Actions</th>
            </tr>
            {this.props.owners.map( owner =>
                    <tr id={owner.id}>
                        <td>{owner.name}</td>
                        <td>{owner.pet_count}</td>
                        <td><button>Delete</button></td>
                    </tr>
            )}
        </table>
    );
  }
}

const mapStoreToProps = (reduxStore) => ({
    owners: reduxStore.setOwner
  })

export default connect(mapStoreToProps)(OwnerDisplay);