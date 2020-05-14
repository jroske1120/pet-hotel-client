import React, { Component } from 'react';

//import components to be used on this page
import deletePetButton from '../Buttons/DeletePetButton';
import DeletePetButton from '../Buttons/DeletePetButton';
import { connect } from 'react-redux';

class HistoryTableList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'DISPLAY_ITEMS' });
  }

  displayItems = (list) => {
    console.log('list is', list);

    if (list.checked_in === false) {

      return (

        <div>

          {this.props.display.map(item =>

            <tbody>
              <tr>
                <td>{item.owners_name}</td>
                <td>{item.pets_name}</td>
                <td>{item.breed}</td>
                <td>{item.color}</td>
                <td>false</td>
                <td><DeletePetButton /> | <button>Check In</button></td>
              </tr>
            </tbody>
          )}
        </div>
      )


    } else return (

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
  render() {
    return (
      // Needs a map here to go over each item
      <div>
        {this.displayItems(this.props.display)}
      </div>
    )
  }
}

const mapStoreToProps = (reduxStore) => ({
  display: reduxStore.getDisplay
})
export default connect(mapStoreToProps)(HistoryTableList);








