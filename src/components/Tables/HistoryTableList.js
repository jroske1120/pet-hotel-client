import React, { Component } from 'react';

//import components to be used on this page
import DeletePetButton from '../Buttons/DeletePetButton';
import { connect } from 'react-redux';

class HistoryTableList extends Component {

  render() {
    return (
      // Needs a map here to go over each item
      <div>
        {this.props.display.map(item =>
          <tbody>
            <tr>
              <td>{item.owners_name}</td>
              <td>{item.pets_name}</td>
              <td>{item.breed}</td>
              <td>{item.color}</td>
              <td>true</td>
              <td><DeletePetButton /> | <button>Check In</button></td>
            </tr>
          </tbody>
        )}
      </div>
    )
  }
}

const mapStoreToProps = (reduxStore) => ({
  display: reduxStore.getDisplay
})
export default connect(mapStoreToProps)(HistoryTableList);

