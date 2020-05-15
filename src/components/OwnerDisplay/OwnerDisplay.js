import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OwnerDisplay.css';

class OwnerDisplay extends Component {

    handleDelete = (event, ownerId) => {
        console.log('Deleting owner with id:', ownerId);
        this.props.dispatch({ type: 'DELETE_OWNER', payload: ownerId });
    }

    render() {
        return (
            <div className="offEdge">
                <table id="owner-table" className="pet-table">
                    <thead>
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
                    </thead>
                    <tbody>
                        {this.props.owners.map(owner =>
                            <tr key={owner.id}>
                                <td>{owner.name}</td>
                                <td>{owner.pet_count}</td>
                                <td>
                                    <button onClick={(event) => this.handleDelete(event, owner.id)}>
                                        Delete
                                </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStoreToProps = (reduxStore) => ({
    owners: reduxStore.setOwner
})

export default connect(mapStoreToProps)(OwnerDisplay);