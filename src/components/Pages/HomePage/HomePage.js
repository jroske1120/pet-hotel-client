import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import individual components to be used on this page
import AddPetForm from '../../Forms/AddPetForm';
import HistoryTable from '../../Tables/HistoryTable';

class HomePage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'DISPLAY_ITEMS' });
  };
  render() {
    return (

      <div>
        <h1>HOME Page</h1>
        <AddPetForm />
        <HistoryTable />
      </div>
    )
  }
}
export default connect()(HomePage);

