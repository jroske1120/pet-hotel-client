import React, { Component } from 'react';

//import components to be used on this page
import DeletePetButton from '../Buttons/DeletePetButton';
import CheckInButton from '../Buttons/CheckInButton';
import { connect } from 'react-redux';

class HistoryTableList extends Component {

  render() {
    return (
      // Needs a map here to go over each item
      <tbody>
        {this.props.display.map(item =>
            <tr key={item.id}>
              <td>{item.owners_name}</td>
              <td>{item.pets_name}</td>
              <td>{item.breed}</td>
              <td>{item.color}</td>
              <td>{(item.checked_in === 'true') ? 'Yes' : 'No' }</td>
              <td><CheckInButton checked_in={item.checked_in} pet_id={item.id}/></td>
              <td><DeletePetButton pet_id={item.id}/></td>
            </tr>
        )}
        </tbody>
    )
  }
}

const mapStoreToProps = (reduxStore) => ({
  display: reduxStore.getDisplay
})
export default connect(mapStoreToProps)(HistoryTableList);

