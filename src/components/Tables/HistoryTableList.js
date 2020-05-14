import React, {Component} from 'react';

class HistoryTableList extends Component {
  render() {
    return (
        // Needs a map here to go over each item
      <tbody>
          <tr>
              <td>Chris</td>
              <td>Charlie</td>
              <td>Shih-tzu</td>
              <td>Black</td>
              <td>No</td>
              <td><button>Delete</button> | <button>Check In</button></td>
          </tr>
      </tbody>
    )
  }
}

export default HistoryTableList;