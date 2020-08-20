import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import individual components to be used on this page
import AddPetForm from '../../AddPetForm/AddPetForm';
import HistoryTable from '../../HistoryTable/HistoryTable';

class HomePage extends Component {
  render() {
    return (
      <div>
        <AddPetForm />
        <HistoryTable />
      </div>
    )
  }
}
export default connect()(HomePage);

