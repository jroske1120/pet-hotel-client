import React, { Component } from 'react';

//import individual components to be on this page
import HistoryTableList from './HistoryTableList';

class HistoryTable extends Component {
  render() {
    return (
      <div className="offEdge">
        <h2>History</h2>
        <table className="pet-table">
          <thead>
            <tr>
              <th>Owner Name</th>
              <th>Pet Name</th>
              <th>Pet Breed</th>
              <th>Color</th>
              <th>Checked In</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <HistoryTableList />
          <tfoot>
            <tr><td colSpan="6"> </td></tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

export default HistoryTable;